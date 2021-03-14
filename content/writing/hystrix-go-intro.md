---
title: Circuit breaking using hystrix-go
date: 2015-05-09
icon: /images/avatar.png
summary: "So we have been looking at adding circuit breaking to our services at my current client as part of making them more resilient. We used the fantastic hystrix-go package and since I could not really find any other examples other than the ones in the tests, I thought I might share one."
---

For those of you who are not familiar with circuit breaking, imagine that you are developing a service which in turn makes requests to an external service. Regardless of whether that service is within your control or not, you need to consider what would happen when it becomes unavailable, because it most definitely will.

If you are not careful, your precious service will grind to a halt while waiting for your growing number of requests to complete. Even worse, if other applications are depending on your service, the error may propagate until the entire system is down. One way of preventing this disaster is to stop throwing requests at the poor, broken service for a while until it is up and running again. Much like _breaking a circuit_, get it? There is no shortage on articles explaining circuit breakers, so I will leave it there and focus on how to implement it using the `hystrix-go` package.

Using the `hystrix-go` package is really quite simple, the `hystrix.Go()` function is really all you need. The first argument is a string that allows you to configure the circuit breaker, the second argument is a function where you typically would do the request to another sub-system. Finally, the last argument is a fallback function that allows you to deal with errors.

The documentation describes two ways of using the `hystrix.Go()` function. Firstly, by using a fallback function you can handle the errors asynchronously:

```go
hystrix.Go("my_command", func() error {
    // talk to other services
    return nil
}, func(err error) error {
    // do this when services are down
    return nil
})
```

Typically though, in our case, we depend on the output from the other service before we can send a response back to our users. Which is why we have only used the second example from the documentation so far, which I will demonstrate with a tiny web service. This particular web service depends on an external service to tell us whether it is _hammer time_ or not.

```go
package main

import (
	"io/ioutil"
	"log"
	"net/http"

	"github.com/afex/hystrix-go/hystrix"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "GET" {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		resultChan := make(chan string, 1)
		errChan := hystrix.Go("my_command", func() error {
			resp, err := http.Get("http://localhost:6061")
			if err != nil {
				return err
			}
			defer r.Body.Close()

			b, err := ioutil.ReadAll(resp.Body)
			if err != nil {
				return err
			}

			resultChan <- string(b)

			return nil
		}, nil)

		// Block until we have a result or an error.
		select {
		case result := <-resultChan:
			log.Println("success:", result)
			w.WriteHeader(http.StatusOK)
		case err := <-errChan:
			log.Println("failure:", err)
			w.WriteHeader(http.StatusServiceUnavailable)
		}
	})

	http.ListenAndServe(":6060", nil)
}
```

Since the `hystrix.Go()` function actually returns an error channel, we can use a `select` statement to block until we either get a result or an error. Now, as long as the hammer time service is healthy, we are all good but let us see what happens in the log when we shut down the external service. After a couple of requests (depending on your configuration) you will see this:

```plain
hystrix-go: opening circuit my_command
```

which means that hystrix has determined that something is wrong and as a result, opened the circuit. Any further requests will get the 503 Service Unavailable.

```plain
failure: hystrix: circuit open
```

After a while we check whether the external service is back up or not.

```plain
hystrix-go: allowing single test to possibly close circuit my_command
```

In this case, the service is still down so we will still get the `ErrCircuitOpen` error, but this time we turn the other service back on before the next test.

```plain
failure: hystrix: circuit open
hystrix-go: allowing single test to possibly close circuit my_command
hystrix-go: closing circuit my_command
success: Hammer Time
```

Finally, the external service is back online! From our users' perspective, the service has been responding and telling them that "unfortunately the service is unavailable at this point but please check back later, ok?".

Instead of peaks in your monitoring dashboards you now might have a flat line, which may fool you into thinking that it is just low traffic so make sure you monitor any requests that hits an open circuit. In fact, any changes to breaker states are valuable information about the health of you system and you should monitor accordingly.

We have been using hystrix-go in a couple of our services for a while now and so far I have been really impressed with it. I have to admit that there is something very satisfying about watching stable graphs even when external sub-systems are down. I encourage you to try it out!

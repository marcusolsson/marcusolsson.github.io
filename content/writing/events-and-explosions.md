---
title: Events and explosions in a distributed system
date: 2015-06-13
icon: /images/avatar-logo.webp
summary: "I did a talk on Event Storming a short while ago where I started off by explaining why state transitions are so much more interesting than the actual states themselves. We had a lot of good discussions afterwards and I felt I wanted to elaborate a little bit further on the theme, in the context of distributed systems."
---

As much as some people would like to think, the world is not synchronized to your personal system clock. Things are happening concurrently all around us without you even knowing about it. The world is a infinitely complex distributed system that consists of an enormous amount of sub-systems, constantly interacting with each other. I would even argue that the communication between ourselves and those other systems is what makes it worth waking up in the morning. Seldom though do we actually care about the actual state of those systems but rather the transition from one state to another. Let me give you an example.

As I am walking through a parking lot, I generally do not care about the cars that are parked. If one of them started moving however, or if an alarm goes off, then maybe I will start observing it. If I were to tell my friends about that fateful day when my car suddenly exploded, I probably would do so by summarizing the state transitions I observed in the systems involved.

> I was **going** to the pub but **stopped** when my car suddenly **exploded**!

Of course, I could inspect my car every now and then to make sure that it is, hopefully, in a non-exploded state. Generally though, most systems in the real-world are event-driven; they react to changes in other systems and act based upon those changes. But not all systems subscribe to every single event that is being published, only those who matter to them. A group of crying children will probably have different stories about what happened (although there might be some data corruption in this case).

I am not saying that state is useless though. Now that I know that my car has been blown up, its current state might actually indicate what I should do next. Should I buy a new set of windows or will some duct tape suffice?

After I have persisted the fact that I will be walking home, typically I would want to interact with another external system, possibly someone at my insurance company. It turns out that if I focus on the state transitions, or events, I can make myself better understood. Instead of starting off by describing the sorry state of my vandalized property, explaining what actually happened to it would probably be a good start. Hopefully the insurance company will respond telling me that everything is going to be 200 OK.

When we apply DDD we are often (if not always), interested in modeling a domain that, in its nature, is not technical at all. It will most likely be facing problems that have been around since before there were even computers to solve them. Any business involving actual people is a distributed system, which means many of the technical challenges of distributed computing will have real-life counterparts. As more and more companies jump on the microservice bandwagon, I cannot help feeling part of the added complexity from going distributed comes from the fact that now we need to start solving the problems that have been part of the business since before the arrival of computers. What would happen for example if a loan application physically got lost before it could be approved? How would a understaffed department deal with the growing pile of application forms?

The real-world analogy is useful in many more cases than I could fit in this post and it helps us reason about many of the design decisions we face in the software industry. Think about what the effect would be if two people were to share the same data store. Many organizations struggle with persisting information to all their employees (does a meeting propagate information faster than e-mail?). Maybe the reason why we are adopting techniques like CQRS and Event Sourcing is because these designs better resemble the way the world around us actually work? The world is eventually consistent and I would say it has scaled quite nicely.

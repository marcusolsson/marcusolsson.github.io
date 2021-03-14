---
title: Notes on my GolangUK 2016 talk
date: 2016-08-22
icon: /images/avatar.png
summary: "I’m writing this on the way home from GolangUK where I did a talk on Building an Enterprise Service in Go, based on the DDD Sample App. I was really overwhelmed with the positive feedback I got, some of which came from developers who never heard of DDD prior to my talk. Not totally unexpected however, since it’s an approach to a problem space which I believe Go has yet to conquer, but among the feedback I got were a few valid concerns that I thought I would address in the form of a blog post."
---

### “A sample application will lead people to think that this is the only way you should do it.”

This is a fair argument, and a difficult one to dispute. Since business applications like these are typically not made public, many developers will never see many of these applications outside their own organization. The sample application is made to showcase one possible way of structuring your application using the principles I mentioned in my talk. Problem is, as with any sample application, that you don’t see the journey the team did to get to that solution. The sample application should be used for inspiration, not as a template.

### “Domain-Driven Design wouldn’t work for us since our domain model is changing at such a high rate.”

First and foremost, if the domain model is changing radically from day to day, nevermind the design principles you use, you’re going to have to change that code. If you’re a start up, this will most likely be the case since you’re probably still discovering your domain as a company. Be careful not to pass this off as the business people simply being impossible to work with. Instead invite them to join you in front of the whiteboard and ask them to clarify to the point that they will think you’re incompetent. One of the best responses you’ll get is: “That’s what I’ve been telling you this whole time!”.

### “Should I apply Domain-Driven Design to all projects?”

Most definitely not. In fact, for the vast majority of the software out there, DDD is simply not worth it. Domain modeling is both costly and time-consuming, because it involves spending a lot of time experimenting with different names and concepts together with domain experts that typically don’t have the time to spare. You do it because the alternative would be to let the team guess (or even fantasize) how the business works. This would potentially lead to rewriting large parts of the application due to “edge-cases”, which, by the way, often are perfectly natural extensions of the domain. If that is acceptable — if time to market is of utmost importance, this is probably the case — or if you have the domain knowledge within the team, which tends to be the case for more technical domains like compilers, IDEs or infrastructure services, you’re _probably_ better off without it. This does _not_ mean that you shouldn’t do design! DDD is really about the journey, the code is simply a side effect.

### “So what you're saying is that the sample application is only of use to me if I’m doing DDD?”

In the end DDD is a tool like any other, that can be abused. That being said, even if you're doing DDD or not, you should still care about naming and good design. An application built using the principles from DDD will not look fundamentally different than any other application. I’d like to think of the sample application as a sandbox for demonstrating a wide spectrum of good practices like vendoring, unit testing, dependency injection and package naming.

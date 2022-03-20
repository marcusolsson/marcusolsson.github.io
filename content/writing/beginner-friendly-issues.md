---
title: Beginner-friendly issues
date: 2020-09-28
icon: /images/avatar.png
featured: true
toc: true
summary: One of the first pieces of advice that aspiring contributors get when looking to contribute to their first open source project is to search for “beginner-friendly issues”. Learn what makes a great beginner-friendly issue.
---

One of the first pieces of advice that aspiring contributors get when looking to contribute to their first open source project is to search for “beginner-friendly issues”. By marking these issues as beginner-friendly, they serve as entry points for anyone who wants to get involved with the project. You’ll see beginner-friendly issues labeled with tags like:

- good-first-issue
- beginner-friendly
- easy-fix

Creating a set of beginner-friendly issues signals that your project encourages external contributions, but how do you know which issues to label as beginner-friendly? As you search the internet in hopes of enlightenment, you might find phrases like:

- “It's an issue that's quick to solve.”
- “It should be straightforward to complete.”
- “It should only require a simple fix.”

The problem with these guidelines is that they are subjective. What looks like a simple fix to a seasoned network engineer might be insurmountable to a junior frontend developer.

As maintainers, we're all susceptible to the [curse of knowledge][1]. Your perception of what's easy is most likely different from that of a potential contributor who’s new to the project.

Imagine you’re a software engineering graduate student who’s found an exciting project, and wants to be a part of it. You start working on what’s labeled a “simple” issue. No problem, right?

You spend a full week on trying to understand what to do.

After two weeks, you still haven't finished what was supposed to be a "quick fix".

At this point you might tell yourself: “If this is what an easy issue looks like, then I’m obviously not good enough for this project.” Or “maybe open source just isn’t for me.”

## What does "beginner-friendly" mean?

Making your first contribution may seem like a daunting task for many. It doesn't matter if you're junior or senior—having your work publicly critiqued and evaluated can be terrifying. By submitting a pull request you set yourself up to be judged, not only by the authors, but by anyone who’s browsing the project.

On the other hand, seeing your first pull request merged is a rush. All that built-up tension is released, and in its place a sense of accomplishment. I still remember [my first open source contribution](https://github.com/flynn/flynn/pull/42) from 6 years ago, and how proud I felt when it was merged.

Contributors come in all shapes and forms, experiences and skill sets. How do you create and communicate beginner-friendly issues using language that welcomes anyone looking to be part of your community?

Instead of making subjective assumptions about the contributor, I'd like to try describing the attributes which make an issue beginner-friendly. Here are some aspects I believe make for a good first issue:

## Beginner-friendly issues should

- Have a well-defined scope
- Have someone that can support you along the way

### Define the scope

If the contributor doesn’t have any previous experience with the project, then they typically won't be able to make design decisions, as they don't yet know the architecture, or understand why the code looks the way it does. By giving the contributor a limited scope and explicit instructions on what needs to change, they can focus on learning one part at a time.

Another aspect to this is that maintainers often underestimate the amount of work required to even get to the point where a beginner can make the fix. What’s needed to set up an environment for development? What does the contribution process look like? What does it mean to “squash” the commits? Ideally, you want to provide issues that are almost mechanical. If you can provide detailed instructions about how and where to make the change, even better! While an issue with a poor description can make a task seem impenetrable, a clear description can make even a tricky issue more approachable.

### Provide support

Avoid labeling issues as beginner-friendly if there are no maintainers available to help. This might be the case if you want to introduce a new framework or library in your project, but you don't have experience using it yourself.

Another example is legacy code by a maintainer that has now left the project. If you don't understand the code, then your first-time contributors probably won't either.

Don't ask first-time contributors to add functionality that you don't fully understand yourself.

## Beginner-friendly issues should not

- Require project or domain-specific experience
- Have deadlines

### Don't require project or domain-specific knowledge

Beginners by definition won't have any in-depth knowledge about the project. Some might’ve just started using your project and want to help right away. They rarely have any experience of the code base.

Here are some examples of tasks that rarely require experience with the project:

- Rename variables.
- Extract methods.
- Format issues.
- Fix typos.
- Test existing documentation.

Even though these tasks don't require experience with your project, they might need knowledge in the technologies used in the project, like programming languages or frameworks. If possible, refer to the style guides that the project is using.

Domain-specific knowledge is trickier. How much would you need to know about databases to contribute to an open source database? Ideally, you want to keep expected domain-specific knowledge to a minimum. If an issue requires domain knowledge, consider linking to resources where the contributor can learn more.

### Avoid deadlines

When you're learning something new, the last thing you want is to have someone looking over your shoulder, asking you when you think you'll be done. Allow contributors to figure things out at their own pace.

Issues scheduled for next month's release are not suitable for first-time contributors. Instead, use the opportunity to let contributors help you tighten up legacy code or refactor old hacks. That way they can take their time to study the surrounding code and run the tests without worrying about taking too long. You’d be amazed at the unexpected and innovative solutions a fresh pair of eyes can yield.


## Summary

At this point, you might object, saying "but then I could just make the change myself"—and you'd be right. You could. You could also wait for the superstar contributor that appears out of the blue to fix that bug that's been lingering for years. Or, you could provide the means for contributors to gain the confidence through beginner-friendly issues to be able to make more impactful changes later on.

Creating good beginner-friendly issues takes effort, and supporting first-time contributors is an investment. Lower the bar of entry for anyone who's looking to contribute to your project by providing an inclusive environment where people feel that "even they" can contribute. By giving your first-time contributors a positive, welcoming experience, they’re more likely to come back.

Beginner-friendly issues are the entry point to your project, so let's welcome new contributors by creating issues that truly are friendly for beginners.

## TL;DR

Next time you're creating a beginner-friendly issue, make sure that:

- The issue doesn’t require prior knowledge about the project.
- The issue provides clear instructions on what needs to be changed.
- The issue doesn’t need to be fixed in the near future. No deadlines!
- There’s someone that can provide necessary support and guidance.

[1]:    https://en.wikipedia.org/wiki/Curse_of_knowledge

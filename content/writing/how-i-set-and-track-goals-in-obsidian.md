---
title: How I set and track goals using Obsidian
date: 2021-12-29
icon: /images/avatar-icon.webp
summary: "For as long as I can remember, I've been setting and documenting goals for myself. In this article, I'll walk you through how I plan and track my professional and personal goals in Obsidian."
featured: true
toc: true
---

For as long as I can remember, I've been setting and documenting goals for myself. Usually though, I'd eventually lose them to Google Drive or some trendy productivity app. Some were paid. Most had some obscure proprietary format. Once it was time to plan the next quarter, either I'd forgotten how to use the app, or my subscription had expired. My high-level goals would inevitably become disconnected from my low-level tasks, since they relied on me constantly having to configure and sync between all the apps and formats.

While I started using [Obsidian](https://obsidian.md) as a simple note-taking application, it has now become an essential part of how I write, think, and learn. There are three main reasons why I think Obsidian is a great tool for setting and tracking goals:

- All your data is stored in Markdown documents—pure text files. You'd be able to use them even if you decided to move on from using Obsidian.

- You can build automated workflows for the more tedious tasks, through many of the community-built plug-ins for Obsidian.

- I'm already using Obsidian on a daily basis for all my writing and note-taking. My goals are only a keyboard shortcut away.

In this article, I'll walk you through how I plan and track my professional and personal goals in Obsidian.

Thank you to [Ursula Kallio](https://ursulakallio.com) for inspiring me to reexamine the workflow and complete the missing pieces!

## OKR—Objectives and Key Results

I've been using the popular [OKR](https://en.wikipedia.org/wiki/OKR) goal-setting framework for a while, even before I switched to Obsidian. Since I'm already using it at work, I decided I would use it as a base for my goal-setting workflow.

In short, OKR stands for _Objectives_ and _Key Results_.

- **Objectives** are statements of what you want to accomplish. They should be simple, clear, and make you excited.
- **Key Results** are metrics that tells you whether you've accomplished your Objective.

For example, a good OKR, as suggested by [John Doerr](https://twitter.com/johndoerr) would have the following structure:

_I will **{objective}** as measured by **{key results}**._

I won't dive much deeper into OKRs, and how to use them. Feel free to consult your favorite search engine if you want to learn more.

While the workflow is heavily inspired by the OKR methodology, you can easily adapt it for other goal-setting methodologies.

## Workflow

I plan and track my goals over three time periods: quarterly, weekly, and daily. I then break down and define goals for each of those time periods:

- Quarterly goals -> OKR
- Weekly goals -> Initiatives
- Daily goals -> Tasks

I use the [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) and [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) plugins to create notes from templates for each time period. Each periodic note [embeds](https://help.obsidian.md/How+to/Embed+files#Embed+notes) the higher level goals: The weekly note embeds the OKRs for the current quarter, and the daily note embeds the initiatives for the current week. This way I can trace my goals at every step of the way.

While not required, I also use the [QuickAdd](https://github.com/chhoumann/quickadd) plugin to create OKRs more conveniently.

Let's look at each part of the workflow from top to bottom!

### The OKR index

The OKR index note is where I outline my goals for the coming quarter.

Each quarter is a second-level heading, which is broken down into three _life categories_: Personal, Relationships, and Professional. I'll come back to why I've chosen to group my goals this way.

For now, here's an example of what my index note would look like:

**OKRs.md**

```md
# OKRs

## 2021 Q4

**Start:** 2021-11-01
**End:** 2022-01-31

### Personal

- [[2021-Q4 Improve my cooking skills]]

### Relationships

- [[2021-Q4 Hang out with friends]]

### Professional

- [[2021-Q4 Become a better writer]]

## 2021 Q3

...
```

### Every quarter

When a new quarter is about to start, I create a new OKR from a template using the QuickAdd plugin, and start drafting the key results. Finally, I add a link to the objective from the index note under the appropriate category.

The OKR note serves as a definition of my goal and how I will know I've accomplished it. If you're not a fan of the OKR structure, feel free to define your goal in any way that makes sense to you.

While it's not really necessary for this workflow, I like to connect each objective to one or more of my _core values_. I've found that it helps me build up excitement for the objective if I know what core values I satisfy by accomplishing it.

**Templates/OKR.md**

```md
---
tags: [okr]
---

# {{NAME}}

**Core values:**

**Key results:**

-
```

Here's an example of what a OKR could like:

**OKRs/2021-Q4 Improve my cooking skills.md**

```md
---
tags: [okr]
---

# Improve my cooking skills

**Core values:** [[Creativity (value)]], [[Quality (value)]], [[Beauty (value)]]

**Key results:**

- Take a cooking class
- Cook ==3== new recipes
```

### Every week

At the start of every week, I use the Calendar plug-in to create a weekly note from my weekly template. I use the weekly note to plan the coming week, and to review it afterwards.

I plan the week by creating _initiatives_ based on the OKRs for this quarter. Initiatives are essentially tasks that bring me closer to accomplishing my objective.

**Note:** I'm misusing the terminology from the OKR world, but I'm being pragmatic here. If you want to do it properly, you should probably be writing your initiatives as [leading indicators](https://www.perdoo.com/resources/okr-leading-and-lagging-indicators/).

I embed the objectives for the current quarter from the index note so that I can remind myself of my OKRs on a weekly basis. You can embed another note, by adding an exclamation mark at the start of an internal link, `![[like this]]`.

**Templates/Weekly.md**

```md
# 🗓️ {{date:gggg-[W]ww}}

## Objectives

![[OKRs#2021 Q4]]

## Initiatives

- [ ]

## Review

**What went well this week?**

-

**What's my biggest challenge right now, and what help do I need?**

-
```

One benefit of keeping the OKRs in their own notes is that I can hover over the embedded objectives in my weekly note to preview the key results for that objective without opening the OKR note. This helps when I'm trying to figure out what initiatives I want to pursue for the week.

> **Note:** At the start of every quarter, I need to update the template for my weekly note to link to the current quarter. If you're a template wizard, I'd love to know how I can insert today's date as "2021 Q4", so that I won't have to update the template at all.

### Every day

Starting the day, I open the Daily note and plan what I'm going to do for the day. My daily note also serves as my Inbox for the day. Any thoughts or book recommendations I have during the day goes into my daily note.

At the top of the daily note, I embed the initiatives from my weekly note. This way, I'm reminded every day of what I want to accomplish during the week. By embedding notes this way, I get full traceability from my quarterly goals to my daily tasks.

**Templates/Daily.md**

```md
# 🗓️ {{date:dddd, MMMM Do}}

![[{{date:gggg-[W]ww}}#Initiatives]]

## Tasks

- [ ] Inbox zero

## Scheduled

-

## Notes

-
```

**Pro tip:** In the task section in the template for your daily note, add one or two tasks that you can check off early in the day. Completing things early in the day builds confidence—if only a little—for the rest of the day.

## Finding motivation

Every now and then I—and I'm sure you do too—go through periods where motivation and inspiration are hard to come by. When you're struggling to just get through the day, the last thing you need is feeling even worse for not keeping up with your goals.

Instead of beating myself up when it happens, I try to create _forgiving_ systems in my life. Systems that make it easy to get back into again. Whatever tool, system, or process I use, it has to be resilient to these low periods in my life. When I eventually find my way back, it has to be trivial to pick up again. If I need to relearn or reconfigure an app before I'm caught up, it's likely not going to happen.

Some days, I just don't feel like being productive. I might skip the weekly planning because I had a rough weekend. To me, the beauty of this workflow is that I can pick it up next week again. Didn't get to writing your daily note today? Try again tomorrow.

Here's my track record for last month. As you can see, I skipped several weekly and daily notes.

![Calendar plugin](/images/calendar-plugin.png)

By focusing on making it easy to pick up the ball whenever I drop it, I can come back to it whenever I find the motivation again.

## Using OKRs for my personal life

In the past, I've only tracked my professional goals, which unfortunately meant that my personal goals often ended up in the backseat. Since professional goals were the only goals that I tracked, they ended up receiving more attention than they deserved.

My first reaction when I started creating OKRs for my personal life was "wow, this is a lot of commitments!". No wonder I wasn't making any progress on many of them. In the end, I'm the same person all hours of the day. By setting and tracking personal goals along with my professional ones, I find that I'm more intentional (and realistic) about my mental capacity.

In practice, I define 2–3 objectives per life category, totaling up to 8–9 objectives per quarter.

I'll admit I'm no expert at writing OKRs—heck, not even half decent—but I find it still works for me. Most of my personal OKRs have [activity-based key results](https://felipecastro.com/en/okr/success-criteria-types-key-results/): they measure the things I do, rather than the value they provide. Mostly because my personal goals can vary dramatically from quarter to quarter, so I don't bother defining proper [KPIs](https://en.wikipedia.org/wiki/Performance_indicator) for them.

In other words, I'm sacrificing the quality of my personal OKRs to be able to consolidate my goals into one single framework. Because [anything worth doing is worth doing poorly](https://www.forbes.com/sites/forbescoachescouncil/2018/10/30/things-that-are-worth-doing-are-worth-doing-poorly).

## Improving the workflow

I currently have no way of updating progress for the key results in my OKRs. I'd love a plug-in that turns a Markdown task into a progress bar.

In the following example, 1234 is the current value that I can update throughout the quarter:

```md
- [1000,1234,2000] Reach ==2000== followers on Twitter
```

## Final thoughts

By using Obsidian for goal-setting, I bring it into an existing system that I'm already using every day.

I believe there are three (technically four) main features that enable this workflow:

- Plugins like Periodic Notes and Calendar lets you automate note creation based on time.
- Linking notes lets you drill down through my periodic notes with full traceability.
- Embedding notes lets you see the bigger picture even when I'm not actively working on it.

I want to stress that I've arrived at this workflow by starting out small and making incremental changes. I've covered the steps in the workflow from high-level to low-level. If you're new to Obsidian or goal tracking in general, I recommend that you start with the low-level parts of the workflow, such as setting up a daily note. Once you've turned it into a habit, try adding a weekly note, and so on.

I'd love to hear your suggestions on what can be improved!

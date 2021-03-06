---
title: Adding context and options to your Go client package
date: 2017-03-21
publisher: Medium
icon: /images/medium-icon.svg
external_url: https://medium.com/@marcus.olsson/adding-context-and-options-to-your-go-client-package-244c4ad1231b
---

This is a follow-up on my previous post where I showed how you can write user-friendly client packages for REST APIs that will make it even more enjoyable for users to integrate with your services. And for many services, the patterns I showed will probably suffice. This time though, we’ll take a look at two additional patterns. First, I’ll show you how you can bring your client package up-to-date by adding support for the context package. Then we’ll look at how we can pass optional parameters for things like pagination and filtering. Let’s jump right in.

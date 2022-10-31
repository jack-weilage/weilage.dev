---
title: 'Welcome to my website!'
description: 'Read about me, my website, and my future.'

date: '2022-10-23'

tags:
    - 'svelte'
    - 'sveltekit'
    - 'jack weilage'
    - 'developer'
    - 'website'
---

<script>
    import Note from '!components/Note.svelte'
</script>

Hello, *hello*, **hello**. Welcome to my *great* and *not at all **constantly** changing* website.

## Who am I?

I ask myself every day! More seriously, I'm a student who loves programming and web development. I like working with JavaScript, but my goal is to completely replace it with imaginative uses of modern CSS and HTML. I find joy in creating elegant solutions to performance and A11Y issues.

## Why did I make this website?

Somewhere around the start of this year, I realized that I had been writing code and designing websites for over a year, but didn't have anything I could show off to someone who wasn't a developer or extremely computer savvy. After some pondering, I decided on a website. A website, after all, is accessible to nearly anyone, anywhere, with any device.

This website is meant to acting as a living document, displaying and cataloguing my knowledge and experience.

## What did I use to make this website?

This website is built with [Svelte](https://svelte.dev)/[SvelteKit](https://svelte.dev), [TypeScript](https://typescriptlang.com), and [SCSS](https://sass-lang.com). Website hosting is done by [Vercel](https://vercel.com), with email hosting from [Forward Email](https://forwardemail.net).

<Note>
    This list is based on what I am using <i>as of time of writing</i>. 
    It is almost certainly out of date by the time you are reading this.
</Note>

 - **Svelte** is an up-and-coming JavaScript framework, with many DX (developer experience) improvements. Unlike other frameworks, Svelte compiles its code down *before* sending it to the browser, saving a huge amount of network strain. Additionally, Svelte has [Vue-style](https://vuejs.org/guide/scaling-up/sfc.html) multi-language files, combining JavaScript, HTML, and CSS in a single file.
 - **SvelteKit** is a light and responsive full-stack router for Svelte. While it is currently in the RC stage, SvelteKit is feature-complete and viable for use in production.
 - **TypeScript** strongly types JavaScript code. It makes code easily readable, with more ways to find creeping, insidious errors.
 - **SCSS** adds nesting ([although this might be in CSS sooner than later](https://w3c.github.io/csswg-drafts/css-nesting/)), complex functions, and replaced variables in CSS.
 - **Vercel** hosts websites for little to no cost, with a dead-easy CLI (type `vercel` and you're done), a slew of useful development features, and a tight integration with SvelteKit.
 - **Forward Email** forwards incoming *and* outgoing emails, all for free!

## What are my plans for the future?

I plan to make this website a dynamic representation of my current web development skills and knowledge. As new features are added to the web, I will attempt to incorporate them into the existing codebase. As these updates happen, I plan to make small blog posts about what features are being added and how they're being used.

As I (hopefully) travel through college and begin working in the field, I will create a dedicated resume page and display my work on the homepage.

## Closing Remarks

The creation of this website has been a very fun journey. Along the way, I've learnt many new skills, found out about amazing open-source projects and services, and even ended up with a website! Resources like [MDN](https://developer.mozilla.org) and [HTTP 203](https://youtube.com/playlist?list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9) have helped teach me both the overall web and the minutiae within.

[Donate some money to Mozilla](https://donate.mozilla.org/en-US/), star your favorite projects on GitHub, and have a good day.

*[CSS]: Cascading Style Sheets
*[HTML]: Hyper Text Markup Language
*[A11Y]: Accessibility
*[RC]: Release Candidate
*[CLI]: Command-line Interface
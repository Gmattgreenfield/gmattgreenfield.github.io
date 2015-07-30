---
title: "Jekyll and Critical Path CSS"
excerpt: How I'm using Penthouse and Jekyll for my critical path CSS
published: true
---

A few weeks ago now I went to a [Async Brighton](http://asyncjs.com/) talk by [Jonas Ohlsson](https://twitter.com/pocketjoso) about Critical Path CSS. Jonas is the creator of [Penthouse](https://github.com/pocketjoso/penthouse) - a great tool for creating this CSS for you. He talked about all of its benefits and how its actually pretty simple to get working. I went home inspired but a little lost as to how I was going to implement it in my workplace.

And so last week I thought I'd spend a little time updating this site and critical path CSS was a thought still lingering in my mind.

I first set up Penthouse as a Gulp task, so that the critical path CSS could be generated every time I changed my source Sass. But I couldn't work out how I was going to get this CSS, inline and in my Jekyll template.

Until I realised that Jekyll has a feature baked in for exactly this! Includes.

So I've set Penthouse up to post its contents to a `critical-css.html` file in my Jekyll `_includes` directory. I'm doing this using the following in my gulpfile - `fs.writeFile('../_includes/critical-css.html', criticalCss);`. Then I'm including that file in the `<head>` of my template using `<style>{% raw  %}{% include critical-css.html %}{% endraw %}</style>`.

At present, this CSS is the same for every page, I'm pondering how I will change this to that the critical path CSS can be different on every page. Its not so much of a problem as my pages don't differ much but if you have any ideas please send me a tweet.

---
title: "How I built this site"
description: A Short summary of the tools and techniques I used to create my portfolio site and blog.
published: true
---

This site has been an evolution over the past year or so since I first decided I wanted to make a career in web design.

It serves as a 'CV' of sorts but less formal. It seems it started as me listing all of the things I knew how to do. Since then, the work has begun to do the talking for me and the site has become more of a place for showing this work in one place and for mindless drivell like this blog....

Anyway, I thought for this reason I would get a bit technical and let anyone interested know how and why this site works. So, without further a do;

###Templating
I like to use templates and includes as mush as possible and more often that not I use the mac app Mixture to help compile all of my pages.

###Blog
Posts are written in the markdown language and each post is a seperate file.
The Blog navigation is then auto created based on the files in the blog folder. This is all handelled using the liquid teamplating language.

###Plug-ins
Although creating anchor links on a one page site for navigation can be done in a matter of seconds, I decided that any animated scrolling and active classes on the menu would require a little help from jQuery. And, as I do not know much jQuery myself, would require a open source plug in.
I came across a few different ones but I settled on "one page scroll". This automates the animation and the active classes in one combined file. The cool thing is that the active class is not just added to the menu item when clicked, its added when you scroll to that section too!
As ever I am etternally gratefull for the work the creators put in and for allowing me to use it on my site.

### HTML5 Details / Summary
Although a touch decision in terms of browser compatability, I decided to use the latest HTML5 elements in my site and provide fallbacks where/if required - with the view that anyone interested in web design should have the latest browser version anyway.
One nice use of this is the Details and Summary HTML5 elements which I have used to create the 'More Info' links on my designs page. Its a lot better than using javascript for such a simple module.

### Github
As much as possible, I try to keep my work synced with Github. Although I am not working as part of a team on this site, the benifits of backup and version control are too big to miss. It also allows anyone who wants to look at my work to do so in a friendly fashion, and hopefully shows them my skills in github-ing.

So there we have it, a brief explanation of at least my current site. I hope that now I am working full time in web design, it may not need so much of my coding time yet is ready to take the load of all my work and updates coming its way!
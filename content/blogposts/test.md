---
title: A cool title
excerpt: Lorem Ipsum is simply dummy text.
---
import About from '~/pages/About.vue'

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.excerpt }}

<About />
---
slug: "picture-in-picture-api"
type: "tech tidbit"
date: 2020-06-09
title: "Picture-in-Picture API: create floating video windows"
excerpt: "The Picture-in-Picture API allows you to create a floating video window that is always on top. It allows your visitors to keep a video rolling while they navigate your site or application."
icon: 📽
published: true
---

## What is picture-in-picture?

Picture-in-Picture or PIP in short, is the creation of a floating video window.
This "picture" will stay on your screen, hovering over anything else that you might be doing.
Its origins can be found in the 1970s in the televised broadcast of the [1976 Summer Olympics](https://books.google.be/books?id=z1Khj2gYS-QC&pg=PA104&redir_esc=y#v=onepage&q&f=false) where it was used to show a close-up picture of the Olympic flame during the opening ceremony.

## A basic example

What better way to see it in action than with a classic Tom & Jerry cartoon.
More specifically the ["Puss gets the Boot"](https://en.wikipedia.org/wiki/Puss_Gets_the_Boot) one that led to the creation of the characters Tom and Jerry.
Try activating it by clicking the "Open Picture-in-Picture" button below.

<video id="myVideo" controls src="https://archive.org/download/126BuddiesThickerThanWater1962/001%20%20%20Puss%20Gets%20the%20Boot%20%5B1940%5D.mp4" class="w-full"></video>

<button onclick="const video = document.getElementById('myVideo'); if (!document.pictureInPictureElement) { video.requestPictureInPicture().catch(error => { console.error('Entering Picture-in-Picture mode failed!'); }); } else { document.exitPictureInPicture().catch(error => { console.error('Exiting Picture-in-Picture mode failed!'); });}">Open Picture-in-Picture</button>

## The code

```html codesandbox=static-rjk9n4zj7m
<video
  id="video"
  controls
  src="https://archive.org/download/126BuddiesThickerThanWater1962/001%20%20%20Puss%20Gets%20the%20Boot%20%5B1940%5D.mp4"
></video>

<button id="toggleButton">Open Picture-in-Picture</button>

<script>
  const video = document.getElementById("video");
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.hidden =
    !document.pictureInPictureEnabled || video.disablePictureInPicture;

  toggleButton.addEventListener("click", function() {
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture().catch(error => {
        console.error("Entering Picture-in-Picture mode failed!");
      });
    } else {
      document.exitPictureInPicture().catch(error => {
        console.error("Exiting Picture-in-Picture mode failed!");
      });
    }
  });
</script>
```

We add a `click` event listener to our button.
In the handler that we pass to the `click` event, we check first if there is no Picture-in-Picture element already present:

```js
if (!document.pictureInPictureElement) {
```

There can be only one active Picture-in-Picture element at the same time.
If there is no PIP element present, we request to the video to go into PIP mode:

```js
video.requestPictureInPicture()
```

This returns a promise in which we can react to the (un)successful opening of the video in PIP mode.
We only capture the unsuccessful case.

If there's already an element in PIP mode, we request to the ducment to exit PIP mode by:

```js
document.exitPictureInPicture()
```

From this we get yet again a Promise to handle the (un)successful cases.

## Hiding the Picture-in-Picture option

As you might have noticed in the code above, we are hiding the button to open the Picture-in-Picture in certain cases:

```js
 toggleButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;
```

The first part of this OR statement is whether or not Picture-in-Picture is enabled in the browser or the user's device is capable of going into Picture-in-Picture mode.
It is described in the [W3C specification](https://w3c.github.io/picture-in-picture/#dom-document-pictureinpictureenabled).

The second part is whether or not the Picture-in-Picture is disabled directly on the `video` tag.
It can be disabled by adding the `disablePictureInPicture` attribute.
This is described as an extension of the `HTMLVideoElement` in the [W3C specification](https://w3c.github.io/picture-in-picture/#htmlvideoelement-extensions).

```html
<video disablePictureInPicture src="..."></video>
```

## Browser support

Having a Picture-in-Picture used to be only possible by incorporating a library.
Since Chrome 70 (October 2018), Firefox 68 (July 2019), Edge 79 (January 2020) and Safari 10 (September 2016) there's at least some support and the mobile support is also growing a lot.
[caniuse.com](https://caniuse.com/#feat=picture-in-picture) provides more detailed information.

## Picture-in-Picture: added with a couple of lines of code

Adding the PIP was done without having to write a lot of code and without having to integrate a library.
With a very decent browser support, it is a quick added value for your videos.
It will allow the visitors of your website to continue browsing while continuing the playback of a video. 

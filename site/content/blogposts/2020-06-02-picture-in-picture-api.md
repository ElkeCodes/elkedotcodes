---
slug: "picture-in-picture-api"
type: "tech tidbit"
date: 2020-06-02
title: "Picture-in-Picture API: create floating video windows"
excerpt: "The Picture-in-Picture API allows you to create a floating video window that is always on top. It allows your visitors to keep a video rolling while they navigate your site or application."
icon: 📽
published: true
---

## What is picture-in-picture?

Picture-in-picture or PIP in short, is the creation of a floating video window.
This "picture" will stay on your screen, hovering over anything else that you might be doing.
Its origins can be found in the 1970s in the televised broadcast of the 1976 Summer Olympics where it was used to show a close-up picture of the Olympic flame during the opening ceremony.

## A basic example

What better way to see it in action than with a classic Tom & Jerry cartoon.
More specifically the "Puss in Boots" one that led to the creation of the characters Tom and Jerry.
Try activating it by clicking the "Open Picture-in-Picture" button below.

<video id="myVideo" controls src="https://archive.org/download/126BuddiesThickerThanWater1962/001%20%20%20Puss%20Gets%20the%20Boot%20%5B1940%5D.mp4" class="w-full"></video>

<button onclick="const video = document.getElementById('myVideo'); if (!document.pictureInPictureElement) { video.requestPictureInPicture().catch(error => { console.error('Entering Picture-in-picture mode failed!'); }); } else { document.exitPictureInPicture().catch(error => { console.error('Exiting Picture-in-picture mode failed!'); });}">Open Picture-in-Picture</button>

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
        console.error("Entering Picture-in-picture mode failed!");
      });
    } else {
      document.exitPictureInPicture().catch(error => {
        console.error("Exiting Picture-in-picture mode failed!");
      });
    }
  });
</script>
```

## Browser support

Having a Picture-in-picture used to be only possible by incorporating a library.
Since Chrome 70 (October 2018), Firefox 68 (July 2019), Edge 79 (January 2020) and Safari 10 (September 2016) there's at least some support and the mobile support is also growing a lot.
[caniuse.com](https://caniuse.com/#feat=picture-in-picture) provides more detailed information.

## Resources

- [Picture-in-Picture API sample](https://googlechrome.github.io/samples/picture-in-picture/)

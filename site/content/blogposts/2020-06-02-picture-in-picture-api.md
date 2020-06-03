---
slug: "picture-in-picture-api"
type: "tech tidbit"
date: 2020-06-02
title: "Picture-in-Picture API: create floating video windows"
excerpt: "The Picture-in-Picture API allows you to create a floating video window that is always on top. It allows your visitors to keep a video rolling while they navigate your site or application."
icon: 📽
published: true
---

## A basic example

<video id="myVideo" controls src="https://archive.org/download/126BuddiesThickerThanWater1962/001%20%20%20Puss%20Gets%20the%20Boot%20%5B1940%5D.mp4"></video>

<button id="toggleButton">Go Picture-in-Picture</button>

```html codesandbox=static-rjk9n4zj7m
<video
  id="video"
  controls
  src="https://archive.org/download/126BuddiesThickerThanWater1962/001%20%20%20Puss%20Gets%20the%20Boot%20%5B1940%5D.mp4"
></video>

<button id="toggleButton">Go Picture-in-Picture</button>

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

## Resources

- [Picture-in-Picture API sample](https://googlechrome.github.io/samples/picture-in-picture/)

<script type="text/javascript">
  const video = document.getElementById("myVideo");
  const toggleButton = document.getElementById("toggleButton");

  console.log(video, toggleButton);

  toggleButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

  toggleButton.addEventListener("click", function() {
    console.log('test')
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture()
      .catch(error => {
        console.error("Entering Picture-in-picture mode failed!");
       });
    } else {
      document.exitPictureInPicture()
      .catch(error => {
        console.error("Exiting Picture-in-picture mode failed!");
      });
    }
  });
</script>

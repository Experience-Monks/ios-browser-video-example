# iOS Browser Video Playback Example

Currently in iOS 8 on iPhone's are not able to play video inline in the browser.

This repo is a quick example of how to enable video playback as a web app after adding to the homescreen.

Two things to note.

1. When the web page is added to the home screen video playback can be initiated outside of user touch events.
2. Video will playback in browser not in the native player.
3. Using this method will also allow for iPad's to playback video. Adding to the homescreen on iPad is not required but the video meta data must be set: `video.setAttribute('webkit-playsinline', true);`
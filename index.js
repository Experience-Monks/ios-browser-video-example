if(checkIsInBrowser()) {
  createAddHome();
} else {
  createVideo();
}

function checkIsInBrowser() {
  return ("standalone" in window.navigator) && !window.navigator.standalone;
}

function createAddHome() {
  document.body.innerHTML = 'Add to home screen from below';
}

function createVideo() {

  var video = document.createElement('video');
  var instruction = document.createElement('div');
  var width = window.innerWidth * 0.8;

  video.style.position = 'absolute';
  video.style.left = '50%';
  video.style.top = '50%';
  video.style.transform = 'translate(-50%, -50%)';
  video.style.webkitTransform = 'translate(-50%, -50%)';
  video.style.maxWidth = width + 'px';
  

  // this will allow for playback in fullscreen
  video.setAttribute('webkit-playsinline', true);

  video.src = 'video.mp4';

  // it should be noted that when it's running as a web app there's no
  // need to start video by pressing
  video.play();

  document.body.appendChild(video);
}


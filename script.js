const video = document.getElementById('fullscreen-video');
const startButtonFR = document.getElementById('start-fr-button');
const startButtonEN = document.getElementById('start-en-button');

const startScreen = document.getElementById('start-screen');

startButtonFR.addEventListener('click', function () {
  startScreen.style.display = 'none';
  video.play();
  video.playbackRate = 0.65;
});

startButtonEN.addEventListener('click', function () {
  startScreen.style.display = 'none';
  video.play();
  video.playbackRate = 0.65;
});

video.addEventListener('timeupdate', function () {
  if (video.currentTime >= video.duration - 2) {
    video.pause();
    video.currentTime = video.duration - 2;
    document.addEventListener('keydown', redirectToNextPage);
  }
});

function redirectToNextPage() {
  window.location.href = './enProjectFiles/Intro/resetComputer.html';
}

localStorage.setItem('sendMsgMom', false);

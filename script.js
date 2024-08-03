const video = document.getElementById('fullscreen-video');
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');

startButton.addEventListener('click', function () {
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
  window.location.href = './projectFiles/Intro/resetComputer.html';
}

localStorage.setItem('sendMsgMom', false);

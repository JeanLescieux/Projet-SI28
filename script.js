const videoElement = document.getElementById('fullscreen-video');
const startButtonFR = document.getElementById('start-fr-button');
const startButtonEN = document.getElementById('start-en-button');

const startScreen = document.getElementById('start-screen');

startButtonFR.addEventListener('click', function () {
  startScreen.style.display = 'none'; // Masquer l'écran de démarrage
  videoElement.style.display = 'block'; // Afficher la vidéo
  videoElement.src = '/images/video_start.mp4'; // Définir la source de la vidéo pour le français
  videoElement.play();
  videoElement.playbackRate = 0.65;
});

startButtonEN.addEventListener('click', function () {
  startScreen.style.display = 'none'; // Masquer l'écran de démarrage
  videoElement.style.display = 'block'; // Afficher la vidéo
  videoElement.src = '/images/english-video.mp4'; // Définir la source de la vidéo pour l'anglais
  videoElement.play();
  videoElement.playbackRate = 0.65;
});

videoElement.addEventListener('timeupdate', function () {
  if (videoElement.currentTime >= videoElement.duration - 2) {
    videoElement.pause();
    videoElement.currentTime = videoElement.duration - 2;
    document.addEventListener('keydown', redirectToNextPage);
  }
});

function redirectToNextPage() {
  const videoSrc = videoElement.src;
  if (videoSrc.includes('video_start.mp4')) {
    window.location.href = './projectFiles/Intro/resetComputer.html';
  } else if (videoSrc.includes('english-video.mp4')) {
    window.location.href = './enProjectFiles/Intro/resetComputer.html';
  }
}

localStorage.setItem('sendMsgMom', false);

async function openFileExplorer() {
  localStorage.setItem('closedFE', 'false');  
  console.log(localStorage.getItem('showFiles'));
  var modalContent = document.getElementById('fenetreModale');
  try {
      const response = await fetch('./Apps/FileExplorer/fileExplorer.html');
      if (!response.ok) {
          throw new Error('Erreur lors du chargement de fileExplorer.html');
      }
      modalContent.innerHTML = await response.text();
      document.getElementById('fenetreModale').style.display = 'block';

      // Clear the contents of the right-column
      const rightColumn = modalContent.contentWindow.document.querySelector('.right-column');
      if (rightColumn) {
          rightColumn.innerHTML = '';
          console.log('Right column cleared on open');
      }

      console.log('Fenêtre modale affichée');
  } catch (error) {
      console.error(error);
  }
}

function closeFileExplorer() {
  document.getElementById('fenetreModale').style.display = 'none';
  console.log('Fenêtre modale cachée');
  
  // Clear the contents of the right-column
  const rightColumn = document.querySelector('.right-column');
  if (rightColumn) {
      rightColumn.innerHTML = '';
      console.log('Right column cleared on close');
  }
}



async function openMC() {
  var modalContent = document.getElementById('fenetreModale1');
  try {
    const response = await fetch('./Apps/MyComputer/myComputer.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de myComputer.html');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModale1').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeMC() {
  document.getElementById('fenetreModale1').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openRB() {
  var modalContent = document.getElementById('fenetreModale2');
  try {
    const response = await fetch('./Apps/RecycleBin/recycleBin.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de myComputer.html');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModale2').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeRB() {
  document.getElementById('fenetreModale2').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openInternet() {
  var modalContent = document.getElementById('fenetreModaleInternet');
  try {
    const response = await fetch('./Apps/Internet/internet.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de myComputer.html');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleInternet').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeInternet() {
  document.getElementById('fenetreModaleInternet').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openMSN() {
  var modalContent = document.getElementById('fenetreModaleMSN');
  try {
    const response = await fetch('./Apps/MSN2/Connexion.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de MSN');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleMSN').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeMSN() {
  document.getElementById('fenetreModaleMSN').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openTrueCalculator() {
  var modalContent = document.getElementById('fenetreModaleTrueCalculator');
  try {
    const response = await fetch('./Apps/Calculette/VraiCalculette/VraiCalculette.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de la calculatrice');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleTrueCalculator').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeTrueCalculator() {
  document.getElementById('fenetreModaleTrueCalculator').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openWrongCalculator() {
  var modalContent = document.getElementById('fenetreModaleWrongCalculator');
  try {
    const response = await fetch('./Apps/Calculette/FausseCalculette/FausseCalculette.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de la calculatrice');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleWrongCalculator').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeWrongCalculator() {
  document.getElementById('fenetreModaleWrongCalculator').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openEve() {
  var modalContent = document.getElementById('fenetreModaleEve');
  try {
    const response = await fetch('./Usables/errorMsg.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de myComputer.html');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleEve').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeEve() {
  document.getElementById('fenetreModaleEve').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openCalendar() {
  var modalContent = document.getElementById('fenetreModaleCalendar');
  try {
    const response = await fetch('./Apps/Calendrier/Calendrier.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du calendrier');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleCalendar').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeCalendar() {
  document.getElementById('fenetreModaleCalendar').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openMinesWeeper() {
  var modalContent = document.getElementById('fenetreModaleMinesWeeper');
  try {
    const response = await fetch('./Apps/Minesweeper/minesweeper-js-master/index.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du démineur');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleMinesWeeper').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeMinesWeeper() {
  document.getElementById('fenetreModaleMinesWeeper').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

async function openTerminal() {
  var modalContent = document.getElementById('fenetreModaleTerminal');
  try {
    const response = await fetch('./Apps/Terminal/terminal.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du terminal');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModaleTerminal').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeTerminal() {
  document.getElementById('fenetreModaleTerminal').style.display = 'none';
  console.log('Fenêtre modale cachée');
}
function triggerScreamer() {
  // Create fullscreen screamer effect
  const screamerWindow = window.open('./screamer.html', 'screamer', 'fullscreen=yes,scrollbars=no,resizable=no,toolbar=no,menubar=no,location=no,status=no');
  
  // Fallback if popup is blocked - create inline screamer
  if (!screamerWindow) {
    createInlineScreamer();
  }
}

function createInlineScreamer() {
  // Create screamer overlay
  const screamerDiv = document.createElement('div');
  screamerDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ff0000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;
  `;
  
  const textDiv = document.createElement('div');
  textDiv.innerHTML = 'YOU HAVE BEEN<br>PRANKED!<br>💀👻💀';
  textDiv.style.cssText = `
    color: #ffffff;
    font-size: 8em;
    font-weight: bold;
    text-shadow: 0 0 30px #000000;
    font-family: 'Courier New', monospace;
    text-align: center;
    animation: shake 0.1s infinite, pulse 0.2s infinite;
  `;
  
  screamerDiv.appendChild(textDiv);
  document.body.appendChild(screamerDiv);
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0% { transform: translate(0px, 0px) rotate(0deg); }
      10% { transform: translate(-5px, -5px) rotate(-2deg); }
      20% { transform: translate(-6px, 0px) rotate(2deg); }
      30% { transform: translate(6px, 5px) rotate(0deg); }
      40% { transform: translate(2px, -2px) rotate(2deg); }
      50% { transform: translate(-2px, 5px) rotate(-2deg); }
      60% { transform: translate(-6px, 2px) rotate(0deg); }
      70% { transform: translate(6px, 2px) rotate(-2deg); }
      80% { transform: translate(-2px, -2px) rotate(2deg); }
      90% { transform: translate(2px, 5px) rotate(0deg); }
      100% { transform: translate(2px, -5px) rotate(-2deg); }
    }
    @keyframes pulse {
      0% { transform: scale(1); background: #ff0000; }
      25% { transform: scale(1.1); background: #000000; }
      50% { transform: scale(1.2); background: #ff0000; }
      75% { transform: scale(1.1); background: #000000; }
      100% { transform: scale(1); background: #ff0000; }
    }
  `;
  document.head.appendChild(style);
  
  // Apply animation to the container
  screamerDiv.style.animation = 'pulse 0.2s infinite';
  
  // Play scary sound
  playScarySound();
  
  // Remove after 3 seconds
  setTimeout(() => {
    document.body.removeChild(screamerDiv);
    document.head.removeChild(style);
  }, 3000);
}

function playScarySound() {
  try {
    // Create scary sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.2);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.currentTime + 2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  } catch (e) {
    console.log('Audio playback failed:', e);
  }
  
  // Use speech synthesis as backup
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance('AHHHHH! You have been pranked!');
    utterance.rate = 0.5;
    utterance.pitch = 0.1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }
}

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours + ":" + minutes + ' ' + ampm;

  // Add the date with the year always being 1998
  var month = now.getMonth() + 1; // JavaScript months are 0-11
  var day = now.getDate();
  var date = month + "/" + day + "/2003 -";

  document.getElementById('currentTime').innerHTML = date + ' ' + time;
}
setInterval(updateTime, 1000);
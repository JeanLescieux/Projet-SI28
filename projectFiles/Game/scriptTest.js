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
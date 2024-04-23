async function openFileExplorer() {
  var modalContent = document.getElementById('fenetreModale');
  try {
    const response = await fetch('./Apps/FileExplorer/fileExplorer.html');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de fileExplorer.html');
    }
    modalContent.innerHTML = await response.text();
    document.getElementById('fenetreModale').style.display = 'block';
    console.log('Fenêtre modale affichée');
  } catch (error) {
    console.error(error);
  }
}

function closeFileExplorer() {
  document.getElementById('fenetreModale').style.display = 'none';
  console.log('Fenêtre modale cachée');
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
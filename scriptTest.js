async function openFileExplorer() {
  // Récupère l'élément modalContent
  var modalContent = document.getElementById('modalContent');
  try {
      // Charge le contenu de fileExplorer.html dans modalContent
      const response = await fetch('fileExplorer.html');
      if (!response.ok) {
          throw new Error('Erreur lors du chargement de fileExplorer.html');
      }
      modalContent.innerHTML = await response.text();
      // Affiche la fenêtre modale en ajoutant la classe "show"
      document.getElementById('fenetreModale').style.display = 'block';
      console.log('Fenêtre modale affichée');
  } catch (error) {
      console.error(error);
  }
}

function closeFileExplorer() {
  // Cache la fenêtre modale en modifiant directement le style pour masquer l'élément
  document.getElementById('fenetreModale').style.display = 'none';
  console.log('Fenêtre modale cachée');
}

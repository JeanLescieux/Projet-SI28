// Récupère une référence vers chaque fichier div
const file1 = document.getElementById('file1');
const file2 = document.getElementById('file2');
const file3 = document.getElementById('file3');
const file4 = document.getElementById('file4');

// Ajoute un gestionnaire d'événement de clic à chaque fichier div
file1.addEventListener('click', function () {
    console.log("Le fichier 1 a été cliqué !");
    openNP();
});

file2.addEventListener('click', function () {
    console.log("Le fichier 2 a été cliqué !");
});

file3.addEventListener('click', function () {
    console.log("Le fichier 3 a été cliqué !");
});

file4.addEventListener('click', function () {
    console.log("Le fichier 4 a été cliqué !");
});

async function openNP() {
    var modalContent = document.getElementById('fenetreModaleNP');
    try {
        const response = await fetch('../../Usables/notePad.html');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement de myComputer.html');
        }
        modalContent.innerHTML = await response.text();
        document.getElementById('fenetreModaleNP').style.display = 'block';
        console.log('Fenêtre modale affichée');
    } catch (error) {
        console.error(error);
    }
}

function closeNP() {
    document.getElementById('fenetreModaleNP').style.display = 'none';
    console.log('Fenêtre modale cachée');
}


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les <li> avec un attribut data-path dans .tree-view
    const interactiveItems = document.querySelectorAll('.tree-view li[data-path]');
    const rightColumn = document.querySelector('.right-column');

    // Ajoute un écouteur d'événements à chaque élément interactif
    interactiveItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut
            event.stopPropagation(); // Arrête la propagation de l'événement
            const filePath = this.getAttribute('data-path');
            loadContent(filePath); // Fonction pour charger le contenu
        });
    });

    function loadContent(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(html => {
                rightColumn.innerHTML = html;
            })
            .catch(error => console.error('Error loading the file:', error));
    }
});
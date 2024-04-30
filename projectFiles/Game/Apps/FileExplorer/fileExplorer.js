
document.addEventListener('DOMContentLoaded', function() {
    const rightColumn = document.querySelector('.right-column');

    rightColumn.addEventListener('click', function(event) {
        const file = event.target.closest('.file');
        if (file) {
            console.log(`${file.id} a été cliqué !`);
            if (file.id === 'file1') {
                openNP();
            }
        }
    });
});




function closeNP() {
    document.getElementById('fenetreModaleNP').style.display = 'none';
    console.log('Fenêtre modale cachée');
}

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

document.addEventListener('DOMContentLoaded', function () {
    const interactiveItems = document.querySelectorAll('.tree-view li[data-path]');
    const rightColumn = document.querySelector('.right-column');

    //console.log(interactiveItems.length); // Doit être > 0
    //console.log(rightColumn); // Ne doit pas être null

    interactiveItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            const filePath = this.getAttribute('data-path');
            loadContent(filePath, rightColumn); // Pass rightColumn to the function
        });
    });
});

function loadContent(filePath, rightColumn) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            rightColumn.innerHTML = html;
        })
        .catch(error => console.error('Error loading the file:', error));
}

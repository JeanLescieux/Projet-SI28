
document.addEventListener('DOMContentLoaded', function () {
    const rightColumn = document.querySelector('.right-column');

    rightColumn.addEventListener('click', function (event) {
        const file = event.target.closest('.file');
        if (file) {
            console.log(`${file.id} a été cliqué !`);
            if (file.id === 'file1') {
                console.log('Ouverture de J1.txt');
                openNP('./Texte/1.txt');
            }
            else if (file.id === 'file2') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/2.txt');
            }
            else if (file.id === 'file3') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/3.txt');
            }
            else if (file.id === 'file4') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/4.txt');
            }
            else if (file.id === 'file5') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/5.txt');
            }
            else if (file.id === 'file6') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/6.txt');
            }
            else if (file.id === 'file7') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/7.txt');
            }
            else if (file.id === 'file8') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/8.txt');
            }
            else if (file.id === 'file9') {
                console.log('Ouverture de J2.txt');
                openNP('./Texte/9.txt');
            }
            else if (file.id === 'img1') {
                console.log('Ouverture de J2.txt');
                openIMG('/images/cicada-3301-location.jpg');
            }
            else if (file.id === 'img2') {
                console.log('Ouverture de J2.txt');
                openIMG('/images/test1Cic.jpg');
            }
            else if (file.id === 'img3') {
                console.log('Ouverture de J2.txt');
                openIMG('/images/test2Cic.png');
            }
            else {
                console.log('Fichier non reconnu, ouverture msg erreur');
                openError();
            }
        }
    });
});

function closeNP() {
    document.getElementById('fenetreModaleNP').style.display = 'none';
    console.log('Fenêtre modale cachée');
}

async function openNP(textFilePath) {
    var iframe = document.getElementById('fenetreModaleNP');
    iframe.style.display = 'none';

    try {
        const responseHTML = await fetch('../../Usables/notePad.html');
        if (!responseHTML.ok) {
            throw new Error('Erreur lors du chargement de notePad.html');
        }
        iframe.src = '../../Usables/notePad.html';

        iframe.onload = async () => {
            const textContainer = iframe.contentWindow.document.getElementById('Diarytxt');
            if (textContainer) {
                console.log('Element #Diarytxt trouvé, chargement du contenu TXT...');
                try {
                    const responseTXT = await fetch(textFilePath);
                    if (!responseTXT.ok) {
                        throw new Error('Erreur lors du chargement du fichier texte');
                    }
                    const textContent = await responseTXT.text();
                    if (textContent) {
                        textContainer.textContent = textContent;
                        console.log('Contenu du fichier texte inséré dans le DOM');
                        iframe.style.display = 'block';
                        console.log('Fenêtre modale affichée');
                    } else {
                        console.log('Aucun contenu trouvé dans le fichier texte');
                        iframe.style.display = 'none';
                    }
                } catch (error) {
                    console.error('Erreur lors de la tentative de chargement du contenu texte: ', error);
                    iframe.style.display = 'none';
                }
            } else {
                console.log('Element #Diarytxt non trouvé.');
                iframe.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Erreur globale: ', error);
        iframe.style.display = 'none';
    }
}

async function openIMG(imagePath) {
    var iframe = document.getElementById('fenetreModaleIMG');
    iframe.style.display = 'none';

    try {
        const responseHTML = await fetch('../../Usables/imgOpen.html'); // Change this to the actual path of your HTML
        if (!responseHTML.ok) {
            throw new Error('Erreur lors du chargement de imgOpen.html');
        }
        iframe.src = '../../Usables/imgOpen.html';

        iframe.onload = async () => {
            const imgElement = iframe.contentWindow.document.getElementById('imgOpen');
            if (imgElement) {
                console.log('Element #imgOpen trouvé, chargement de l\'image...');
                try {
                    const responseIMG = await fetch(imagePath);
                    if (!responseIMG.ok) {
                        throw new Error('Erreur lors du chargement de l\'image');
                    }
                    imgElement.src = imagePath;
                    console.log('Image insérée dans le DOM');
                    iframe.style.display = 'block';
                    console.log('Fenêtre modale affichée');
                } catch (error) {
                    console.error('Erreur lors de la tentative de chargement de l\'image: ', error);
                    iframe.style.display = 'none';
                }
            } else {
                console.log('Element #imgOpen non trouvé.');
                iframe.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Erreur globale: ', error);
        iframe.style.display = 'none';
    }
}


function closeIMG() {
    document.getElementById('fenetreModaleIMG').style.display = 'none';
    console.log('Fenêtre modale cachée');
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
            loadContent(filePath, rightColumn);
        });
    });
});

function loadContent(filePath, rightColumn) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            rightColumn.innerHTML = html;
            // Check if this is the "Journal" page
            if (filePath.includes('feJournal.html')) {
                checkAndShowFiles();
            }
        })
        .catch(error => console.error('Error loading the file:', error));
}

function checkAndShowFiles() {
    if (localStorage.getItem('showFiles') === 'true') {
        document.getElementById('file6').style.display = 'block';
        document.getElementById('file7').style.display = 'block';
        document.getElementById('file8').style.display = 'block';
        localStorage.removeItem('showFiles');
    }
}

async function openError() {
    var modalContent = document.getElementById('fenetreModaleError');
    try {
        const response = await fetch('../../Usables/errorMsg.html');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement de errorMsg.html');
        }
        modalContent.innerHTML = await response.text();
        document.getElementById('fenetreModaleError').style.display = 'block';
        console.log('Fenêtre modale affichée');
    } catch (error) {
        console.error(error);
    }
}

function closeEve() {
    document.getElementById('fenetreModaleError').style.display = 'none';
    console.log('Fenêtre modale cachée');
}
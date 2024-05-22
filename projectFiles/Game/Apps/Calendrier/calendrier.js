function juillet(){
    // Jours avant le mois de Juillet
    for (let i = 28; i <= 30; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
    // Jours du mois de Juillet
    for (let i = 1; i <= 31; i++) {
        let contenu = "";
        let c = "";
        if (i == 5) {
            c = "jour_couleur";
            contenu = "Anniversaire de maman<br> Ne pas oublier!";
        } else if (i == 14) {
            c = "jour_couleur";
            contenu = "Déménagement ami";
        } else if (i == 31) {
            c = "jour_couleur";
            contenu = "Faire le test pour rentrer dans le groupe";
        }
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour">
                <div class="jour-titre ${c}">${i}</div>
                <div class="jour-contenu">${contenu}</div>
            </div>
        `;
    }
    // Jours après le mois de Juillet
    for (let i = 1; i <= 1; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
}

function aout(){
    // Jours avant le mois de Août
    for (let i = 26; i <= 31; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
    // Jours du mois d'Aout
    for (let i = 1; i <= 31; i++) {
        let contenu = "";
        let c = "";
        if (i == 5) {
            c = "jour_couleur";
            contenu = "Arroser les plantes";
        } else if (i == 14) {
            c = "jour_couleur";
            contenu = "Pas grand chose ici";
        } else if (i == 22) {
            c = "jour_couleur";
            contenu = "RDV avec Thomas<br>14 rue du Boulouris, au café, 23h";
        }
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour">
                <div class="jour-titre ${c}">${i}</div>
                <div class="jour-contenu">${contenu}</div>
            </div>
        `;
    }
    // Jours après le mois d'Aout
    for (let i = 1; i <= 5; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
}

function fleche_Juillet(){
    var flecheD = document.querySelector('.droite');
    var flecheG = document.querySelector('.gauche');
    flecheD.removeAttribute('id');
    flecheG.setAttribute('id','grisé');
}

function fleche_Aout(){
    var flecheD = document.querySelector('.droite');
    var flecheG = document.querySelector('.gauche');
    flecheG.removeAttribute('id');
    flecheD.setAttribute('id','grisé');
}

function clearCalendar() {
    document.querySelector('.calendrier').innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function() {
    juillet();
    document.querySelector('.annee').innerHTML = '<u>Juillet 1999</u>';
});

// Gestionnaire d'événement pour les clics sur les groupes
document.querySelectorAll('.droite').forEach(function(lien) {
    lien.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        clearCalendar();
        aout();
        document.querySelector('.annee').innerHTML = '<u>Août 1999</u>';
        fleche_Aout();
    });
});

// Gestionnaire d'événement pour les clics sur les groupes
document.querySelectorAll('.gauche').forEach(function(lien) {
    lien.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        clearCalendar();
        juillet();
        document.querySelector('.annee').innerHTML = '<u>Juillet 1999</u>';
        fleche_Juillet();
    });
});
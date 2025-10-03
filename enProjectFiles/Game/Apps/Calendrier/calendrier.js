const moisData = [
    { nom: 'January', jours: 31, avant: 6, apres: 5, evenements: {} },
    { nom: 'February', jours: 28, avant: 2, apres: 5, evenements: {2: "Back to school"} },
    { nom: 'March', jours: 31, avant: 2, apres: 2, evenements: {6: "Mom's birthday<br> Don't forget!" } },
    { nom: 'April', jours: 30, avant: 5, apres: 0, evenements: {} },
    { nom: 'May', jours: 31, avant: 0, apres: 4, evenements: {} },
    { nom: 'June', jours: 30, avant: 3, apres: 2, evenements: {13: "Pierre's moving day", 20: "Start of exams"} },
    { nom: 'July', jours: 31, avant: 5, apres: 6, evenements: {  31: "Take the test to join the group" } },
    { nom: 'August', jours: 31, avant: 1, apres: 3, evenements: { 17: "Meeting with Thomas<br>14 rue du Boulouris, at the café, 4 PM" } },
    { nom: 'September', jours: 30, avant: 4, apres: 1, evenements: {12: "Loki's adoption anniversary"} },
    { nom: 'October', jours: 31, avant: 6, apres: 5, evenements: {} },
    { nom: 'November', jours: 30, avant: 2, apres: 3, evenements: {} },
    { nom: 'December', jours: 31, avant: 4, apres: 0, evenements: {25: "Christmas"} }
];

function afficherMois(moisIndex) {
    const mois = moisData[moisIndex];
    var moisAvant = mois;
    if (moisIndex!=0){
        var p = moisIndex - 1;
        moisAvant = moisData[p];
    }

    document.querySelector('.calendrier').innerHTML = '';
    // Jours avant le mois
    for (let i = 1; i <= mois.avant; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${moisAvant.jours - mois.avant + i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
    // Jours du mois
    for (let i = 1; i <= mois.jours; i++) {
        let contenu = mois.evenements[i] || "";
        let c = contenu ? "jour_couleur" : "";
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour">
                <div class="jour-titre ${c}">${i}</div>
                <div class="jour-contenu">${contenu}</div>
            </div>
        `;
    }
    // Jours après le mois
    for (let i = 1; i <= mois.apres; i++) {
        document.querySelector('.calendrier').innerHTML += `
            <div class="jour inactive">
                <div class="jour-titre">${i}</div>
                <div class="jour-contenu"></div>
            </div>
        `;
    }
    document.querySelector('.annee').innerHTML = `<u>${mois.nom} 2003</u>`;
    flechesNavigation(moisIndex);
}

function flechesNavigation(moisIndex) {
    var flecheD = document.querySelector('.droite');
    var flecheG = document.querySelector('.gauche');
    if (moisIndex === 0) {
        flecheG.setAttribute('id', 'grisé');
    } else {
        flecheG.removeAttribute('id');
    }
    if (moisIndex === 11) {
        flecheD.setAttribute('id', 'grisé');
    } else {
        flecheD.removeAttribute('id');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    afficherMois(6); // Juillet est le 7ème mois, donc index 6
});

document.querySelector('.droite').addEventListener('click', function(event) {
    event.preventDefault();
    let currentMoisIndex = moisData.findIndex(mois => mois.nom === document.querySelector('.annee').innerText.split(' ')[0]);
    if (currentMoisIndex < 11) {
        afficherMois(currentMoisIndex + 1);
    }
});

document.querySelector('.gauche').addEventListener('click', function(event) {
    event.preventDefault();
    let currentMoisIndex = moisData.findIndex(mois => mois.nom === document.querySelector('.annee').innerText.split(' ')[0]);
    if (currentMoisIndex > 0) {
        afficherMois(currentMoisIndex - 1);
    }
});

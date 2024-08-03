// script.js

function login(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Remplacez ces valeurs par les identifiants corrects
    const correctUsername = 'admin';
    const correctPassword = '12345';

    if (username === correctUsername && password === correctPassword) {
        // Redirection vers une autre page HTML
        window.location.href = 'admin.html';
    } else {
        alert('Identifiants incorrects. Veuillez réessayer.');
    }
}

// Ajoute un écouteur d'événement pour l'envoi du formulaire
document.getElementById('adminaccount').addEventListener('submit', login);

document.addEventListener("DOMContentLoaded", function () {
    fetch("webPageMain.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main").innerHTML = data;
        });
});

function addValue(val) {
    document.getElementById('address').value += val;
}

function clearValue() {
    document.getElementById("address").value = "";
}

function code() {
    let valeur = document.getElementById('address').value;
    if (valeur === "2512") {
        window.location.href = './easterEgg/jesus.html';
    } else if (valeur === "40000") {
        window.location.href = './easterEgg/omnissiah.html';
    } else if (valeur === "1") {
        window.location.href = './easterEgg/jugement.html';
    } else if (valeur === "2503") {
        window.location.href = './easterEgg/Nicolas.html';
    } else {
        console.log('value is not recognized');
    }
}

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Vous ne pouvez pas envoyer de message.");
});

document.getElementById("deconnexion-btn").addEventListener("click", function() {
    if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?") == true) {
        window.location.href = "Connexion.html";
    } else {
        return false;
    }
});





// Fonction pour charger la conversation à partir d'un fichier txt
function chargerConversation(nomFichier) {
    // Création d'une requête HTTP (Ajax)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', nomFichier, true);

    // Gestionnaire d'événement de chargement
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Si la requête a réussi, récupérer le contenu du fichier texte
            const conversationTexte = xhr.responseText;
            // Diviser le contenu en lignes
            const lignes = conversationTexte.split('\n');
            // Sélectionner le conteneur de la conversation
            const conversationContainer = document.querySelector('.chat-fenetre');
            conversationContainer.innerHTML = '';

            const premierNom = lignes[0].trim();

            // Parcourir chaque ligne et créer un élément <div> pour chaque message
            lignes.forEach(function(ligne,index) {
                if (index==0){return;}
                ligne = ligne.trim();

                // Vérifier si la ligne ne contient pas de #
                if (!ligne.includes('#')) {
                    const heure = ligne
                    const dateDiv = document.createElement('div');
                    dateDiv.classList.add('heure');
                    dateDiv.innerHTML = `<div class="message-header">
                                            <span class="heure">${heure}</span><br>
                                        </div>`;
                    conversationContainer.appendChild(dateDiv);
                    return;
                }
                const message = ligne.split('#');
                const nom = message[0];
                const heure = message[1];
                const msg = message[2];
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                let nomClass = 'nom';
                if (nom === 'Moi') {
                    messageDiv.classList.add('envoyé');
                    nomClass += '-moi';
                } else {
                    messageDiv.classList.add('recu');
                }
                if (msg!='=img='){
                    messageDiv.innerHTML = `<div class="message-header">
                                            <span class="${nomClass}">${nom}</span>
                                            <span class="heure">${heure}</span>
                                            <span class="msg">${msg}</span>
                                            </div>`;
                    conversationContainer.appendChild(messageDiv);
                } else {
                    messageDiv.innerHTML = `<div class="message-header">
                                            <span class="${nomClass}">${nom}</span>
                                            <span class="heure">${heure}</span>
                                            <span><img src="Image/Chien.jpg" alt="image de chien" class="image"></span><br>
                                            </div>`;
                    conversationContainer.appendChild(messageDiv);
                }
                
            });
            // Ajouter l'ID "grisé" au groupe correspondant
            const groupes = document.querySelectorAll('.liste li a');
            groupes.forEach(function(groupe) {
                groupe.removeAttribute('id'); // Supprimer l'ID de tous les éléments
                if (groupe.textContent.trim() === premierNom) {
                    groupe.setAttribute('id', 'grisé');
                }
            });

            const titreGroupe = document.querySelector('.titre strong');
            titreGroupe.textContent = premierNom;
            
        } else {
            console.error('Impossible de charger la conversation.');
        }
    };

    // Gestionnaire d'erreur
    xhr.onerror = function() {
        console.error('Erreur de chargement de la conversation.');
    };

    // Envoyer la requête
    xhr.send();
}


// Gestionnaire d'événement pour les clics sur les groupes
document.querySelectorAll('.conv').forEach(function(lien) {
    lien.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        const fichierConversation = this.getAttribute('type-conversation');
        chargerConversation(fichierConversation);
    });
});



var j = 0
var i = 0
function connexion() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var MessageErr = document.getElementById("msg-err");
    var MessageHelp = document.getElementById("msg-help");


    if (email === "mikbouch@mail.com" && password === "0603") {
        window.location.href = "Conv_compteMikael.html";
        return false;
    } else if (email === "thomas@mail.com" && password === "pizza") {
        window.location.href = "Conv_compteThomas.html";
        return false;
    } else {

        MessageErr.style.display = "block";
        MessageErr.textContent = "Email ou mot de passe incorrect";
        MessageHelp.style.display = "none"
        if (email == "mikbouch@mail.com") {
            j++
            i = 0
            if (j >= 3) {
                MessageHelp.style.display = "block";
                MessageHelp.textContent = "indice : Anniversaire de maman";
            }
        } else if (email === "thomas@mail.com") {
            i++
            j = 0
            if (i >= 3) {
                MessageHelp.style.display = "block";
                MessageHelp.textContent = "indice : ???";
            }
        } else {
            j = 0
            i = 0
        }
        return false;
    }


}
/*document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Vous ne pouvez pas envoyer de message.");
});*/

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    showCustomAlert();
});



function showCustomAlert() {
    document.getElementById("custom-alert").classList.remove("hidden");
    document.getElementById("custom-alert").style.display = "block";
}

function hideCustomAlert() {
    document.getElementById("custom-alert").style.display = "none";
}


document.getElementById("deconnexion-btn").addEventListener("click", function() {
    if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?") == true) {
        window.location.href = "Connexion.html";
    } else {
        return false;
    }
});

function closebtn(){
    document.getElementById('custom-alert').style.display = 'none';
  console.log('Fenêtre modale cachée');
}





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
        //MessageErr.textContent = "Email ou mot de passe incorrect";

        MessageHelp.style.display = "none"
        if (email == "mikbouch@mail.com") {
            MessageErr.textContent = "Mot de passe oublié ? \n Indice : Anniversaire de maman";

            // j++
            // i = 0
            // if (j >= 3) {
            //     //MessageHelp.style.display = "block";
            //     MessageErr.textContent = "indice : Anniversaire de maman";
            // }
        } else if (email === "thomas@mail.com") {
            MessageErr.textContent = "Mot de passe oublié ? \n Indice : ???";

            // i++
            // j = 0
            // if (i >= 3) {
            //     //MessageHelp.style.display = "block";
            //     MessageErr.textContent = "indice : ???";
            // }
        } else {
            j = 0
            i = 0
        }
        return false;
    }


}
document.querySelectorAll('.conv').forEach(conv => {
    conv.addEventListener('click', function () {
        document.querySelectorAll('.conv').forEach(c => c.classList.remove('conv-active'));
        this.classList.add('conv-active');

        const sendMsgMom = localStorage.getItem('sendMsgMom') === 'true';
        const messageInput = document.querySelector('#message-form input[type="text"]');
        const messageForm = document.getElementById('send');
        const activeConversation = this.getAttribute('type-conversation'); // Sélectionnez la conversation active

        if (sendMsgMom && activeConversation === "Conversation/Maman.txt") {
            messageInput.value = "Votre fils se trouve ici : 48.667506; 2.245672";

            messageForm.addEventListener('click', function (event) {
                event.preventDefault();
                window.top.location.href = './momm.html';
            }, { once: true }); // Ajoutez { once: true } pour que cet écouteur ne s'exécute qu'une seule fois
        } else {
            resetMessageInput();
            disableSendButton();

        }
    });
});

function resetMessageInput() {
    const messageInput = document.querySelector('#message-form input[type="text"]');
    messageInput.value = ""; // Réinitialisez la valeur de l'input texte
}
function disableSendButton() {
    const messageForm = document.getElementById('send');
    messageForm.addEventListener('click', function (event) {
        event.cancelable();
    }, { once: true }); // Ajoutez { once: true } pour que cet écouteur ne s'exécute qu'une seule fois
}
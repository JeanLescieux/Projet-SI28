function openTab(tabName) {
    // Hide all elements with class="tab-content"
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("taba");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if(tabName === 'main') {
        tablinks[0].style.backgroundColor = "rgb(0, 0, 0)";
        tablinks[0].style.color = "rgb(0, 255, 0)";
    } else if(tabName === 'admin') {
        tablinks[1].style.backgroundColor = "rgb(0, 255, 0)";
        tablinks[1].style.color = "rgb(0, 0, 0)";
    }
}

function adminConnexion (username, password){
    
    // Remplacez ces valeurs par les identifiants corrects
    const correctUsername = 'admin';
    const correctPassword = '12345';

    if (username === correctUsername && password === correctPassword) {
        // Redirection vers une autre page HTML
        return true
    } else {
        return false    }
}
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
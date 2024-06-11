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
function code(){
    valeur = document.getElementById(address)
    console.log(valeur)
    if (valeur=="2512"){
        console.log ('oui')
    }
    if (valeur=="40000"){

    }
    if (valeur=="1"){
        
    }
    if (valeur=="2503"){
        
    }


}

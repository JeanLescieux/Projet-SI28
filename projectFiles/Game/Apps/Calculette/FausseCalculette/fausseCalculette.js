function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        if (result == 667) {
            document.getElementById('display').value = 'ERREUR ......';
            parent.openInternet();
        } else if (result == 1209) {
            document.getElementById('display').value = 'JOURNAL DEBLOQUE ....';
            localStorage.setItem('showFiles', 'true');
            parent.openFileExplorer(); 
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        alert('Invalid expression');
    }
}

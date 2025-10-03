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
            document.getElementById('display').value = result;
        } catch (error) {
            alert('Invalid expression');
        }
    }
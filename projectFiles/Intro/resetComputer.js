// script.js

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var time = hours + ":" + minutes + ' ' + ampm;
  
    // Add the date with the year always being 1998
    var month = now.getMonth() + 1; // JavaScript months are 0-11
    var day = now.getDate();
    var date = month + "/" + day + "/2003 -";
  
    document.getElementById('currentTime').innerHTML = date + ' ' + time;
  }
  
  setInterval(updateTime, 1000);
  
  function showLoading() {
    document.getElementById('window').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    initializeProgressBar();
  }
  
  function initializeProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const progressElements = progressBar.querySelectorAll(".progress");
    const doneButton = document.getElementById("doneButton");
  
    // Function to show the progress squares
    function showProgress(index) {
      if (index < progressElements.length) {
        progressElements[index].style.display = "block";
        setTimeout(function () {
          showProgress(index + 1);
        }, 500); // Change this value to control the appearance interval
      } else {
        // Enable the Done button after all squares are shown
        doneButton.disabled = false;
        doneButton.classList.remove("disabled");
        doneButton.addEventListener("click", function () {
          window.location.href = "../Game/mainPage.html";
        });
      }
    }
  
    // Start showing the progress squares
    showProgress(0);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateTime(); // Initialize time on page load
  });
  
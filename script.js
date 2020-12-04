var submitButton = document.getElementById("submitButton");
var timer = document.getElementById("timer"); // Timer Variable 

function startQuiz() { 
    secondsLeft = 91;
    
      var timerInterval = setInterval(function() { 
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        }, 1000);
    }

    // Start quiz clock
    startQuiz()

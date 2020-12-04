var submitButton = document.getElementById("submitButton");
var timer = document.getElementById("timer"); // Timer Variable 

function startQuiz() { 
    secondsLeft = 5;
    
      var timerInterval = setInterval(function() { 
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
          }
        }, 1000);
    }

    // Start quiz clock
    startQuiz()

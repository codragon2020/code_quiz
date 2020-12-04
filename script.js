var submitButton = document.getElementById("submitButton");
var timer = document.getElementById("timer"); // Timer Variable 
var quizChallengePage = document.getElementById("quizChallengePage");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");


function startQuiz() { 
    quizChallengePage.style.display = "none"; // Hide first page after Start Quiz button is clicked
    quizQuestionsPage.style.display = "block"; // Next, show quiz questions page 

    secondsLeft = 5;
    
      var timerInterval = setInterval(function() { 
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
          }
        }, 1000);
    }

    // Start quiz clock when the button is pushed
    submitButton.addEventListener("click", function() { 
        startQuiz()
        console.log("start")
      })

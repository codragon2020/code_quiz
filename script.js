var submitButton = document.getElementById("submitButton");
var timer = document.getElementById("timer"); // Timer Variable 
var quizChallengePage = document.getElementById("quizChallengePage"); // Initial page variable
var quizQuestionsPage = document.getElementById("quizQuestionsPage"); // Quiz page variable
var quizQuestionHeader = document.getElementById("quizQuestionHeader");

var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");

// Quiz Questions array
var quizQuestions = [
    {
    "quizQuestionHeader" : "Which is not a JavaScript Data type:", 
    "one" : "1. number",
    "two" : "2. string",
    "three" : "3. variable",
    "four" : "4. boolean",
    "correct" : "2. string",
    },
]

var questionIndex = 0;

function homePage() {
    quizChallengePage.style.display = "block"; // Hide first page after Start Quiz button is clicked
    quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
    timer.textContent = "Time: "; // Holder text in nav bar 

}

homePage();

// This will start the quiz from the homePage
function startQuiz() { 
    quizChallengePage.style.display = "none"; // Hide first page after Start Quiz button is clicked
    quizQuestionsPage.style.display = "block"; // Next, show quiz questions page 
    console.log("page1 loaded")

    secondsLeft = 50; //Testing with 50 sec to see what happens
        
    //Countdown that ends the quiz
      var timerInterval = setInterval(function() { 
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
            clearInterval(timerInterval);
          }
        }, 1000);
    }

    function showQuestions() {
        var q = quizQuestions[questionIndex];
      
        quizQuestionHeader.innerHTML = q.quizQuestionHeader;
        choice1.innerHTML = q.one;
        choice1.setAttribute("data-answer", q.one);
        choice2.innerHTML = q.two;
        choice2.setAttribute("data-answer", q.two);
        choice3.innerHTML = q.three;
        choice3.setAttribute("data-answer", q.three);
        choice4.innerHTML = q.four;
        choice4.setAttribute("data-answer", q.four);
      }

    // Event Listeners
    showQuestions();

    choice1.addEventListener("click", function (event) {
        checkAnswer(event);
    })
    choice2.addEventListener("click", function (event) {
        checkAnswer(event);
    })
    choice3.addEventListener("click", function (event) {
        checkAnswer(event);
    })
    choice4.addEventListener("click", function (event) {
        checkAnswer(event);
    })

    // Start quiz clock when the button is pushed
    submitButton.addEventListener("click", function() { 
        startQuiz()
        console.log("start")
      })

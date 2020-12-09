// Initializing all variables
var submitButton = document.getElementById("submitButton"); // Start Quiz submitButton
var timer = document.getElementById("timer"); // Timer Variable 
var quizChallengePage = document.getElementById("quizChallengePage"); // Initial page variable
var quizQuestionsPage = document.getElementById("quizQuestionsPage"); // Quiz page variable
var quizQuestionHeader = document.getElementById("quizQuestionHeader"); // Presents quiz question
var answerResponse = document.getElementById("answerResponse"); // Presents the response to the user's choice

var finalScorePage = document.getElementById("finalScorePage");
var allDone = document.getElementById("allDone");
var finalScoreIs = document.getElementById("finalScoreIs");

var initials = document.getElementById("initials"); 
var initialInput = document.getElementById("initialInput"); 
var initialButton = document.getElementById("initialButton"); 

var highScoresPage = document.getElementById("highScoresPage");
var score = document.getElementById("score");


// Choices provided for each quiz question
var choice1 = document.getElementById("one"); 
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");

// Quiz Questions array stores the different quiz questions
var quizQuestions = [
    {
    "quizQuestionHeader" : "Which is not a JavaScript Data type:", 
    "one" : "1. number",
    "two" : "2. string",
    "three" : "3. variable",
    "four" : "4. boolean",
    "correct" : "3. variable",
    },
    {
    "quizQuestionHeader" : "Which of the following is not a looping structure in JavaScript:", 
    "one" : "1. For",
    "two" : "2. While",
    "three" : "3. Do While",
    "four" : "4. array",
    "correct" : "4. array",
    }
]

var questionIndex = 0;

// Presents the Challenge page and hides the rest
function homePage() {
    quizChallengePage.style.display = "block"; // Hide first page after Start Quiz button is clicked
    quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
    finalScorePage.style.display = "none";   // Hide Final Core Page 
    
    var startScore = 10; // Starting time
    timer.textContent = "Time: " + startScore; // Holder text in nav bar 

    
}

// homePage();

// This will start the quiz from the homePage
function startQuiz() { 
    quizChallengePage.style.display = "none"; // Hide first page after Start Quiz button is clicked
    quizQuestionsPage.style.display = "block"; // Next, show quiz questions page 
    finalScorePage.style.display = "none"; // Hide Final Score Page 

    secondsLeft = 10; //Testing with 5 sec to see what happens
        
    //Countdown that ends the quiz
      var timerInterval = setInterval(function() { 
        var newSec =  secondsLeft--;
        timer.textContent = "Time: " + newSec;
            if (secondsLeft === 0 || finalScorePage.style.display === "block") { // Clock stops with finalScorePage display
                clearInterval(timerInterval);
            } 
        }, 1000);
    }

    // Show Questions function to set each answer in association with quizQuestions array
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

    showQuestions();

function showHighScores() {
    allDone.style.display = "none"; // Hides All Done text
    finalScoreIs.style.display = "none"; // Hides Final Score
    initials.style.display = "none"; // Hides Label Text
    initialInput.style.display = "none"; // Hides Input field on Final Score Page
    initialButton.style.display = "none"; // Hides Button on Final Score Page
    finalScorePage.style.display = "block";   // Shows Final Score Page 
    highScoresPage.style.display = "block"; // Show High Scores Page

    // var getInitials = document.getElementById("initialInput").value; // captures the value of the initials 
    // var localStorageArray = { score: secondsLeft, initials: getInitials };
    // highScoreArray.push(localStorageArray);
    // localStorage.setItem("highScore", JSON.stringify(highScoreArray)); // Adds array 

    // var highScores = getInitials + ": " + secondsLeft; // add in + getInitials when read it
    // $("#highScoreList").append(highScores) // Appends high score & initials

}

    // Event Listeners
    choice1.addEventListener("click", function (event) {
        checkAnswer(event); // Calls checkAnswer function
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

    score.addEventListener("click", function() {
        showHighScores();
        console.log("view high scores");
    })

    // Submit initials to High Scores Page then show high scores
    initialButton.addEventListener("click", function() { 
        showHighScores();
        console.log("initial button")
    }) 

    
// Check if Answer is correct or not
function checkAnswer(event) {
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    console.log('Selected Answer: ', answer);
    var correctAnswer = null;
    console.log('CorrectAnswer Defined: ', correctAnswer);
    
    if (quizQuestions[questionIndex].correct === answer) {
        correctAnswer = answer;
        console.log('Correct Answer: ', correctAnswer);
    }
    if (answer === correctAnswer) {
        answerResponse.textContent = "That's Correct!"; // If correct, say so
        console.log('Thats Correct')
    } else {
        answerResponse.textContent = "Wrong Answer!"; // If wrong, say so
        console.log('Wrong Answer')
        secondsLeft -= 10
        if (secondsLeft < 10) {
            secondsLeft = 0;
      }
    }
    if (quizQuestions.length === questionIndex + 1) {
        showFinalScore(); // If it has gone through all questions, show final score
        
        return; // If not, print the next question
    }
    questionIndex++; // Increment the question index to get to the next question in array
    showQuestions(); // Call show questions function to display the question and answers
}

function showFinalScore() {
    quizChallengePage.style.display = "none"; // Hides Challenge Page
    quizQuestionsPage.style.display = "none"; // Hides Questions Page
    highScoresPage.style.display = "none"; // Hides High Scores Page
    finalScorePage.style.display = "block";   // Shows Final Score Page 
    finalScoreIs.style.display = "block"; // Shows Final Score
    initials.style.display = "block"; // Shows Label Text
    initialInput.style.display = "block"; // Shows Input field on Final Score Page
    initialButton.style.display = "block"; // Shows Button on Final Score Page

    // Text Content modification
    finalScoreIs.textContent = "Your final score is " + secondsLeft;
    initials.textContent = "Enter Initials: "; // Form text
    initialButton.textContent = "Submit"; // Form button 
    console.log('showFinalScore is running');
}

// Always load the homePage first
homePage(); 


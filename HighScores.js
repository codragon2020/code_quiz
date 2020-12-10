// HighScores javascript created to help with separation of the reload functions
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clearHighScore = document.querySelector("#clearHighScore");

// Event listener to clear scores 
clearHighScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
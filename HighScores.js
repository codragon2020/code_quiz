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
        createLi.setAttribute("id", "createLi");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Reference: https://www.w3schools.com/howto/howto_js_sort_list.asp
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("createLi");
    switching = true;
    console.log('list is sorting');

    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        console.log('list is sorting');

        // Start by saying: no switching is done:
      switching = false;
      console.log('switching', switching);
      b = document.getElementsByTagName("LI");
      console.log('this is b', b);
      // Loop through all list items:
      for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        // console.log('shouldSwitch', shouldSwitch);
        /* Check if the next item should
        switch place with the current item: */
        console.log('list is sorting');

        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        console.log('list is sorting');
      }
    }
  }

sortList();

// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
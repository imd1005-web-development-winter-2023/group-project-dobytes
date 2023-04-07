// constant for pulling the unordered list from the html file
const highScoreList = document.getElementById("highScoreList");
// constant for reading the local file with all of the stored high score data, returns empty array if there are none
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// innerHTML code for properly displaying the high scores on the page
highScoreList.innerHTML =
    highScores.map(newScore => {
        return `<li class="high-score">${newScore.Name} with a score of ${newScore.Score}</li>`;
    }).join("");

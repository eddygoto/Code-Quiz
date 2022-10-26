// grabbing elements off of our end.html page
const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

// limiting the amount of scores to show on the page
const maxAmtScores = 5;

// parses out highscores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// shows your most recent score on the page
finalScore.innerText = mostRecentScore;

// saves your initials
username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value;
});

// saves the score that's on the page and stores it in local memory
saveHighscore = event => {
    event.preventDefault();
    
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(highScores);
};

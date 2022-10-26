// get start button element
var startBtn = document.querySelector("#startBtn");

// on start button click takes you to quiz webpage
startBtn.addEventListener("click", function() {
    window.location.href = "./quiz.html"
});











// TODO LIST
// create a start button that hides the front page elements and starts the questions and timer
// create a rotating pool of questions that changes after selecting an answer
// time goes down if you select an incorrect answer
// game ends when time runs out, show end screen
// submitting score sends you to highscore page
// view highscores link takes you to another page that saves highscores in memory
// reset highscore button that erases memory
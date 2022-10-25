var startBtn = document.querySelector("#start");

var timerEl = document.querySelector("#timer");
var countdown;
var timerCount = 30;

var gameEnd = false;

let questionNumber = 1;
let score = 0;
let indexNumber = 0;

startBtn.addEventListener("click", function() {
    document.querySelector(".quiz-container").style.display = "none";
    document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/418495.jpg)";

    timerCount = 30;
    countdown = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
   
    if (gameEnd) {
        clearInterval(countdown);
    }
    if (timerCount === 0) {
        clearInterval(countdown);
    }
}, 1000);
});




// creating the question array
const questionBank = [
    {
        id:1,
        prompt: "What is the device that trainers use to keep track of their Pokemon encounters?",
        
            a: "Pokeradar",
            b: "Pokefinder",
            c: "Pokedex",
            d: "Pokepal",
        
        answer: "c",
    },
    {
        id:2,
        prompt: "What are the three types of starter Pokemon?",
        
            a: "Grass, Fire, Water",
            b: "Electric, Ground, Flying",
            c: "Normal, Ghost, Fighting",
            d: "Psychic, Ice, Dragon",
    
        answer: "a",
    },
    {
        id:3,
        prompt: "Which of these is the most effective Pokeball?",
        
            a: "Dusk Ball",
            b: "Great Ball",
            c: "Net Ball",
            d: "Master Ball",
    
        answer: "d",
    },
    {
        id:4,
        prompt: "Where do you go to revive fainted Pokemon?",
        
            a: "Gym",
            b: "Pokemon Center",
            c: "Mount Fuji",
            d: "Pokemon Mansion",
    
        answer: "b",
    },
    {
        id:5,
        prompt: "Which of these is NOT a potential status ailment in a Pokemon battle?",
        
            a: "Poison",
            b: "Vertigo",
            c: "Frozen",
            d: "Burn",
    
        answer: "b",
    },
    {
        id:6,
        prompt: "What type of move is Hyper Beam?",
        
            a: "Normal",
            b: "Psychic",
            c: "Grass",
            d: "Fairy",
        
        answer: "a",
    },
    {
        id:7,
        prompt: "Which of these is NOT an Eeveelution?",
        
            a: "Sylveon",
            b: "Flareon",
            c: "Leafeon",
            d: "Radeon",
        
        answer: "d",
    },
    {
        id:8,
        prompt: "What type of attacks are Normal type Pokemon immune to?",
       
            a: "Fighting",
            b: "Dark",
            c: "Ghost",
            d: "Normal",
        
        answer: "c",
    },
    {
        id:9,
        prompt: "Which Pokemon is rumored to have created the entire Pokemon Universe, giving them the nickname 'The Original One'?",
       
            a: "HO-OH",
            b: "Mew",
            c: "Deoxys",
            d: "Arceus",
        
        answer: "d",
    },
    {
        id:10,
        prompt: "Which of these moves allows a Pokemon to attack while still asleep?",
       
            a: "Sleep Talk",
            b: "Nightmare",
            c: "Sleep Powder",
            d: "Dream Eater",
        
        answer: "a",
    },
]











// create a start button that hides the front page elements and starts the questions and timer
// create a rotating pool of questions that changes after selecting an answer
// time goes down if you select an incorrect answer
// game ends when time runs out, show end screen
// submitting score sends you to highscore page
// view highscores link takes you to another page that saves highscores in memory
// reset highscore button that erases memory
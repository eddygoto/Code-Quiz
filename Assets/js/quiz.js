//  grabbing the elements from the page for the quiz
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterEl = document.getElementById("questionCounter");
const scoreEl = document.getElementById("score");

// creating elements to create the quiz functions
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// creating the question array
let questions = [
    {
        question: "What is the device that trainers use to keep track of their Pokemon encounters?",

        choice1: "Pokeradar",
        choice2: "Pokefinder",
        choice3: "Pokedex",
        choice4: "Pokepal",

        answer: 3,
    },
    {
        question: "What are the three types of starter Pokemon?",

        choice1: "Grass, Fire, Water",
        choice2: "Electric, Ground, Flying",
        choice3: "Normal, Ghost, Fighting",
        choice4: "Psychic, Ice, Dragon",

        answer: 1,
    },
    {
        question: "Which of these is the most effective Pokeball?",
        
        choice1: "Dusk Ball",
        choice2: "Great Ball",
        choice3: "Net Ball",
        choice4: "Master Ball",
    
        answer: 4,
    },
    {
        question: "Where do you go to revive fainted Pokemon?",
        
        choice1: "Gym",
        choice2: "Pokemon Center",
        choice3: "Mount Fuji",
        choice4: "Pokemon Mansion",
    
        answer: 2,
    },
    {
        question: "Which of these is NOT a potential status ailment in a Pokemon battle?",
        
        choice1: "Poison",
        choice2: "Vertigo",
        choice3: "Frozen",
        choice4: "Burn",
    
        answer: 2,
    },
    {
        question: "What type of move is Hyper Beam?",
        
        choice1: "Normal",
        choice2: "Psychic",
        choice3: "Grass",
        choice4: "Fairy",
        
        answer: 1,
    },
    {
        question: "Which of these is NOT an Eeveelution?",
        
        choice1: "Sylveon",
        choice2: "Flareon",
        choice3: "Leafeon",
        choice4: "Radeon",
        
        answer: 4,
    },
    {
        question: "What type of attacks are Normal type Pokemon immune to?",
       
        choice1: "Fighting",
        choice2: "Dark",
        choice3: "Ghost",
        choice4: "Normal",
        
        answer: 3,
    },
    {
        question: "Which Pokemon is rumored to have created the entire Pokemon Universe, giving it the nickname 'The Original One'?",
       
        choice1: "HO-OH",
        choice2: "Mew",
        choice3: "Deoxys",
        choice4: "Arceus",
        
        answer: 4,
    },
    {
        question: "Which of these moves allows a Pokemon to attack while still asleep?",
       
        choice1: "Sleep Talk",
        choice2: "Nightmare",
        choice3: "Sleep Powder",
        choice4: "Dream Eater",
        
        answer: 1,
    },
];

const correctBonus = 10;
const maxQuestions = 10;

// grabbing and creating elements for the timer function
var timerEl = document.querySelector("#timer");
var countdown;
var timerCount = 60;

// function will run down the timer, when the timer hits 0 you'll be taken to the end page
startTimer = () => {
    timerCount = 60;
    countdown = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
    if (timerCount <= 0) {
        clearInterval(countdown);
        return window.location.assign("./end.html");
    }
}, 1000);
};

// function will start the game and then call the new question function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// function will randomly select a new question from the array
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign("./end.html");
    }

    localStorage.setItem('mostRecentScore', score);

    questionCounter++;
    questionCounterEl.innerText = questionCounter;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// for each choice, this will check if the answer is correct or incorrect and display that to the user
choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            increaseScore(correctBonus);
        }
        
        if (classToApply === "incorrect") {
            decreaseTimer();
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// adds to the score number
increaseScore = num => {
    score += num;
    scoreEl.innerText = score;
};

// decreases the timer count
decreaseTimer = () => {
    timerCount = timerCount - 5;
    timerCount.textContent = timerCount;
}

// runs both functions
window.onload = startGame();
window.onload = startTimer();
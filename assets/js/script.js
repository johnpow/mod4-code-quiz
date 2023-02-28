var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('question');
var startEl = document.getElementById('start');
var startbutEl = document.getElementById('startbut');
var scoresEl = document.getElementById('scores');
var answersEl = document.getElementById('answers');
var buttaEl = document.getElementById('butta');
var buttbEl = document.getElementById('buttb');
var buttcEl = document.getElementById('buttc');
var buttdEl = document.getElementById('buttd');
var responseEl = document.getElementById('response');
var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");

var highscores = [];



startEl.textContent = 'Test your luck at the hardest game in the world!'

startEl.setAttribute('style', "display:inline");
startbutEl.setAttribute('style', "display:inline");
// questionEl.setAttribute('style', "display:inline");
// answersEl.setAttribute('style', "display:inline");
// responseEl.setAttribute('style', "display:inline");


let round = 0;
let replay = 0;

startbutEl.addEventListener("click", function () {
    timeLeft = 60;
    startEl.setAttribute('style', "display:none");
    startbutEl.setAttribute('style', "display:none");
    highscoreForm.setAttribute('style', "display:none");
    scoresEl.setAttribute('style', "visibility:hidden");
    highscoreList.setAttribute('style', "display:none");
    countdown();
    askQuestion(round);
});

scoresEl.addEventListener("click", function () {
    init();
    gameHide();
    startEl.textContent = 'Highscores'
    highscoreList.setAttribute('style', "display:inline");
    startbutEl.setAttribute('style', "display:none");
    highscoreForm.setAttribute('style', "display:none");
    startbutEl.textContent = 'Play Game'
    startbutEl.setAttribute('style', "display:inline");
});

const gameHide = function () {
    startEl.setAttribute('style', "display:inline");
    clearInterval(timeInterval);
    startbutEl.textContent = 'Play Again'
    startbutEl.setAttribute('style', "display:inline");
}


const myQuestions = [
    {
        question: 'What color is the sky generally?',
        choices: ['blue', 'aqua', 'red', 'magenta'],
        correctAnswer: 0,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['red', 'grey', 'orange', 'pink'],
        correctAnswer: 1,
    },
    {
        question: 'What color is the sky at night when it\'s sailors delight?',
        choices: ['blue', 'eggplant', 'purple', 'red'],
        correctAnswer: 3,
    },
    {
        question: 'What color is the sky at night when there are tornados?',
        choices: ['black', 'orange', 'green', 'blue'],
        correctAnswer: 2,
    },
]

// const buttons = [buttaEl,buttbEl,buttcEl,buttdEl]
const askQuestion = function (i) {

    if (i < myQuestions.length) {
        questionEl.setAttribute('style', "display:inline");
        answersEl.setAttribute('style', "display:inline");

        
        questionEl.textContent = `${i + 1}: ${myQuestions[i].question}`;
        buttaEl.textContent = `a: ${myQuestions[i].choices[0]}`;
        buttbEl.textContent = `b: ${myQuestions[i].choices[1]}`;
        buttcEl.textContent = `c: ${myQuestions[i].choices[2]}`;
        buttdEl.textContent = `d: ${myQuestions[i].choices[3]}`;
        solution = myQuestions[i].correctAnswer;
        // i===0 makes sure the button listeners are only created on first questions, replay ===0 makes sure they are not created on replay
        if (i === 0 && replay === 0) {
            buttaEl.addEventListener("click", function () {
                if (solution === 0) {
                    console.log('hurray0');
                    round++;
                    return askQuestion(round);
                } else {
                    console.log('boo0');
                    timeLeft -= 15;
                    round++;
                    return askQuestion(round);
                }
            });

            buttbEl.addEventListener("click", function () {
                if (solution === 1) {
                    console.log('hurray1');
                    round++;
                    return askQuestion(round);

                } else {
                    console.log('boo1');
                    timeLeft -= 15;
                    round++;
                    return askQuestion(round);
                }
            })

            buttcEl.addEventListener("click", function () {
                if (solution === 2) {
                    console.log('hurray3');
                    round++;
                    return askQuestion(round);

                } else {
                    console.log('boo3');
                    timeLeft -= 15;
                    round++;
                    return askQuestion(round);
                }
            })

            buttdEl.addEventListener("click", function () {
                if (solution === 3) {
                    console.log('hurray4');
                    round++;
                    return askQuestion(round);

                } else {
                    console.log('boo4');
                    timeLeft -= 15;
                    round++;
                    return askQuestion(round);
                }
            })
        }
    } else {
        if (timeLeft <= 0) {
            timeLeft = 0;
            gameOver()
        } else { gameOver() }
        return;
    }
};

let timeLeft = 60;
let timeInterval;
function countdown() {

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {

        timeLeft--;
        timerEl.textContent = `Timer: ${timeLeft}`;

        if (timeLeft <= 0) {
            timeLeft = 0;
            gameOver()
        }
    }, 1000);

};

const gameOver = function () {
    questionEl.setAttribute('style', "display:none");
    answersEl.setAttribute('style', "display:none");
    startEl.textContent = `Game Over! Score ${timeLeft}`
    timerEl.textContent = '';
    init();
    highscoreForm.setAttribute('style', "display:inline");
    highscoreList.setAttribute('style', "display:none");
    startEl.setAttribute('style', "display:inline");
    clearInterval(timeInterval);
    startbutEl.textContent = 'Play Again'
    startbutEl.setAttribute('style', "display:inline");
    replay = 1;
    round = 0;
}



function renderHighscores() {

    highscoreList.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
      var highscore = highscores[i];
  
      var li = document.createElement("li");
      li.textContent = highscore;
      li.setAttribute("data-index", i);
  
  
      highscoreList.appendChild(li);
    }
    var button = document.createElement("button");
    button.textContent = "Clear Scores";
    highscoreList.appendChild(button);
  }
  
  function init() {
  
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
  
    if (storedHighscores !== null) {
      highscores = storedHighscores;
    }
    renderHighscores();
  }
  
  function storeHighscores() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
  
  
  highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var highscoreText = highscoreInput.value.trim();
  
    if (highscoreText === "") {
      return;
    }
  
    highscores.push(highscoreText +' Score: '+timeLeft);
    highscoreInput.value = "";
   
    storeHighscores();
    renderHighscores();
    highscoreForm.setAttribute('style', "display:none");
    startEl.textContent = 'Highscores'
    highscoreList.setAttribute('style', "display:inline");
  });
  
  
  highscoreList.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches("button") === true) {
      highscores = [];
  
      storeHighscores();
      renderHighscores();
    }
  });



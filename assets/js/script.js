var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('question');
var startEl = document.getElementById('start');
var startbutEl = document.getElementById('startbut');
var answersEl = document.getElementById('answers');
var buttaEl = document.getElementById('butta');
var buttbEl = document.getElementById('buttb');
var buttcEl = document.getElementById('buttc');
var buttdEl = document.getElementById('buttd');
var responseEl = document.getElementById('response');

startEl.textContent = 'Test your luck at the hardest game in the world!'

startEl.setAttribute('style', "display:inline");
startbutEl.setAttribute('style', "display:inline");
// questionEl.setAttribute('style', "display:inline");
// answersEl.setAttribute('style', "display:inline");
// responseEl.setAttribute('style', "display:inline");


let round = 0;
let replay = 0;

startbutEl.addEventListener("click", function () {
    startEl.setAttribute('style', "display:none");
    startbutEl.setAttribute('style', "display:none");
    countdown();
    askQuestion(round);
});


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
    startEl.textContent = `Game Over! Score ${timeLeft}`
    timerEl.textContent = '';
    startEl.setAttribute('style', "display:inline");
    questionEl.setAttribute('style', "display:none");
    answersEl.setAttribute('style', "display:none");
    clearInterval(timeInterval);
    startbutEl.textContent = 'Play Again'
    startbutEl.setAttribute('style', "display:inline");
    replay = 1;
    round = 0;
    timeLeft = 60;
}



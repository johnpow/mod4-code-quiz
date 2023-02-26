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

startEl.textContent = 'Hey this is the start of the game 2!'

startEl.setAttribute('style', "display:inline");
startbutEl.setAttribute('style', "display:inline");
// questionEl.setAttribute('style', "display:inline");
// answersEl.setAttribute('style', "display:inline");
// responseEl.setAttribute('style', "display:inline");


let round = 0;

startbutEl.addEventListener("click", function () {
    startEl.setAttribute('style', "display:none");
    startbutEl.setAttribute('style', "display:none");
    countdown();
    askQuestion(round);

});


const myQuestions = [
    {
        question: 'What color is the sky generally?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 0,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 1,
    },
    {
        question: 'What color is the sky at night when sailors delight?',
        choices: ['blue', 'red orange','black', 'green' ],
        correctAnswer: 1,
    },
]


// const buttons = [buttaEl,buttbEl,buttcEl,buttdEl]
const askQuestion = function(i) {

if (i<myQuestions.length) {
    questionEl.setAttribute('style', "display:inline");
    answersEl.setAttribute('style', "display:inline");

    questionEl.textContent = `${i + 1}: ${myQuestions[i].question}`;
    buttaEl.textContent = `a: ${myQuestions[i].choices[0]}`;
    buttbEl.textContent = `b: ${myQuestions[i].choices[1]}`;
    buttcEl.textContent = `c: ${myQuestions[i].choices[2]}`;
    buttdEl.textContent = `d: ${myQuestions[i].choices[3]}`;
    solution = myQuestions[i].correctAnswer;
    
    buttaEl.addEventListener("click", function () {
        if (solution === 0) {
            console.log('hurray0');
            return askQuestion(i+1);
        } else {
            console.log('boo0');
            timeLeft -= 15;
            return askQuestion(i+1);
        }
        });
             
    buttbEl.addEventListener("click", function () {
        if (solution === 1) {
            console.log('hurray1');
            return askQuestion(i+1);

        } else {
            console.log('boo1');
            timeLeft -= 15;
            return askQuestion(i+1);
        }
        })
    } else {
        startEl.textContent = 'Game Over!'
        startEl.setAttribute('style', "display:inline");
        questionEl.setAttribute('style', "display:none");
        answersEl.setAttribute('style', "display:none");
        clearInterval(timeInterval);
    return;
    }
};

let timeLeft = 60;
let timeInterval;
function countdown() {
    
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        
        timeLeft--;
        timerEl.textContent = `Timer: ${timeLeft}`;
    }, 1000);

    console.log(timeInterval)
    
};

// let i = 0;
// while (i<myQuestions.length) {
//     askQuestion(i);
// }



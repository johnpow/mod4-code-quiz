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

startbutEl.addEventListener("click", function () {
    startEl.setAttribute('style', "display:none");
    startbutEl.setAttribute('style', "display:none");
    countdown();    
    
});

const myQuestions = [
    {
        question: 'What color is the sky generally?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 1,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 0,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 0,
    },
]




let round = 0;
let penalty = 0;
let solution;
// const buttons = [buttaEl,buttbEl,buttcEl,buttdEl]
function askQuestion(a,b) {
    
    console.log('b is in aksqus' + b)
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
            round = a + 1;
            // return askQuestion();
        } else {
            console.log('boo0');
            round = a + 1;
            penalty = b + 1;
            console.log('first '+ penalty);
        }
        });
        
        
    buttbEl.addEventListener("click", function () {
        if (solution === 1) {
            console.log('hurray1');
            round = a + 1;

        } else {
            console.log('boo1');
            round = a + 1;
            penalty = b + 1;
        }
        });

        

console.log('second '+penalty);
return [round, penalty];

};



let timeLeft = 60;
let timeInterval;
let i = 0;
let j = 0;
let newVar = [];
function countdown() {
    
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        
        timeLeft--;
        timerEl.textContent = `Timer: ${timeLeft}`;
        console.log('what is j ' +j)
        newVar = askQuestion(i,j);
        i = newVar[0];
        j = newVar[1];
        console.log('i is here 1:' + i)
        console.log('j is here 1:' + j)
        console.log('newvar is here 1:' + newVar[1])
        // ability to penalize based on certain conditions
        if (j === 1)  {
            clearInterval(timeInterval);
            timeLeft -= 15;
            console.log('j is here 2:' + j)
            countdown();
        };
        



    }, 1000);

    console.log(timeInterval)
    
};

// console.log(timeInterval)
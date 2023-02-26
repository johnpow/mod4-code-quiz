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
        correctAnswer: 0,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 1,
    },
    {
        question: 'What color is the sky on a rainy day?',
        choices: ['blue', 'black', 'green', 'red orange'],
        correctAnswer: 1,
    },
]


console.log(myQuestions[1].question)


let score = 0;
// const buttons = [buttaEl,buttbEl,buttcEl,buttdEl]
function askQuestion(i) {

    questionEl.setAttribute('style', "display:inline");
    answersEl.setAttribute('style', "display:inline");

    questionEl.textContent = `${i + 1}: ${myQuestions[i].question}`;
    buttaEl.textContent = `a: ${myQuestions[i].choices[0]}`;
    buttbEl.textContent = `b: ${myQuestions[i].choices[1]}`;
    buttcEl.textContent = `c: ${myQuestions[i].choices[2]}`;
    buttdEl.textContent = `d: ${myQuestions[i].choices[3]}`;
    let solution = myQuestions[i].correctAnswer;
    console.log(solution)
    
    buttbEl.addEventListener("click", function () {
        if (solution === 1) {
            console.log('hurray');
            score = i + 1;
            // return askQuestion();
        } else {
            console.log('boo');
            score = i + 1;
            // return askQuestion();
        }
        });
    buttaEl.addEventListener("click", function () {
        if (solution === 0) {
            console.log('hurray');
            score = i + 1;
            // return askQuestion();
        } else {
            console.log('boo');
            score = i + 1;
        }
        });
        


return score;

};


function countdown() {
    var timeLeft = 60;
    let i = 0;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        //
        timeLeft--;
        timerEl.textContent = `Timer: ${timeLeft}`;

        let newVar = askQuestion(i);
        i = newVar;

        // if (timeLeft > 0 && i<myQuestions.length) {
            
        //     console.log(rNum)
        // }

       
        //
    }, 1000);
    
};


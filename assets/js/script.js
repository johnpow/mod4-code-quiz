var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('question');
var startEl = document.getElementById('start');
var startbutEl = document.getElementById('startbut');
var answersEl = document.getElementById('answers');

startEl.textContent = 'Hey this is the start of the game 2!'

// startEl.setAttribute('style', "display:inline");
// startbutEl.setAttribute('style', "display:inline");
// questionEl.setAttribute('style', "display:inline");
// answersEl.setAttribute('style', "display:inline");


function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    timeLeft--;
    timerEl.textContent = `Timer: ${timeLeft}`;
    // YOUR CODE HERE
    if (timeLeft === 0) {
   //   timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
    //
  }, 1000);
}

// Displays end of game message
function displayMessage() {
  // the index of the word to display at the current moment
  var wordCount = 0;


  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message

    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
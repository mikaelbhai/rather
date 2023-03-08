var questions = [  "Would you rather live in a world without music or a world without TV?",  "Would you rather have the power of flight or the power of invisibility?",  "Would you rather always be 10 minutes late or always be 20 minutes early?",  "Would you rather be able to speak every language fluently or be able to play every musical instrument?",  "Would you rather have a rewind button in your life or a pause button?",];

var answers = [  ["Music", "TV"],

  ["Flight", "Invisibility"],

  ["10 minutes late", "20 minutes early"],

  ["Every language fluently", "Every musical instrument"],

  ["Rewind button", "Pause button"],

];

var currentQuestion = 0;

var questionElement = document.getElementById("question");

var option1Element = document.getElementById("option1");

var option2Element = document.getElementById("option2");

function displayQuestion() {

  questionElement.textContent = questions[currentQuestion];

  option1Element.textContent = answers[currentQuestion][0];

  option2Element.textContent = answers[currentQuestion][1];

}

function chooseOption(option) {

  if (option === 1) {

    console.log("Option 1 chosen");

  } else if (option === 2) {

    console.log("Option 2 chosen");

  }

  

  currentQuestion++;

  

  if (currentQuestion < questions.length) {

    displayQuestion();

  } else {

    console.log("Game over");

  }

}

displayQuestion();

option1Element.addEventListener("click", function() {

  chooseOption(1);

});

option2Element.addEventListener("click", function() {

  chooseOption(2);

});


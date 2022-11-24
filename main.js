let qAndA = [
  {
    id: 1,
    q: "What data type is most useful for holding data in text form???",
    answers: [
      { a: "array", type: "incorrect" },
      { b: "object", type: "incorrect" },
      { c: "string", type: "correct" },
      { d: "const", type: "incorrect" },
    ],
  },

  {
    id: 2,
    q: "this is the second question?",
    answers: [
      { a: "this is the second answer", type: "incorrect" },
      { b: "this is also a second answer", type: "incorrect" },
      { c: "this is the correct one", type: "correct" },
      { d: "this is a second answer", type: "incorrect" },
    ],
  },

  {
    id: 3,
    q: "this is the third question?",
    answers: [
      { a: "this is the third answer", type: "incorrect" },
      { b: "this is the correct third answer", type: "correct" },
      { c: "this is also a third answer", type: "incorrect" },
      { d: "this is a third answer", type: "incorrect" },
    ],
  },
  {
    id: 4,
    q: "What is the correct way to add two classes to an element?",
    answers: [
      { a: "'two, classes'", type: "incorrect" },
      { b: "'.two, .classes'", type: "incorrect" },
      { c: "'.two classes'", type: "correct" },
      { d: "an element can only have one class", type: "incorrect" },
    ],
  },
];
let startButton = document.getElementById("startButton");
let clickOnAnswer = document.getElementsByClassName("answer");
let encourage = document.getElementById("encouragement");

let tID = 1;
const currentQ = qAndA.find((t) => t.id === tID);
// console.log(currentQ);

startButton.addEventListener(
  "click",
  (startGame = () => {
    let showMainContainer = document.querySelector("main");
    let hideStartButton = document.getElementById("startButton");
    let hideQuizImage = document.getElementById("quizTime");

    showMainContainer.classList.remove("hide");
    hideStartButton.classList.add("hide");
    hideQuizImage.classList.add("hide");
    addQuestionText();
    // addAnswerText();
  })
);

function addQuestionText() {
  let questionElement = document.createElement("h2");
  let qText = currentQ.q;
  questionElement.innerHTML = qText;
  document.getElementById("questionContainer").appendChild(questionElement);
  
  //fix below 8/2/22 1130 pm
  function addAnswerText() {
    let answerElement = document.createElement("h3");
    qAndA.answers.forEach()

    
    let aText = currentQ.answers;
    questionElement.innerHTML = qText;
    document.getElementById("questionContainer").appendChild(questionElement);
      for (t = 0; t < currentQ.answers.length; t++) {
          let aText = currentQ.answers;
          let answerElement = document.createElement("button");
          
          // currentQ.answers.forEach((answer, t) => answer.answerElement.innerHTML(answer));
          // answerElement.className = 'answer';
          document.getElementById("answerContainer").appendChild(answerElement);
          currentQ.answers.forEach((answer) =>
          document.getElementById("button").innerHTML(answer)
          );
    }
  }
}

//the below event listener is throwing an error because the 'answer' element for clickOnAnswer is not yet created. fix this with async/await?

// clickOnAnswer.addEventListener('click', ifCorrect);

let bodyBackground = document.querySelector("body");
function ifCorrect() {
  encourage.classList.remove("hide");
  let correctAnswer = qAndA.group(({ type }) => "correct");
  if (correctAnswer) {
    let increaseScore = document.getElementById("score");
    increaseScore.innerHTML++;
    let rightElement = document.createElement("div");
    let rightImage = document.createElement("img");
    rightImage.src = "assets/dancing-bear-gif.webp";
    rightImage.className = "encouragement";
    rightElement.appendChild(rightImage);
    document.getElementById("encouragement").appendChild(rightElement);
    bodyBackground.classList.add("correct");
  } else {
    let wrongElement = document.createElement("div");
    let wrongImage = document.createElement("img");
    wrongImage.src = "assets/falling1.webp";
    wrongImage.className = "encouragement";
    wrongElement.appendChild(wrongImage);
    document.getElementById("encouragement").appendChild(wrongElement);
    bodyBackground.classList.add("wrong");
    //finish this maybe add sound
  }
}
// make the next button show up after the right or wrong answer is clicked
let nextButton = document.createElement("button");
function addNextButton() {
  let buttonLabel = document.createTextNode("NEXT");
  nextButton.appendChild(buttonLabel);
  document.getElementById("nextDiv").appendChild(nextButton);
  nextButton.classList.add("next-btn");
}
addNextButton();

nextButton.addEventListener("click", setNextQuestion());

function setNextQuestion() {
  nextButton.classList.add("hide");
  encourage.classList.add("hide");
  for (let n = 1; n < qAndA; n++) {
    let thisQuestion = currentQ([n]);
  }

  // 7/26/22 10pm//
}
// let nextQuestion = document.getElementById('question');
// nextQuestion.innerText += questionText;
// addQuestionText();

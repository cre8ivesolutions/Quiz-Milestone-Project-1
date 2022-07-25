let startOnClick = document.getElementById('startButton');
let questionDiv = document.getElementById('question');
let answerDivs = document.getElementsByClassName('answer');

startOnClick.addEventListener('click', startGame=()=>{
    let showMainContainer = document.querySelector('main');
    let hideStartButton = document.getElementById('startButton');
    let hideStartScreen = document.getElementById('start-screen');
    let addQuestion = document.getElementById('questionContainer');
    
    showMainContainer.classList.remove('hide');
    hideStartButton.classList.add('hide');
    addQuestionText()
}
)

function addQuestionText(){
    let nextQuestion = document.getElementById('question');
    let questionText = ;

    for (let i = 0; i < qAndA.length; i++) {
        console.log(qAndA[i]);
        };
    // nextQuestion.innerText += questionText;
};




// addQuestionText();
// if (answer === 'correct') {
    // function correctAnswer () => {//
    // answerDivs.innerText=qAndA.answers;
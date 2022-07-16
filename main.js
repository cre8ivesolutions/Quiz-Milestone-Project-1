let startOnClick = document.getElementById('startButton');

let questionDiv = document.getElementById('question');
let answerDivs = document.getElementsByClassName('answer');

startOnClick.addEventListener('click', startGame=()=>{
    let showMainContainer = document.querySelector('main');
    let hideStartButton = document.getElementById('startButton');
    let hideStartScreen = document.getElementById('start-screen');
    let addQuestion = document.getElementById('question');
    
    showMainContainer.classList.remove('hide');
    hideStartButton.classList.add('hide');
    addQuestionText()
    
    
}
)

function addQuestionText(){
    document.getElementById('question').textContent += 'test';
}
// if (answer === 'correct') {
    // function correctAnswer () => {//
    // answerDivs.innerText=qAndA.answers;
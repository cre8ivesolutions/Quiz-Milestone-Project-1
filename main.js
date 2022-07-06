

let startOnClick = document.getElementById('startButton');

let questionDiv = document.getElementById('question');
let answerDivs = document.getElementsByClassName('answer');

startOnClick.addEventListener('click', startGame=()=>{
    let showMainContainer = document.querySelector('main');
    let hideStartButton = document.getElementById('startButton');
    
    showMainContainer.classList.remove('hide');
    hideStartButton.classList.add('hide');
    
    questionDiv.innerText = qAndA.questions;
}
)

// if (answer === 'correct') {
// function correctAnswer () => {//
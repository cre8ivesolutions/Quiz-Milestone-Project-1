//When the page loads, only show the start button
function hide (element){
    let hidden = element.style.display = 'none';
    return element;
}
function hideStartButton(){
    const hideStart = document.getElementById('startButton');
    hideStart.addEventListener('click', hide)
}
const displayQuestionText = () => {
    let displayQuestion = document.getElementById('question');
    displayQuestion.innerHTML = 'question test text';
}
const displayAnswerText = () => {
    let displayAnswer = document.getElementById('answer1');
    displayAnswer = 'answer test text';
    
}
const displayScore = () => {
    let runningScore = document.getElementById('score');
    runningScore.innerHTML = " 0";
}
const displayTotal = () => {
    let numberOfQuestions = document.getElementById('totalQuestions');
    numberOfQuestions.innerHTML = 10;
}
displayTotal()
displayScore()
displayAnswerText()
displayQuestionText()


// function hide (element){
//     quiz.style.display = 'none';

//     document.querySelector().
// }
// async function showContent (){
//     document.getElementById('startButton').addEventListener('click',)
// }

// when you click start, the first question will load
// make a number button for the questions
//display the question in the question div
//display the answers in the answers div
// style the page
// create a file for the questions and answers
// link the questions and answers
//add a hover listener for the answers to change the color
// add a hover listener for the 
// add the click listener for the answer choice
//add the logic for increasing/decreasing the counter when the answer is chosen
// "onload" in the html body
// make the counter increase when a correct answer is given 
// add a timer to the game
// display the time it took to finish on the last screen
//randomize the questions
//add a gif for if they win or lose
//add a button to restart at the end

//BONUS
// ask their name at the beginning and add it to the end
//add  "good job<name>"
//add a fun font family from Google
// add a photo to each question
//add a button to share their score online at the end
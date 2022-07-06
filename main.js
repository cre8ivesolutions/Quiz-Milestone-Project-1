// start screen
function onStart () {
    //show start button and hide quiz container
    let showStartButton = document.getElementById('startButton');
    showStartButton.classList.remove('hide');

    let hideQuizContainer = document.getElementById('quizContainer');
    hideQuizContainer.classList.add('hide');

    let hideScoreContainer = document.getElementById('scoreContainer');
    hideScoreContainer.classList.add('hide');
    }

function startGame (){
    let showQuizContainer = document.getElementById('quizContainer');
    showQuizContainer.classList.remove('hide');

    let showScoreContainer = document.getElementById('scoreContainer');
    showScoreContainer.classList.remove('hide');

    let hideStartButton = document.getElementById('startButton');
    hideStartButton.classList.add('hide');
}


document.getElementById('startButton').addEventListener("click", startGame());

onStart()



    //onClick hide start button and show quizContainer
// }


// if (answer === 'correct') {

// }
// function correctAnswer () => {

//
let qAndA = [
    {
        questions: "What data type is most useful for holding data in text form?",
        answers: [
            {a: 'array', type: 'incorrect'},
            {b: 'object', type: 'incorrect'},
            {c: 'string', type: 'correct'},
            {d:'const', type: 'incorrect'},]        
    },
        
      {questions: "this is the second question?", 
        answers : [
            {text:'this is the second answer', type: 'incorrect'},
            {text: "this is also a second answer", type: 'incorrect'},
            {text: "this is the correct one", type: 'correct'},
            {text: "this is a second answer", type: 'incorrect'},]
        },
        
        {questions: "this is the third question?", 
        answers: [
            {text:'this is the third answer', type: 'incorrect'},
            {text: "this is the correct third answer", type: 'correct'},
            {text: 'this is also a third answer', type: 'incorrect'},
            {text: "this is a third answer", type: 'incorrect'},]
        },    
        {questions: "What is the correct way to add two classes to an element?", 
        answers: [
            {text:"'two, classes'", type: 'incorrect'},
            {text: "'.two, .classes'", type: 'incorrect'},
            {text: "'.two classes'", type: 'correct'},
            {text: "an element can only have one class", type: 'incorrect'},]
        },
    ]

let startOnClick = document.getElementById('startButton');
// let questionDiv = document.getElementById('question');
// let answerDivs = document.getElementsByClassName('answer');
let clickOnAnswer = document.getElementsByClassName('answer');

startOnClick.addEventListener('click', startGame=()=>{
    let showMainContainer = document.querySelector('main');
    let hideStartButton = document.getElementById('startButton');
    let hideStartScreen = document.getElementById('start-screen');
    // let addQuestion = document.getElementById('question');
    
    showMainContainer.classList.remove('hide');
    hideStartButton.classList.add('hide');

    
    
    function addQuestionText(){
        const questionElement = document.createElement('h2');
        const questionText = document.createTextNode("questions from array" )
        questionElement.appendChild(questionText);
        document.getElementById('questionContainer').appendChild(questionElement);
        //the next couple of lines are not working correctly to display the quetions in the array of qAndA.questions 
        for (let i = 0; i < qAndA.length; i++) {
            let qText= qAndA.questions[i];
        };           
    };
    addQuestionText();
    
    function addAnswerText(){
        const answerElement = document.createElement('div');
        answerElement.className='answerContainer container';
        const answerText = document.createTextNode("answers from array");
        answerElement.appendChild(answerText);
        document.getElementById('answerContainer').appendChild(answerElement);
    };
    addAnswerText();
    //the answer txt is not showing up
});


function ifCorrect(){
    let correctAnswer = qAndA.group(({type})=> 'correct');
    if (correctAnswer.correct){
        let increaseScore = document.getElementById('score');
        increaseScore.innerHTML ++;
        let rightElement = document.createElement('div');
        let rightImage = document.createElement('img');
        rightImage.src = 'assets/dancing-bear-gif.webp';
        rightImage.className='encouragement';
        rightElement.appendChild(rightImage);
        document.getElementById('encouragement').appendChild(rightElement);
    } else {
        let wrongElement = document.createElement('div');
        let wrongImage = document.createElement('img');
        wrongImage.src = 'assets/falling1.webp';
        wrongImage.className='encouragement';
        wrongElement.appendChild(wrongImage);
        document.getElementById('encouragement').appendChild(wrongElement);
        //finish this maybe add sound
    }; 
};

clickOnAnswer.addEventListener('click', ifCorrect);

    function addNextButton(){
        const nextButton = document.createElement('button');
        const buttonLabel = document.innerHTML('NEXT');
        nextButton.appendChild(buttonLabel);
        document.getElementById('encouragement').appendChild('nextButton');
    }
    addNextButton();


    

        // let nextQuestion = document.getElementById('question');
        // let nextQuestion.innerText="test Text"
        
            // nextQuestion.innerText += questionText;
        
        // addQuestionText();
// if (answer === 'correct') {
    // function correctAnswer () => {//
    // answerDivs.innerText=qAndA.answers;
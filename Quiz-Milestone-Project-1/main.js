let qAndA = [
    {
        questions: "What data type is most useful for holding data in text form?",
        answers: [
            {a: 'array', type: 'incorrect'},
            {a: 'object', type: 'incorrect'},
            {a: 'string', type: 'correct'},
            {a:'const', type: 'incorrect'},]        
    },
        
      {questions: "this is the second question?", 
        answers : [
            {a:'this is the second answer', type: 'incorrect'},
            {a: "this is also a second answer", type: 'incorrect'},
            {a: "this is the correct one", type: 'correct'},
            {a: "this is a second answer", type: 'incorrect'},]
        },
        
        {questions: "this is the third question?", 
        answers: [
            {a:'this is the third answer', type: 'incorrect'},
            {a: "this is the correct third answer", type: 'correct'},
            {a: 'this is also a third answer', type: 'incorrect'},
            {a: "this is a third answer", type: 'incorrect'},]
        },    
        {questions: "What is the correct way to add two classes to an element?", 
        answers: [
            {a:"'two, classes'", type: 'incorrect'},
            {a: "'.two, .classes'", type: 'incorrect'},
            {a: "'.two classes'", type: 'correct'},
            {a: "an element can only have one class", type: 'incorrect'},]
        },
    ]
    let startOnClick = document.getElementById('startButton');
    let clickOnAnswer = document.getElementsByClassName('answer');
    let encourage = document.getElementById('encouragement');
    
startOnClick.addEventListener('click', startGame=()=>{
    let showMainContainer = document.querySelector('main');
    let hideStartButton = document.getElementById('startButton');
    let hideQuizImage = document.getElementById('quizTime');

    showMainContainer.classList.remove('hide');
    hideStartButton.classList.add('hide');
    hideQuizImage.classList.add('hide');
    encourage.classList.add('hide');

    function addQuestionText(){
        // let qText   
        let questionElement = document.createElement('h2');
        const questionText = document.createTextNode("questions from array" )

        questionElement.appendChild(questionText);
        document.getElementById('questionContainer').appendChild(questionElement);
        //the next couple of lines are not working correctly to display the quetions in the array of qAndA.questions 
    
    
        let text = "";
        for (let i = 0; i < qAndA.length; i++) {
            text += i
            console.log(i)       
        };    
        let qText = qAndA.toString((quesT) => {
            return qAndA.question
        })
        console.log(qText)

    };
    addQuestionText();
    





    function addAnswerText(){
        let answerElement = document.createElement('button');
        answerElement.className='answer';
        let answerText = document.createTextNode("answers from array");
        answerElement.appendChild(answerText);
        document.getElementById('answerContainer').appendChild(answerElement);
    };
    //the answer txt is not showing up
    qAndA.forEach(addAnswerText);

    let bodyBackground = document.querySelector('body');
    //the below event listener is throwing an error because the 'answer' element for clickOnAnswer is not yet created. fix this with async/await?
    clickOnAnswer.addEventListener('click', ifCorrect);
    

    function ifCorrect(){
        encourage.classList.remove('hide');
        let correctAnswer = qAndA.group(({type})=> 'correct');
        if (correctAnswer){
            
            let increaseScore = document.getElementById('score');
            increaseScore.innerHTML ++;
            let rightElement = document.createElement('div');
            let rightImage = document.createElement('img');
            rightImage.src = 'assets/dancing-bear-gif.webp';
            rightImage.className='encouragement';
            rightElement.appendChild(rightImage);
            document.getElementById('encouragement').appendChild(rightElement);
            bodyBackground.classList.add('correct');
        } else {
            let wrongElement = document.createElement('div');
            let wrongImage = document.createElement('img');
            wrongImage.src = 'assets/falling1.webp';
            wrongImage.className='encouragement';
            wrongElement.appendChild(wrongImage);
            document.getElementById('encouragement').appendChild(wrongElement);
            bodyBackground.classList.add('wrong');
            //finish this maybe add sound
        }; 
    };
    // make the next button show up after the right or wrong answer is clicked
  let nextButton = document.createElement('button');
    function addNextButton(){
        let buttonLabel = document.createTextNode('NEXT');
        nextButton.appendChild(buttonLabel);
        document.getElementById('nextDiv').appendChild(nextButton);
        nextButton.classList.add('next-btn')
    };    
    addNextButton();

    nextButton.addEventListener('click', setNextQuestion())

    function setNextQuestion(){
        nextButton.classList.add('hide');
        encourage.classList.add('hide');
        // 7/26/22 10pm//


    }
        // let nextQuestion = document.getElementById('question');       
        // nextQuestion.innerText += questionText;
        // addQuestionText();
})

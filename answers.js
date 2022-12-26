function setAnswers(){
    let tID = 1;
    const currentQ = qAndA.find((t) => t.id === tID);
    let answerElement = document.createElement("h3");
    let answerText = currentQ.answers;
    // currentQ.answers.forEach(){
    //     return answerArray
    //     } 
    answerElement.innerHTML = answerText;
    document.getElementById("answerContainer").appendChild(answerElement)
}

export default setAnswers();
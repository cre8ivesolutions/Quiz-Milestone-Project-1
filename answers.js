// let qAndA = [
//     {
//       id: 1,
//       q: "What data type is most useful for holding data in text form???",
//       answers: [
//         { a: "array", type: "incorrect" },
//         { b: "object", type: "incorrect" },
//         { c: "string", type: "correct" },
//         { d: "const", type: "incorrect" },
//       ],
//     },
// ]

export default setAnswers(){
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
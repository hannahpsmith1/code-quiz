document.getElementById("start-btn").addEventListener ("click", startQuiz)



function startQuiz (){
    document.getElementById("headerText").classList.add("hide")
    document.getElementById("supportText").classList.add("hide")
    document.getElementById("question-container").classList.remove("hide")
    document.getElementById("start-btn").classList.add("hide")
    populateQuestion(questions[0])
    
}

function populateQuestion (questionObject){
    var AnswerEl =document.getElementById("Answers")
    var QuestionEl = document.getElementById("Question")
    QuestionEl.innerHTML = questionObject.question
    console.log(questionObject.answers)
    for (var i = 0; i < questions.question.answers.length; i++) {
//       var button = $("<button>");
//       button.addClass("button");
//       button.attr("data-option", answers[i]);
//       button.text(answers[i]);
//       $("buttons").append(button);
//     })
    
//     for (i=0; i < answers.length; i++){
//         var button = document.createElement("button");
//         // button.setAttribute(AnswersEl);
//         // button.setAttribute ('class', 'btn');
//         button.innerHTML = answers.text[i];
//         console.log(questionObject.answers[i])

//         AnswerEl.appendChild(button);
//     }
// }

// for (var i = 0; i < questions.question.answers.length; i++) {
//   var button = $("<button>");
//   button.addClass("button");
//   button.attr("data-option", answers[i]);
//   button.text(answers[i]);
//   $("buttons").append(button);
// })

//   // Inside the loop...

//   // 2. Create a variable named "letterBtn" equal to $("<button>");
//   var letterBtn = $("<button>");

//   // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
//   letterBtn.addClass("letter-button letter letter-button-color");

//   // 4. Then give each "letterBtn" a data-attribute called "data-letter".
//   letterBtn.attr("data-letter", letters[i]);

//   // 5. Then give each "letterBtns" a text equal to "letters[i]".
//   letterBtn.text(letters[i]);

//   // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
//   $("#buttons").append(letterBtn);

// }
// }
// generateButtons()
// Be sure to test that your code works for this major task, before proceeding to the next one!






// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }


function startTimer (){

}

function checkQuestion (){

}

function wrongAnswer () {

}

function endQuiz () {

}

function addQuestionToQuiz () {

}

function correctAnswer () {

}



const questions = [
    {
      question: 'Who was the 44th President of the USA',
      answers: [
        { text: 'Obama', correct: true },
        { text: 'Bush', correct: false },
        { text: 'Clinton', correct: false },
        { text: 'Gore', correct: false }
      ]
    },
    {
      question: 'In what state is Denali National Park?',
      answers: [
        { text: 'California', correct: false },
        { text: 'Washington', correct: false },
        { text: 'New Mexico', correct: false },
        { text: 'Alaska', correct: true }
      ]
    },
    {
      question: 'What company did Steve Jobs found? ',
      answers: [
        { text: 'Apple', correct: true },
        { text: 'Microsoft', correct: false },
        { text: 'Tesla', correct: false },
        { text: 'Amazon', correct: false }
      ]
    },
    {
      question: 'Where is 30 Rock Located?',
      answers: [
        { text: 'Cleveland', correct: false },
        { text: 'Los Angeles', correct: false },
        { text: 'Boston', correct: false },
        { text: 'New York City', correct: true }
      ]
    },
    {
      question: 'Who is Kim Kardashian Married to?',
      answers: [
        { text: 'Chris Humpries', correct: false },
        { text: 'Dwayne Wade', correct: false },
        { text: 'Kobe Bryant', correct: false },
        { text: 'Kanye West', correct: true }
      ]
    }
]
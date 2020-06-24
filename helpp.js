document.getElementById("start-btn").addEventListener ("click", startQuiz)

var timeEl = document.getElementById("timer");
var score =0;
var questionNum = 0;
var secondsLeft = 10;


function startQuiz (){
    document.getElementById("headerText").classList.add("hide")
    document.getElementById("supportText").classList.add("hide")
    document.getElementById("question-container").classList.remove("hide")
    document.getElementById("start-btn").classList.add("hide")
    populateQuestion(questions[0])
    startTimer()
}

function startTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endGame()
      }
  
    }, 1000);
  }

function populateQuestion (questionObject){
    var AnswerEl =document.getElementById("Answers")
    var QuestionEl = document.getElementById("Question")
    QuestionEl.innerHTML = questionObject.question
    console.log(questionObject.answers)
    for (i=0; i < questionObject.answers.length; i++){
        var button = document.createElement("button")
        button.setAttribute("id", i);
        button.innerHTML = questionObject.answers[i].text
        console.log(questionObject.answers[i])
        AnswerEl.appendChild(button)
        button.addEventListener("click", checkAnswer)
        // counter ++
        // checkAnswer()
        // selectAnswer()
        // nextAnswer()
    }
}
// questionindexcounter 
function checkAnswer(){
    // console.log(event.target.id)
    // console.log(questionNum)
    // console.log(questions[questionNum].answers[event.target.id])
    if (questions[questionNum].answers[event.target.id].correct) {
        score ++;
        questionNum++;
        if (questionNum < questions.length) {
            populateQuestion(questions[questionNum])
        } else {
            endGame()
        }
    } else {
        questionNum++;
        if (questionNum < questions.length) {
            populateQuestion(questions[questionNum])
        } else {
            endGame()
        }
    }
    


    // propogate(question)

}

function endGame(){
    // if count > questions.length;
    document.getElementById("question-container").classList.add("hide")
    var endGame = document.createElement("div");
    var newContent = document.text("The Quiz Has Ended");
    endGame.appendChild(newContent);
    var currentDiv = document.getElementById("endGame"); 
    document.body.insertBefore(endGame, currentDiv); 



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
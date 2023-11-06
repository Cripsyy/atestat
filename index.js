let jsonData;

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    test();
  })
  .catch(error => {
    console.error('Error loading the file', error);
  });

function test(){
  if(jsonData){
    const question = jsonData[3];
    const number = question.number;
    console.log(number);
  }else{
    console.log("Data is not available yet")
  }
}

let text = document.getElementsByClassName("main-text")[0];
let quizButton = document.getElementsByClassName("main-button")[0];
let nextButton = document.getElementsByClassName("next-button")[0];
let previousButton = document.getElementsByClassName("previous-button")[0];
let question = document.getElementsByClassName("question")[0];
let answers = document.getElementsByClassName("answers")[0];

function startQuiz(){
    quizButton.classList.add("hidden");
    text.classList.add("hidden");
    question.classList.remove("hidden");
    answers.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    previousButton.classList.remove("hidden");
    console.log("it works");
    
}

function nextQuestion(){

}

function previousQuestion(){

}

if(quizButton){
    quizButton.addEventListener("click", startQuiz);
}else{
    console.error("Element with class 'main-button' not found.");
}



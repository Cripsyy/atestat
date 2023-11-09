let jsonData;
let index=0;

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    nextButton.addEventListener("click", nextQuestion);
    previousButton.addEventListener("click", previousQuestion);
  })
  .catch(error => {
    console.error('Error loading the file', error);
  });

let text = document.getElementsByClassName("main-text")[0];
let quizButton = document.getElementsByClassName("main-button")[0];
let nextButton = document.getElementsByClassName("next-button")[0];
let previousButton = document.getElementsByClassName("previous-button")[0];
let finishButton = document.getElementsByClassName("finish-button")[0];
let question = document.getElementsByClassName("question")[0];
let answers = document.getElementsByClassName("answers")[0];

function startQuiz(){
  quizButton.classList.add("hidden");
  text.classList.add("hidden");
  question.classList.remove("hidden");
  answers.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  console.log("it works");
}

function nextQuestion(){
  if(index === jsonData.length - 2){
    finishButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  }
  if(index !== 1){
    previousButton.classList.remove("hidden");
  }
  index++;
  console.log(index); 
  question.innerText=jsonData[index].question;
}

function previousQuestion(){
  if(index === 1){
    previousButton.classList.add("hidden");
  }
  if(index < jsonData.length){
    finishButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  }
  index--;
  console.log(index);
  question.innerText=jsonData[index].question;
}

quizButton.addEventListener("click", startQuiz);



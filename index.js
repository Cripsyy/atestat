let jsonData;

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    nextButton.addEventListener("click", nextQuestion);
  })
  .catch(error => {
    console.error('Error loading the file', error);
  });

function test(){
  if(jsonData){
    const question = jsonData[4];
    const number = question.number;
    console.log(number);
    console.log(Object.keys(jsonData).lenght);
    console.log(jsonData);
    console.log(jsonData[7].question);
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

let i=0;

function nextQuestion(){
    if(i === jsonData.lenght){
        i=0;
    }
    question.innerText=jsonData[i].question;
    i++;
    console.log(i);
}

function previousQuestion(){

}

if(quizButton){
    quizButton.addEventListener("click", startQuiz);
}else{
    console.error("Element with class 'main-button' not found.");
}



const initialDiv = document.getElementById("initial-div");
const questionDiv = document.getElementById("question-div");
const mainDiv = document.getElementById("main-div");
const resultDiv = document.getElementById("result-div");
const answersDiv = document.getElementById("answers");

const quizButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const finishButton = document.getElementById("finish-button");

const questionText = document.getElementById("question");

let questionIndex = 0;

quizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
finishButton.addEventListener("click", finishQuiz);


function startQuiz(){
  initialDiv.classList.add("hidden");
  questionText.classList.remove("hidden");
  questionDiv.classList.remove("hidden");
  nextButton.classList.remove("hidden");

  changeQuestion();
  gradientChange();
}

function changeQuestion(){
  if(questionIndex < questions.length){
    if(questionIndex >= 1){
      previousButton.classList.remove("hidden");
    }
    answersDiv.innerHTML = "";
    questionText.innerText =`${questions[questionIndex].number}.${questions[questionIndex].question}`;

    questions[questionIndex].answers.forEach((answer, index) => {
      const input = createInputElement(answer, index);

      input.addEventListener("input", ()=> {
        console.log(input.value);
        const inputValue = input.valueAsNumber;
        if(inputValue < answer.min || isNaN(inputValue)){
          input.value = answer.min;
        }
        if(inputValue > answer.max || isNaN(inputValue)){
          input.value = answer.max
        }
      });
      
      const image = createImageElement(answer);
      const text = createTextElement(answer);

      appendAnswers(input, image, text);
    })
  }
}

function createInputElement(answer, index){
  const input = document.createElement("input");
  input.setAttribute("type", questions[questionIndex].type);

  if(questions[questionIndex].type === "number"){
    input.setAttribute("min",answer.min);
        input.setAttribute("max",answer.max);
        if(index === 0){
          input.setAttribute("value",answer.min);
        }else{
          input.setAttribute("value",answer.max);
        }
  }
  input.classList.add("answer-input");
  return input;
}

function createImageElement(answer) {
  const image = document.createElement("img");
  if (answer.image) {
    image.src = answer.image;
  }
  image.classList.add("answer-image");
  return image;
}

function createTextElement(answer) {
  const text = document.createElement("p");
  if (answer.text) {
    text.innerText = answer.text;
  }
  text.classList.add("answer-text");
  return text;
}

function appendAnswers(...elements) {
  elements.forEach((element) => answersDiv.appendChild(element));
}

function nextQuestion(){
  questionIndex++;
  if(questionIndex >= questions.length - 1){
    nextButton.classList.add("hidden");
    finishButton.classList.remove("hidden");
  }
  changeQuestion();
}

function previousQuestion(){
  questionIndex--;
  changeQuestion();
  if(questionIndex <= 0){
    previousButton.classList.add("hidden");
  }
  if(questionIndex < questions.length){
    nextButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
  }
}

function finishQuiz(){
  mainDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");
}

function gradientChange(){
  const body = document.body;
  let angle = 180;

  setInterval(() => {
    angle++;
    if(angle > 360){
      angle = 0;
    }
    body.style.background = `rgba(0, 0, 0, 0) linear-gradient(${angle}deg, rgb(7, 87, 16) 0%, rgb(35, 194, 17) 100%) repeat scroll 0% 0% / auto padding-box border-box`
  }, 20);
}



const questions = [
  {
    number: 1,
    question: "Ce tip de masina cautati?",
    type: "checkbox",
    answers: [
      {text: "sedan", image: "images/car icons/sedan.png"},
      {text: "break", image: "images/car icons/break.png"},
      {text: "coupe", image: "images/car icons/coupe.png"},
      {text: "hatchback", image: "images/car icons/hatchback.png"},
      {text: "suv", image: "images/car icons/suv.png"}
    ]
  },
  {
    number: 2,
    question: "Masina noua sau second-hand?",
    type: "checkbox",
    answers: [
      {text: "noua"},
      {text: "second-hand"}
    ]
  },
  {
    number: 3,
    question: "Care este bugetul dumneavoastra?",
    type: "number",
    answers: [
      {min: "5000", max: "150000"},
      {min: "5000", max: "150000"}
    ]
  },
  {
    number: 4,
    question: "Ce motorizare doriti sa aiba masina?",
    type: "checkbox",
    answers: [
      {text: "benzina"},
      {text: "diesel"},
      {text: "hybrid"},
      {text: "electric"}
    ]
  },
  {
    number: 5,
    question: "Anul fabricatiei?",
    type: "number",
    answers: [
      {min: "1900", max: "2023"},
      {min: "1900", max: "2023"}
    ]
  },
  {
    number: 6,
    question: "Ce tip de cutie de viteze?",
    type: "checkbox",
    answers: [
     {text: "automata"}, 
     {text: "manuala"} 
    ]
  },
  {
    number: 7,
    question: "Numarul de kilometri?",
    type: "number",
    answers: [
      {min: "0", max: "500000"},
      {min: "0", max: "500000"}
    ]
    
  },
  {
    number: 8,
    question: "Puterea motorului?",
    type: "number",
    answers: [
      {min: "50", max: "500"},
      {min: "50", max: "500"}
    ]
  },
  {
    number: 9,
    question: "Dimensiunea motorului?",
    type: "number",
    answers: [
      {min: "500", max: "5000"},
      {min: "500", max: "5000"} 
    ]
  },
  {
    number: 10,
    question: "Tara de origine?",
    type: "checkbox",
    answers: [
      {text: "Germania"},
      {text: "Romania"},
      {text: "Korea"},
      {text: "America"},
      {text: "Japonia"},
      {text: "altele"}
    ]
  }
]

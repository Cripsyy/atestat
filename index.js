const text = document.getElementById("main-text");
const quizButton = document.getElementById("main-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const finishButton = document.getElementById("finish-button");
const questionText = document.getElementById("question");
const answersText = document.getElementById("answers");

quizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

let questionIndex = 0;

function startQuiz(){
  quizButton.classList.add("hidden");
  text.classList.add("hidden");
  questionText.classList.remove("hidden");
  answersText.classList.remove("hidden");
  nextButton.classList.remove("hidden");

  nextQuestion();
}

function nextQuestion(){
  if(questionIndex < questions.length){
    questionText.innerText = questions[questionIndex].question;
    answersText.innerHTML = "";
  
    questions[questionIndex].answers.forEach(answer => {
      const input = document.createElement('input');
      input.setAttribute("type", questions[questionIndex].type);

      const image = document.createElement('img');
      if(answer.image){
        image.src = answer.image;
      }
      
      answersText.appendChild(input);
      answersText.appendChild(image);
      
    })
  
    console.log(questions[questionIndex].answers.length);
    questionIndex++;
    console.log(questionIndex);
  }
  
}

function previousQuestion(){

}

const questions = [
  {
    number: 1,
    question: "Ce tip de masina cautati?",
    type: "checkbox",
    answers: [
      {text: "berlina", image: "images/car icons/berlina.png"},
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
    type: "range",
    answers: [
      {text: "5000"},
      {text: "150000"}
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
    type: "range",
    answers: [
      {text: "1900"},
      {text: "2023"}
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
    type: "range",
    answers: [
      {text: "0"},
      {text: "500000"}
    ]
    
  },
  {
    number: 8,
    question: "Puterea motorului?",
    type: "range",
    answers: [
      {text: "50"},
      {text: "500"}
    ]
  },
  {
    number: 9,
    question: "Dimensiunea motorului?",
    type: "range",
    answers: [
      {text: "500"},
      {text: "5000"} 
    ]
  },
  {
    number: 10,
    question: "Tara de origine?",
    type: "checkbox",
    answers: [
      {text: "Germania"},
      {text: "Romania"},
      {text: "Franta"},
      {text: "America"},
      {text: "Japonia"},
      {text: "altele"}
    ]
  }
]

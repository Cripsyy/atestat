const answers = Array.from(document.querySelectorAll("form .answers"));
const form = document.querySelector("form");
const quizButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const finishButton = document.getElementById("finish-button");
const initialDiv = document.getElementById("initial-div");
const mainDiv = document.getElementById("main-div");
const resultDiv = document.getElementById("result-div");
const questionDiv = document.getElementById("question-div");


quizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
finishButton.addEventListener("click", finishQuiz);

function startQuiz(){
  initialDiv.classList.add("hidden");
  questionDiv.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}

function changeQuestion(button){
  let index = 0;
  const active = document.querySelector(".active");
  index = answers.indexOf(active);
  if(index < answers.length){
    if(index >= 0){
      previousButton.classList.remove("hidden");
    }
  }
  answers[index].classList.remove("active");
  if (button === "next") {
    index++;
  } else if (button === "prev") {
    index--;
  }
  answers[index].classList.add("active");

  console.log(index);
  console.log(answers.length - 1 <= index);
  if(index === answers.length - 1){
    nextButton.classList.add("hidden");
    finishButton.classList.remove("hidden");
  }

  if(index <= 0){
    previousButton.classList.add("hidden");
  }
  if(index < answers.length - 1){
    nextButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
  }
}

function nextQuestion(){
  changeQuestion("next");
}

function previousQuestion(){
  changeQuestion("prev");
}

const inputs = [];

function finishQuiz(){
  
  form.querySelectorAll("input").forEach((input) => {
    let { name, value } = input;
    if(input.type === "checkbox"){
      value = input.checked;
      inputs.push({name, value});
    }else{
      inputs.push({ name, value });
    }
  });
  console.log(inputs);
  form.reset();

  mainDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");
}


const cars = [
  {
    number:1,
    name:"Honda Civic",
    type:"hatchback",
    condition:"new",
    price:35000,
    engine:"hybrid",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:184,
    size:1993,
    country:"Japonia",
    picture:"images/cars/honda-civic.jpg",
    answers:0
  },
  {
    number:2,
    name:"Dacia Logan",
    type:"sedan",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2018,
    gearbox:"manuala",
    mileage:240000,
    power:75,
    size:1461,
    country:"Romania",
    picture:"images/cars/dacia-logan.jpg",
    answers:0
  },
  {
    number:3,
    name:"Ford Focus",
    type:"hatchback",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2015,
    gearbox:"manuala",
    mileage:240000,
    power:95,
    size:1498,
    country:"America",
    picture:"images/cars/ford-focus.jpg",
    answers:0
  },
  {
    number:4,
    name:"Volkswagen Golf",
    type:"hatchback",
    condition:"second-hand",
    price:10000,
    engine:"diesel",
    year:2014,
    gearbox:"manuala",
    mileage:150000,
    power:90,
    size:1598,
    country:"Germania",
    picture:"images/cars/volkswagen-golf.jpg",
    answers:0
  },
  {
    number:5,
    name:"Bmw Seria 3",
    type:"break",
    condition:"second-hand",
    price:10000,
    engine:"diesel",
    year:2013,
    gearbox:"automata",
    mileage:200000,
    power:143,
    size:1995,
    country:"Germania",
    picture:"images/cars/bmw-seria-3.jpg",
    answers:0
  },
  {
    number:6,
    name:"Land Rover Range Rover",
    type:"suv",
    condition:"second-hand",
    price:60000,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:120000,
    power:275,
    size:2993,
    country:"altele",
    picture:"images/cars/range-rover.jpg",
    answers:0
  },
  {
    number:7,
    name:"Mazda CX-5",
    type:"suv",
    condition:"second-hand",
    price:25000,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:100000,
    power:184,
    size:2191,
    country:"Japonia",
    picture:"images/cars/mazda-cx-5.jpg",
    answers:0
  },
  {
    number:8,
    name:"Volkswagen Passat",
    type:"break",
    condition:"noua",
    price:43000,
    engine:"diesel",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:200,
    size:1968,
    country:"Germania",
    picture:"images/cars/volkswagen-passat.jpg",
    answers:0
  },
  {
    number:9,
    name:"Fiat Punto",
    type:"hatchback",
    condition:"second-hand",
    price:3500,
    engine:"benzina",
    year:2006,
    gearbox:"manual",
    mileage:170000,
    power:77,
    size:1368,
    country:"altele",
    picture:"images/cars/fiat-punto.jpg",
    answers:0
  },
  {
    number:10,
    name:"Volkswagen Arteon",
    type:"sedan",
    condition:"second-hand",
    price:22500,
    engine:"benzina",
    year:2018,
    gearbox:"manuala",
    mileage:50000,
    power:190,
    size:1984,
    country:"Germania",
    picture:"images/cars/volkswagen-arteon.jpg",
    answers:0
  },
  {
    number:11,
    name:"Mercedes-Benz G-Class",
    type:"suv",
    condition:"second-hand",
    price:125000,
    engine:"benzina",
    year:2019,
    gearbox:"automata",
    mileage:75000,
    power:387,
    size:5461,
    country:"Germania",
    picture:"images/cars/mercedes-g-class.jpg",
    answers:0
  },
  {
    number:12,
    name:"Audi TT",
    type:"coupe",
    condition:"second-hand",
    price:7000,
    engine:"benzina",
    year:2007,
    gearbox:"manuala",
    mileage:452000,
    power:200,
    size:1984,
    country:"Germania",
    picture:"images/cars/audi-tt.jpg",
    answers:0
  },
  {
    number:13,
    name:"Hyundai i30",
    type:"hatchback",
    condition:"second-hand",
    price:17000,
    engine:"benzina",
    year:2022,
    gearbox:"manuala",
    mileage:32000,
    power:120,
    size:998,
    country:"Korea",
    picture:"images/cars/hyundai-i30.jpg",
    answers:0
  },
  {
    number:14,
    name:"Seat Altea",
    type:"break",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2011,
    gearbox:"automata",
    mileage:200000,
    power:105,
    size:1600,
    country:"altele",
    picture:"images/cars/seat-altea.jpg",
    answers:0
  },
  {
    number:15,
    name:"Skoda Kodiaq",
    type:"suv",
    condition:"second-hand",
    price:26000,
    engine:"benzina",
    year:2017,
    gearbox:"automata",
    mileage:140000,
    power:180,
    size:1984,
    country:"altele",
    picture:"images/cars/skoda-kodiaq.jpg",
    answers:0
  },
  {
    number:16,
    name:"Volvo XC 60",
    type:"suv",
    condition:"second-hand",
    price:42000,
    engine:"hibrid",
    year:2019,
    gearbox:"automata",
    mileage:75000,
    power:303,
    size:1969,
    country:"altele",
    picture:"images/cars/volvo-xc60.jpg",
    answers:0
  },
  {
    number:17,
    name:"Toyota Corolla",
    type:"break",
    condition:"second-hand",
    price:19000,
    engine:"hibrid",
    year:2020,
    gearbox:"automata",
    mileage:172000,
    power:98,
    size:1798,
    country:"Japonia",
    picture:"images/cars/toyota-corolla.jpg",
    answers:0
  },
  {
    number:18,
    name:"Ford Kuga",
    type:"suv",
    condition:"second-hand",
    price:25000,
    engine:"hibrid",
    year:2020,
    gearbox:"automata",
    mileage:112000,
    power:225,
    size:2498,
    country:"America",
    picture:"images/cars/ford-kuga.jpg",
    answers:0
  },
  {
    number:19,
    name:"Audi A4",
    type:"sedan",
    condition:"nou",
    price:31500,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:150,
    size:1984,
    country:"Germania",
    picture:"images/cars/audi-a4.jpg",
    answers:0
  },
  {
    number:20,
    name:"Hyundai Bayon",
    type:"suv",
    condition:"nou",
    price:18000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:100,
    size:998,
    country:"Korea",
    picture:"images/cars/hyundai-bayon.jpg",
    answers:0
  },
  {
    number:21,
    name:"Mercedes-Benz CLA",
    type:"coupe",
    condition:"nou",
    price:48000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:163,
    size:1332,
    country:"Germania",
    picture:"images/cars/mercedes-cla.jpg",
    answers:0
  },
  {
    number:22,
    name:"Tesla Model Y",
    type:"suv",
    condition:"nou",
    price:46500,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:514,
    size:null,
    country:"America",
    picture:"images/cars/tesla-model-y.jpg",
    answers:0
  },
  {
    number:23,
    name:"Ford Mustang Mach-E",
    type:"suv",
    condition:"nou",
    price:50000,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:266,
    size:null,
    country:"America",
    picture:"images/cars/ford-mustang-mach-e.jpg",
    answers:0
  },
  {
    number:24,
    name:"Dacia Spring",
    type:"hatchback",
    condition:"second-hand",
    price:11500,
    engine:"electric",
    year:2022,
    gearbox:"automata",
    mileage:8200,
    power:45,
    size:null,
    country:"Romania",
    picture:"images/cars/dacia-spring.jpg",
    answers:0
  },
  {
    number:25,
    name:"Mini Cooper",
    type:"hatchback",
    condition:"second-hand",
    price:24000,
    engine:"electric",
    year:2020,
    gearbox:"automata",
    mileage:28000,
    power:184,
    size:null,
    country:"altele",
    picture:"images/cars/mini-copper.jpg",
    answers:0
  },
]
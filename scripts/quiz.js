const answers = Array.from(document.querySelectorAll("form .answers"));
const form = document.querySelector("form");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const finishButton = document.getElementById("finish-button");
const initialDiv = document.getElementById("initial-div");
const mainDiv = document.getElementById("main-div");
const resultDiv = document.getElementById("result-div");
const questionDiv = document.getElementById("question-div");

startButton.addEventListener("click", startQuiz);
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
  answers[index].classList.remove("active");
  if (button === "next") {
    index++;
  } else if (button === "prev") {
    index--;
  }
  answers[index].classList.add("active");

  //make previous button appear from the second option
  if(index >= 0){
    previousButton.classList.remove("hidden");
  }
  //make finish button appear at the last question
  if(index === answers.length - 1){
    nextButton.classList.add("hidden");
    finishButton.classList.remove("hidden");
  }
  //make previous button disappear from the second option
  if(index <= 0){
    previousButton.classList.add("hidden");
  }
  //make next button appear if you return from the last question
  if(index < answers.length - 1){
    nextButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
  }
}

function nextQuestion() {

  let firstInput, secondInput;

  let isMinInput, isMaxInput;

  form.querySelectorAll(".active input").forEach((input) => {
  
    isMinInput = input.name.includes("min");
    isMaxInput = input.name.includes("max");

    if(input.type === "number"){
      if (isMinInput) {
        firstInput = input;
      } else if (isMaxInput) {
        secondInput = input;
      }
    }
  });

  if (firstInput && secondInput){
    if(Number(firstInput.value) > Number(secondInput.value)){
      firstInput.value = "";
      secondInput.value = "";
      alert("Valori indisponibile");
      return;
    }

  }
  
  changeQuestion("next");
}


function previousQuestion(){
  changeQuestion("prev");
}

function finishQuiz(){
  
  form.querySelectorAll("input").forEach((input) => {
    let { name, value } = input;
    if(input.type === "checkbox"){
      value = input.checked;
      inputs.push({name, value});
    }else if(input.type === "number"){
      const minInput = input.name.includes("min");
      const maxInput = input.name.includes("max");
      if(minInput){
        if(Number(value) < Number(input.min) || Number(value) > Number(input.max) ||value === ""){
          value = input.min;
        }
      }
      if(maxInput){
        if(Number(value) < Number(input.min) || Number(value) > Number(input.max) ||value === ""){
          value = input.max;
        }
      }
      inputs.push({ name, value });
    }
  });
  form.reset();
  console.log(inputs);

  showResult();
}

const inputs = [];

function calculateResults(bestResults = []){
  let carsIndex, inputsIndex;
  let minValue, maxValue;
  for(inputsIndex = 0; inputsIndex < inputs.length; inputsIndex++){ 
    for(carsIndex = 0; carsIndex < cars.length; carsIndex++){
      if(inputs[inputsIndex].value === true){
        if(cars[carsIndex].type === inputs[inputsIndex].name){
          cars[carsIndex].points += 2;
        }
        if(cars[carsIndex].condition === inputs[inputsIndex].name){
          cars[carsIndex].points += 2;
        }
        if(cars[carsIndex].engine === inputs[inputsIndex].name){
          cars[carsIndex].points += 2;
        }
        if(cars[carsIndex].gearbox === inputs[inputsIndex].name){
          cars[carsIndex].points += 2;
        }
        if(cars[carsIndex].country === inputs[inputsIndex].name){
          cars[carsIndex].points++;
        }
      }
      if(inputs[inputsIndex].value !== true && inputs[inputsIndex].value !== false){
        if(inputs[inputsIndex].name.includes("min")){
          minValue = inputs[inputsIndex].value;
        }else if(inputs[inputsIndex].name.includes("max")){
          maxValue = inputs[inputsIndex].value;
        }
        if(inputs[inputsIndex].name.includes("price")){
          if(minValue < cars[carsIndex].price < maxValue){
            cars[carsIndex].points += 3;
          }
        }
        if(inputs[inputsIndex].name.includes("year")){
          if(minValue < cars[carsIndex].year < maxValue){
            cars[carsIndex].points += 2;
          }
        }
        if(inputs[inputsIndex].name.includes("mileage")){
          if(minValue < cars[carsIndex].mileage < maxValue){
            cars[carsIndex].points ++;
          }
        }
        if(inputs[inputsIndex].name.includes("power")){
          if(minValue < cars[carsIndex].power < maxValue){
            cars[carsIndex].points ++;
          }
        }
        if(inputs[inputsIndex].name.includes("size")){
          if(minValue < cars[carsIndex].size < maxValue){
            cars[carsIndex].points ++;
          }
        }

      }
      minValue = 0;
      maxValue = 0; 
    }
  }
  cars.sort((a,b) => a.points - b.points);
  for (carsIndex = 0; carsIndex < cars.length; carsIndex++) {
    console.log(cars[carsIndex].number + " " + cars[carsIndex].points);
  }
  for(carsIndex = cars.length - 1; carsIndex >= (cars.length-3); carsIndex--){
    console.log(cars[carsIndex].number + " " + cars[carsIndex].points);
    bestResults.push(cars[carsIndex]);
  }
  return bestResults;
}



function showResult() {
  mainDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const results = document.getElementById("results");

  let bestResults = [];

  calculateResults(bestResults);

  results.querySelectorAll(".result").forEach((result, index) => {
    const image = result.querySelector(".result-photo");
    image.src = bestResults[index].picture;

    const title = result.querySelector(".title");
    title.innerText = bestResults[index].name;

    const specs = result.querySelectorAll(".specs-text");
    
    Object.keys(bestResults[index]).slice(2, -2).forEach((property, specIndex) => {
      specs[specIndex].innerText += " " + bestResults[index][property];
    });
  });
}

const cars = [
  {
    number:1,
    name:"Honda Civic",
    type:"hatchback",
    condition:"noua",
    price:35000,
    engine:"hibrid",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:184,
    size:1993,
    country:"Japonia",
    picture:"images/cars/honda-civic.jpg",
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
  },
  {
    number:9,
    name:"Fiat Punto",
    type:"hatchback",
    condition:"second-hand",
    price:3500,
    engine:"benzina",
    year:2006,
    gearbox:"manuala",
    mileage:170000,
    power:77,
    size:1368,
    country:"altele",
    picture:"images/cars/fiat-punto.jpg",
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
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
    points:0
  },
  {
    number:19,
    name:"Audi A4",
    type:"sedan",
    condition:"noua",
    price:31500,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:150,
    size:1984,
    country:"Germania",
    picture:"images/cars/audi-a4.jpg",
    points:0
  },
  {
    number:20,
    name:"Hyundai Bayon",
    type:"suv",
    condition:"noua",
    price:18000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:100,
    size:998,
    country:"Korea",
    picture:"images/cars/hyundai-bayon.jpg",
    points:0
  },
  {
    number:21,
    name:"Mercedes-Benz CLA",
    type:"coupe",
    condition:"noua",
    price:48000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:163,
    size:1332,
    country:"Germania",
    picture:"images/cars/mercedes-cla.jpg",
    points:0
  },
  {
    number:22,
    name:"Tesla Model Y",
    type:"suv",
    condition:"noua",
    price:46500,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:514,
    size:null,
    country:"America",
    picture:"images/cars/tesla-model-y.jpg",
    points:0
  },
  {
    number:23,
    name:"Ford Mustang Mach-E",
    type:"suv",
    condition:"noua",
    price:50000,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:266,
    size:null,
    country:"America",
    picture:"images/cars/ford-mustang-mach-e.jpg",
    points:0
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
    points:0
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
    points:0
  },
  {
    number:26,
    name:"Subaru BRZ",
    type:"coupe",
    condition:"second-hand",
    price:22500,
    engine:"benzina",
    year:2017,
    gearbox:"manuala",
    mileage:50000,
    power:200,
    size:1998,
    country:"Japonia",
    picture:"images/cars/subaru-brz.jpg",
    points:0
  },
  {
    number:27,
    name:"BMW M2",
    type:"coupe",
    condition:"noua",
    price:63000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:460,
    size:2993,
    country:"Germania",
    picture:"images/cars/bmw-m2.jpg",
    points:0
  },
  {
    number:28,
    name:"Toyota Supra",
    type:"coupe",
    condition:"second-hand",
    price:50000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:19000,
    power:340,
    size:2998,
    country:"Japonia",
    picture:"images/cars/toyota-supra.jpg",
    points:0
  },
  {
    number:29,
    name:"Porsche Cayman",
    type:"coupe",
    condition:"second-hand",
    price:30000,
    engine:"benzina",
    year:2014,
    gearbox:"automata",
    mileage:50000,
    power:275,
    size:2706,
    country:"Germania",
    picture:"images/cars/porsche-cayman.jpg",
    points:0
  },
  {
    number:30,
    name:"Peugeout RCZ",
    type:"coupe",
    condition:"second-hand",
    price:10000,
    engine:"benzina",
    year:2011,
    gearbox:"manuala",
    mileage:137000,
    power:200,
    size:1598,
    country:"altele",
    picture:"images/cars/peugeout-rcz.jpg",
    points:0
  },
  {
    number:31,
    name:"Peugeout 508",
    type:"break",
    condition:"second-hand",
    price:10500,
    engine:"hibrid",
    year:2014,
    gearbox:"automata",
    mileage:195000,
    power:163,
    size:1997,
    country:"altele",
    picture:"images/cars/peugeout-508.jpg",
    points:0
  },
  {
    number:32,
    name:"Skoda Fabia",
    type:"break",
    condition:"second-hand",
    price:4200,
    engine:"diesel",
    year:2012,
    gearbox:"manuala",
    mileage:227000,
    power:75,
    size:1199,
    country:"altele",
    picture:"images/cars/skoda-fabia.jpg",
    points:0
  },
  {
    number:33,
    name:"Ford Focus",
    type:"break",
    condition:"noua",
    price:21000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:125,
    size:999,
    country:"America",
    picture:"images/cars/ford-focus-break.jpg",
    points:0
  },
  {
    number:34,
    name:"Chevrolet Malibu",
    type:"sedan",
    condition:"second-hand",
    price:7500,
    engine:"diesel",
    year:2012,
    gearbox:"automata",
    mileage:180000,
    power:160,
    size:1956,
    country:"America",
    picture:"images/cars/chevrolet-malibu.jpg",
    points:0
  },
  {
    number:35,
    name:"Mercedes-Benz CLK",
    type:"coupe",
    condition:"second-hand",
    price:4500,
    engine:"benzina",
    year:2000,
    gearbox:"automata",
    mileage:175000,
    power:137,
    size:1998,
    country:"Germania",
    picture:"images/cars/mercedes-clk.jpg",
    points:0
  },
  {
    number:36,
    name:"Dacia 1300",
    type:"sedan",
    condition:"second-hand",
    price:3700,
    engine:"benzina",
    year:1977,
    gearbox:"manuala",
    mileage:9200,
    power:54,
    size:1300,
    country:"Romania",
    picture:"images/cars/dacia-1300.jpg",
    points:0
  },
  {
    number:37,
    name:"Mitsubishi 3000 GT",
    type:"coupe",
    condition:"second-hand",
    price:13500,
    engine:"benzina",
    year:1997,
    gearbox:"manuala",
    mileage:110000,
    power:286,
    size:2972,
    country:"Japonia",
    picture:"images/cars/mitsubishi-3000.jpg",
    points:0
  },
  {
    number:38,
    name:"Audi A3",
    type:"sedan",
    condition:"second-hand",
    price:28500,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:72000,
    power:184,
    size:1968,
    country:"Germania",
    picture:"images/cars/audi-a3.jpg",
    points:0
  },
  {
    number:39,
    name:"Opel Corsa e",
    type:"hatchback",
    condition:"noua",
    price:21000,
    engine:"electric",
    year:2022,
    gearbox:"automata",
    mileage:0,
    power:136,
    size:null,
    country:"Germania",
    picture:"images/cars/opel-corsa-e.jpg",
    points:0
  },
  {
    number:40,
    name:"Kia Sportage",
    type:"suv",
    condition:"second-hand",
    price:10000,
    engine:"benzina",
    year:2014,
    gearbox:"manuala",
    mileage:95000,
    power:135,
    size:1591,
    country:"Korea",
    picture:"images/cars/kia-sportage.jpg",
    points:0
  },
]

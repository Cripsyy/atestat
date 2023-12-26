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
        if(value === ""){
          value = input.min;
        }
      }
      if(maxInput){
        if(value === ""){
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
  otherCountries = ["Korea", "Italia", "Anglia", "Spania", "Cehia", "Suedia"];
  for(const input of inputs){ 
    for(const car of cars){
      if(input.value === true){
        if(car.type === input.name){
          car.points += 5;
        }else if(car.condition === input.name || car.engine === input.name || car.gearbox === input.name){
          car.points += 2;
        }else if(car.country === input.name || otherCountries.includes(car.country)){
          car.points++;
        }
      }else if(input.value !== true && input.value !== false){
        let minValue = input.name.includes("min") ? input.value : 0;
        let maxValue = input.name.includes("max") ? input.value : 0;
        
        switch (true) {
          case input.name.includes("price") && minValue <= car.price <= maxValue:
            car.points += 3;
            break;
          case input.name.includes("year") && minValue <= car.year <= maxValue:
            car.points += 3;
            break;
          case input.name.includes("mileage") && minValue <= car.mileage <= maxValue:
            car.points++;
            break;
          case input.name.includes("power") && minValue <= car.power <= maxValue:
            car.points++;
            break;
          case input.name.includes("size") && minValue <= car.size <= maxValue:
            car.points++;
            break;
        }
      }
    }
  }
  cars.sort((a,b) => a.points - b.points);
  for (let carsIndex = 0; carsIndex < cars.length; carsIndex++) {
    console.log(cars[carsIndex].number + " " + cars[carsIndex].points);
  }
  for(let carsIndex = cars.length - 1; carsIndex >= (cars.length-3); carsIndex--){
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










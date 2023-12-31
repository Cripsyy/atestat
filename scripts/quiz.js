const answers = Array.from(document.querySelectorAll("form .answers"));
const form = document.querySelector("form");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const finishButton = document.getElementById("finish-button");
const allButton = document.getElementById("all-button");
const initialDiv = document.getElementById("initial-div");
const mainDiv = document.getElementById("main-div");
const resultDiv = document.getElementById("result-div");
const questionDiv = document.getElementById("question-div");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
finishButton.addEventListener("click", finishQuiz);
allButton.addEventListener("click", checkAll);

function startQuiz(){
  initialDiv.classList.add("hidden");
  questionDiv.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  form.querySelectorAll("input").forEach((input) => { 
    input.addEventListener("change", changedValue);
  });
}

function changeQuestion(button){
  const active = document.querySelector(".active");
  let index = answers.indexOf(active);

  answers[index].classList.remove("active");

  if(button === "next") {
    index++;
  }else{
    index--;
  }

  answers[index].classList.add("active");
  allButton.textContent = "ALL";

  form.querySelectorAll(".active input").forEach((input) => { 
    if(input.classList.contains("has-value")){
      allButton.textContent = "CLEAR";
    }
  });
 

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

  let contor = 0;

  form.querySelectorAll(".active input").forEach((input) => {
  
    isMinInput = input.name.includes("min");
    isMaxInput = input.name.includes("max");

    if(input.type === "number"){
      if (isMinInput){
        firstInput = input;
      }else if (isMaxInput){
        secondInput = input;
      }
    }
    if(input.type === "checkbox" && input.checked){
      contor++;
    }
    
  });

  if(!firstInput){
    if(contor === 0){
      alert("Nicio valoare selectata")
      return;
    }
  }
  
  if(firstInput && secondInput){
    if(Number(firstInput.value === "") || Number(secondInput.value === "")){
      alert("Valori indisponibile");
      return;
    }
  }
  
  changeQuestion("next");

}


function previousQuestion(){
  changeQuestion("prev");
}

function checkAll(){

  let contor = 0;

  form.querySelectorAll(".active input").forEach((input) => {
    const minInput = input.name.includes("min");
    const maxInput = input.name.includes("max");

    if(input.type === "checkbox" && allButton.textContent === "ALL"){
      input.checked = true;
      input.classList.add("has-value");
    }else if(input.type === "checkbox" && allButton.textContent === "CLEAR"){
      input.checked = false;
      input.classList.remove("has-value");
    }

    if(input.value === "" && allButton.textContent === "ALL"){
      if(minInput){
        input.value = input.min;
      }
      if(maxInput){
        input.value = input.max;
      }
      input.classList.add("has-value");
    }else if(input.type !== "checkbox" && allButton.textContent === "CLEAR"){
      if(minInput){
        input.value = "";
      }
      if(maxInput){
        input.value = "";
      }
      input.classList.remove("has-value");
    }

    if(input.classList.value === "has-value"){
      contor++;
    }
  });

  if(contor > 0){
    allButton.textContent = "CLEAR";
  }else if(contor === 0){
    allButton.textContent = "ALL";
  }
}

function changedValue(){
  let contor = 0;
  form.querySelectorAll(".active input").forEach((input) => {
    if(input.type === "checkbox" && input.checked === true){
      input.classList.add("has-value");
    }else if(input.type === "checkbox" && input.checked === false){
      input.classList.remove("has-value");
    }
    if(input.type === "number" && input.value !== ""){
      input.classList.add("has-value");
    }else if(input.type === "number" && input.value === ""){
      input.classList.remove("has-value");
    }

    if(input.classList.value === "has-value"){
      contor++;
    }
    if(contor > 0){
      allButton.textContent = "CLEAR";
    }else if(contor === 0){
      allButton.textContent = "ALL";
    }
  });
  
}

function finishQuiz(){
  
  form.querySelectorAll("input").forEach((input) => {
    let { name, value } = input;
    if(input.type === "checkbox"){
      value = input.checked;
      inputs.push({name, value});
    }else if(input.type === "number"){
      inputs.push({ name, value });
    }
  });
  form.reset();
  console.log(inputs);

  showResult();
}

const inputs = [];

function calculateResults(){
  let bestResults = [];
  let otherResults = [];
  const otherCountries = ["Korea", "Italia", "Anglia", "Spania", "Cehia", "Suedia"];
  for(const input of inputs){ 
    for(const car of cars){
      if(input.value === true){
        if(car.type === input.name){
          car.points += 5;
        }else if(car.condition === input.name || car.engine === input.name || car.gearbox === input.name){
          car.points += 2;
        }else if(car.country === input.name){
          car.points++;
        }else if(input.name === "altele"){
          otherCountries.forEach(country =>{
            if(car.country === country){
              car.points++;
            }
          });
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
  for(let carsIndex = cars.length - 1; carsIndex >= (cars.length-6); carsIndex--){
    otherResults.push(cars[carsIndex]);
  }
  return { bestResults, otherResults };
}

function showResult() {
  mainDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const results = document.getElementById("results");

  const { bestResults, otherResults } = calculateResults();

  results.querySelectorAll(".result").forEach((result, index) => {
    const image = result.querySelector(".result-photo");
    image.src = bestResults[index].picture;

    const title = result.querySelector(".title");
    title.textContent = bestResults[index].name;
    
    const price = result.querySelector(".price");
    price.textContent += bestResults[index].price + "€";

    const year = result.querySelector(".year");
    year.textContent += bestResults[index].year;
  });
}

function showMore() {
  const { bestResults, otherResults } = calculateResults();
  const moreResults = document.getElementById("more-results");
  const results = document.getElementById("result-div");
  const button = document.querySelector(".more-button");
  console.log(button.textContent);
  if(button.textContent === "SHOW MORE"){
    results.classList.add("show-more");
    moreResults.classList.remove("hidden");
      moreResults.querySelectorAll(".result").forEach((result, index) => {
        const image = result.querySelector(".result-photo");
        image.src = otherResults[index + 3].picture;
  
        const title = result.querySelector(".title");
        title.textContent = otherResults[index + 3].name;
  
        const price = result.querySelector(".price");
        price.textContent = "Pret: " + otherResults[index + 3].price + `€`;
  
        const year = result.querySelector(".year");
        year.textContent = "An fabricatzie: " + otherResults[index + 3].year;
      });
    button.textContent = "SHOW LESS";
  }else{
    results.classList.remove("show-more");
    moreResults.classList.add("hidden");
    button.textContent = "SHOW MORE";
  }
  
}










function loadContent(brand){
  const carsContainer = document.getElementById("cars-container");
  const filteredCars = cars.filter(car => car.name.toLowerCase().includes(brand.toLowerCase()));

  carsContainer.innerHTML = "";

  if(filteredCars.length > 0){
    filteredCars.forEach((element) => {
      const carDiv = document.createElement("div");
      carDiv.classList.add("car-container");

      const carImage = document.createElement("img");
      carImage.src = element.picture;
      carImage.classList.add("car-image");

      const carName = document.createElement("p");
      carName.innerText = element.name;
      carName.classList.add("car-name");
      let opened = false;
      carName.addEventListener("click", () => {
        if(!opened){
          specsDiv.classList.remove("hidden");
          carDiv.style.height = "600px";
          opened = true;
        }else{
          specsDiv.classList.add("hidden");
          carDiv.style.height = "300px";
          opened = false;
        }
      });

      carDiv.appendChild(carImage);
      carDiv.appendChild(carName);

      const properties = ["Caroserie", "Stare", "Pret", "Motor", "An fabricatie", "Cutie viteze", "Kilometraj", "Putere", "Capacitate", "Tara"];
      const symbol = ["", "", "€", "", "", "", "km", "cp", "cm3", ""]
      const specsDiv = document.createElement("div");
      specsDiv.classList.add("car-specs");
      
      Object.keys(element).slice(2, -2).forEach((property,index) =>{
        const propertyParagraph = document.createElement("p");
        propertyParagraph.classList.add("car-spec");
        propertyParagraph.innerHTML = `${properties[index]}: <span>${element[property]} ${symbol[index]}</span>`;
        specsDiv.appendChild(propertyParagraph);
      });
      specsDiv.classList.add("hidden");
      carDiv.appendChild(specsDiv);
      carsContainer.appendChild(carDiv);
    });
  }
}

function isDetailsOpen(detailsId){
  const detailsElement = document.getElementById(detailsId);
  isOpen = detailsElement.open;
  if(isOpen){
    loadContent(detailsId);
    console.log("ceva");
  }
}

const summaries = document.querySelectorAll("summary");

summaries.forEach((summary) =>{
  summary.addEventListener("click", () =>{
    summaries.forEach((otherSummary) => {
      if(otherSummary !== summary){
        otherSummary.parentElement.removeAttribute("open");
      }
    });
  });
});

gradientChange();

function gradientChange(){
  const body = document.body;
  let percent = 100;
  let increasing = false;

  setInterval(() => {
    if (increasing) {
      percent++;
      if (percent === 100) {
        increasing = false;
      }
    } else {
      percent--;
      if (percent === 0) {
        increasing = true;
      }
    }
    body.style.background = `linear-gradient(180deg, rgb(7, 87, 16) 0%, rgb(35, 194, 17) ${percent}%)`;
  }, 50);
}



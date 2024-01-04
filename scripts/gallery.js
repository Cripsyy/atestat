function loadContent(brand){
  const carsContainer = document.getElementById("cars-container");
  const filteredCars = cars.filter(car => car.name.toLowerCase().includes(brand.toLowerCase()));

  carsContainer.innerHTML = "";

  if(filteredCars.length > 0){
    filteredCars.forEach((element) => {
      const carConstainer = document.createElement("div");
      carConstainer.classList.add("car-container");

      const carImage = document.createElement("img");
      carImage.src = element.picture;
      carImage.classList.add("car-image");

      const carName = document.createElement("p");
      carName.innerText = element.name;
      carName.classList.add("car-name");

      const arrow = document.createElement("img");
      arrow.src = "images/expand-arrow.svg";
      arrow.classList.add("arrow");
      let opened = false;

      arrow.addEventListener("click", () => {
        if(!opened){
          specsDiv.classList.remove("hidden");
          carConstainer.style.height = "650px";
          arrow.style.rotate = "180deg";
          opened = true;
        }else{
          specsDiv.classList.add("hidden");
          carConstainer.style.height = "300px";
          arrow.style.rotate = "0deg";
          opened = false;
        }
      });

      carConstainer.appendChild(carImage);
      carConstainer.appendChild(carName);
      carConstainer.appendChild(arrow);

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
      carConstainer.appendChild(specsDiv);
      carsContainer.appendChild(carConstainer);
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




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

      carDiv.appendChild(carImage);
      carDiv.appendChild(carName);
      
      Object.keys(element).slice(2, -2).forEach((property) =>{
        const propertyParagraph = document.createElement("p");
        propertyParagraph.classList.add("car-spec");
        propertyParagraph.innerText = `${element[property]}`;
        carDiv.appendChild(propertyParagraph);
      });
      carsContainer.appendChild(carDiv);
    });
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
  let angle = 180;

  setInterval(() => {
    angle++;
    if(angle > 360){
      angle = 0;
    }
    body.style.background = `rgba(0, 0, 0, 0) linear-gradient(${angle}deg, rgb(16, 13, 219) 0%, rgb(43, 169, 243) 100%) repeat scroll 0% 0% / auto padding-box border-box`;
  }, 20);
}



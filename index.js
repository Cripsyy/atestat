let jsonData;

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    test();
  })
  .catch(error => {
    console.error('Error loading the file', error);
  });

function test(){
  if(jsonData){
    const question = jsonData[3];
    const number = question.number;
    console.log(number);
  }else{
    console.log("Data is not available yet")
  }
}


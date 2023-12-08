gradientChange();

function gradientChange(){
  const body = document.body;
  let angle = 180;

  setInterval(() => {
    angle++;
    if(angle > 360){
      angle = 0;
    }
    body.style.background = `rgba(0, 0, 0, 0) linear-gradient(${angle}deg, rgb(8, 7, 87) 0%, rgb(41, 38, 236) 100%) repeat scroll 0% 0% / auto padding-box border-box`;
  }, 20);
}

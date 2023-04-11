const btn = document.querySelector(".playButton");
const radioButtons = document.querySelectorAll("input");

const currentColour = localStorage.getItem("playerColour");

setSelected();

function colourButtonClick(){
  console.log("clicked button");
  let selectedColour = 0;
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          selectedColour = radioButton.value;
          break;
      }
  }
  // show the output:
  localStorage.setItem("playerColour", selectedColour);
  //console.log(colourIndex);
  //colourChangeWalkSprite();
}

//to keep your saved option
function setSelected(){
    for (const radioButton of radioButtons) {
        if (radioButton.value==currentColour) {
            radioButton.checked = true;
        } else {
            radioButton.checked = false;
        }
    }
}
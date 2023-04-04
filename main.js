/*
//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const appID = "app";
const headingText = "Develop. Preview. Ship.";
const headingTextIcon = "🚀";
const projectDueDate = "11 April 2023 11:59";

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  // Countdown passed already
  if (difference < 1) {
    return null;
  }

  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }
  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
*/

//reference the elements
let player = document.querySelector(".player");
let ground = document.querySelector(".ground");

//start a timer
let timer1 = setInterval(timer, 10);
//clearInterval(timer);

//to check for height of jump when held
let  playerIsJumping = false;

let height = 0;
let heightSpeed = 1;
let maxHeight = 20;
let jumpSpeed = 4;
let groundHeight = 20;
let playerHeight = 0;
let x=0;
let xSpeed=0.2;
let parabolaNum=5;
let parabolaSpeed=0.3;

let jumpKeyIsDown = false;
let downHasNotBeenPressed = true;
let isNotDecreasing = true;
let currentY = 0;

//when key down
document.addEventListener("keydown",function(event){
  //jump is W, up arrow, left mouse
  //38 is up arrow
  //32 is space
  //87 is W

  if (event.keyCode===32||event.keyCode===38||event.keyCode===87){
    playerUp();
  }
  //40 is down arrow
  //83 is S
  if (event.keyCode===40||event.keyCode===83){
    playerDown();
  }
})
//when key down
document.addEventListener("keyup",function(event){
  //jump is W, up arrow, left mouse
  //38 is up arrow
  //32 is space
  //87 is W

  if (event.keyCode===32||event.keyCode===38||event.keyCode===87){
    jumpKeyIsDown = false;
  }
  //40 is down arrow
  //83 is S
  if (event.keyCode===40||event.keyCode===83){
    //playerDown();
  }
})

/*
//when mouse down
document.addEventListener("mousedown",function(event){
  //0 is left click  
  if (event.button===0){
    playerUp();
  }

  //2 is right click
  if (event.button===2){
    playerDown();
  }
})
*/



function playerUp(){
  //console.log("playerUp");
  //make a countJumpHeight to true
  //if the player is on the ground, then you can jump
  console.log(player.style.bottom);
  if (height==0){
    jumpKeyIsDown = true;
  }
  
  playerIsJumping=true;
  
}

function playerDown(){
  console.log("playerDown");
  //if down, shift the x value over so its decreasing
  //can only press once, so downHasNotBeenPressed is used
  if (playerIsJumping&&downHasNotBeenPressed){
    downHasNotBeenPressed = false;
    //change the parabola equation to a decreasing one from the y that you are at
    currentY=(playerHeight*0.4+groundHeight);
    x=0;
    isNotDecreasing=false;
  }
}

let parabolaEquation = (playerHeight*0.4+groundHeight)+"vh";

function timer(){
  //first thing i do, i check if the key is pressed down
  //i count how long the key is pressed for
  //when key up, or when the key is held for a certain amount of time,
  //the parabola starts

  if (playerIsJumping){
    console.log(jumpKeyIsDown);
    if (height<maxHeight&&jumpKeyIsDown){
      //console.log("hi");
      height+=heightSpeed;
      console.log("height",height);
      //increase parabola speed
      parabolaNum+=parabolaSpeed;
    }
    x+=xSpeed;
    playerHeight=(-1*(x-parabolaNum)**2)+(parabolaNum**2);
  }
  //set player top to playerHeight
  
    if (isNotDecreasing&&playerHeight*0.4+groundHeight>=20){
      //if its about to teleport underneath the floor, set to 20 (ground height)
      if (isNotDecreasing&&playerHeight*0.4+groundHeight<20){
        player.style.bottom=20+"vh";
      } else {
        player.style.bottom=(playerHeight*0.4+groundHeight)+"vh";
      }
    } else if (-1*((3+x)**2)+9+currentY>=20){
      //if its about to teleport underneath the floor, set to 20 (ground height)
      if (-1*((3+x)**2)+9+currentY<20){
        player.style.bottom=20+"vh";
      } else {
        player.style.bottom = (-1*((5+x)**2)+25+currentY)+"vh";
      }
    //console.log(player.style.top);
  } else {
    //if on ground, reset
    //player.style.bottom=20+"vh";
    height=0;
    playerHeight=0;
    playerIsJumping=false;
    parabolaNum=5;
    x=0;
    downHasNotBeenPressed= true;
    isNotDecreasing = true;
    //parabolaEquation = (playerHeight*0.4+groundHeight)+"vh";

  }
  
  
}
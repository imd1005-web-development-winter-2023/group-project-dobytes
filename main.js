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
   countJumpHeight=false;
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

//start a timer
let timer1 = setInterval(timer, 10);
//clearInterval(timer);

//to check for height of jump when held
let countJumpHeight = false;

function playerUp(){
  console.log("playerUp");
  //make a countJumpHeight to true
  countJumpHeight = true;
  
}

function playerDown(){
  console.log("playerDown");
}



let height = 0;
let heightSpeed = 1;
let maxHeight = 100;
let jumpSpeed = 4;
let playerHeight = 0;

function timer(){
  
  //let playerYFromGround = playerRect.top - groundRect.top;

  //console.log("player Y is ",playerYFromGround);

  //console.log("timer is running");

  //first thing i do, i check if the key is pressed down
  //i count how long the key is pressed for
  //when key up, or when the key is held for a certain amount of time,
  //the parabola starts
  
  if (countJumpHeight){
    if (height<10){
      height+=heightSpeed*-1;
      console.log("height",height);
      //move the player up
      playerHeight+=1;
    } else {
      //player parabola


    }
  }
  //set player top to playerHeight
  player.style.top=playerHeight+"vh";
  console.log(player.style.top);
  
}
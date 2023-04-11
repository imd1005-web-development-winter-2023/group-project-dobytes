aura
#3000
whitestar
amogus gaem

AKHIL!!! — Today at 3:37 AM
ඞ
Lenibi — Today at 3:42 AM
Image
AKHIL!!! — Today at 3:45 AM
https://www.youtube.com/watch?v=dJGFfRMGWCg
YouTube
Green screen Tr
Among us kill green Screen (1080p)
Image
Lenibi — Today at 4:19 AM
r = Tan(17 theta) + Cot(17 theta)
AKHIL!!! — Today at 4:19 AM
Math.tan()
Lenibi — Today at 4:24 AM
Image
Lenibi — Today at 4:39 AM
@aura i wasted 2 hours of my life doing something cool
AKHIL!!! — Today at 4:47 AM
\
Image
https://github.com/imd1005-web-development-winter-2023/group-project-dobytes/commits/main
GitHub
Commits · imd1005-web-development-winter-2023/group-project-dobytes
group-project-dobytes created by GitHub Classroom. Contribute to imd1005-web-development-winter-2023/group-project-dobytes development by creating an account on GitHub.
Commits · imd1005-web-development-winter-2023/group-project-dobytes
Lenibi — Today at 4:54 AM
Image
AKHIL!!! — Today at 4:54 AM
LOL
Lenibi — Today at 4:54 AM
my pictures more hd
AKHIL!!!
 pinned 
a message
 to this channel. See all 
pinned messages
.
 — Today at 4:55 AM
Lenibi — Today at 4:55 AM
ok im closing my computer
Lenibi
 pinned 
a message
 to this channel. See all 
pinned messages
.
 — Today at 5:00 AM
Lenibi — Today at 5:05 AM
this videos so hotttttttt
the musics good too
oh my gosh.
AKHIL!!! — Today at 5:06 AM
We r
Lenibi — Today at 5:06 AM
i should make that my visual studio code background
AKHIL!!! — Today at 5:06 AM
Not
Ok
Lenibi — Today at 5:06 AM
i should totally make that my vs code background
i should totally make that my vs code background
i should totally make that my vs code background
i should totally make that my vs code background
AKHIL!!! — Today at 5:06 AM
8m gonna present ur scrren to class if githib doesnt work
Lenibi — Today at 5:06 AM
😭
i should crop it and loop it so i dont have to keep rewinding and pressing the play button
ill do that tomorrow i need sleep
i just rewatched that gif like 30 times
ok i have issues i need sleep
Lenibi — Today at 5:09 AM
issues no pun intended cause github get it ahahahaahaha
im gonna COMMIT suicide
get it ahahhahahahahahhahahha
AKHIL!!! — Today at 5:09 AM
Ok i figured out
How to get
Transparent video
Lenibi — Today at 5:09 AM
😭
ok im closing my computer
aura — Today at 10:10 AM
Shall we work at 10:30
AKHIL!!! — Today at 10:35 AM
Just qokwuo
Woke up
Lenibi — Today at 10:36 AM
Hi
AKHIL!!! — Today at 10:40 AM
Gove me like
10 mins and ill be able to join
aura — Today at 10:57 AM
This is so hard
Lenibi — Today at 10:59 AM
That's what she said
I'm honestly so dead rn I'll call in a few 
AKHIL!!! — Today at 11:13 AM
Power rangers, assemble
aura — Today at 11:14 AM
im ready whenever
AKHIL!!!
 started a call.
 — Today at 11:15 AM
AKHIL!!! — Today at 11:21 AM
// constant for pulling the unordered list from the html file
const highScoreList = document.getElementById("highScoreList");
// constant for reading the local file with all of the stored high score data, returns empty array if there are none
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// innerHTML code for properly displaying the high scores on the page
Expand
message.txt
5 KB
//reference the elements
const player = document.querySelector(".player");
const ground = document.querySelector(".ground");
const playerImage = document.querySelector(".playerImage");
const enemyImage = document.querySelector(".enemyImage");
const enemy = document.querySelector(".enemy");
Expand
message.txt
21 KB
﻿
//reference the elements
const player = document.querySelector(".player");
const ground = document.querySelector(".ground");
const playerImage = document.querySelector(".playerImage");
const enemyImage = document.querySelector(".enemyImage");
const enemy = document.querySelector(".enemy");

const bgVideo = document.querySelector("#myvideo");
//const deathVideo = document.querySelector("#deathvideo");
//const groundVideo = document.querySelector("#groudvideo");

/// THIS LINE IS THE ONE THAT BREAKS EVERYTING
// constant called highScores that keeps all of the highscore data for the users, if there are no high scores, then it returns an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
/// THIS LINE IS THE ONE THAT BREAKS EVERYTING

//get from local storage
let colourIndex=localStorage.getItem("playerColour");

//array of colour sprites
let colourWalkSprites = [
"./sprites/Brown/brownrun.gif", 
"./sprites/LightBlue/lightbluerun.gif",
"./sprites/Pink/pinkrun.gif",
"./sprites/green/greenrun.gif"];

//array of colour sprites
let standingSprites = [
  "./sprites/Brown/AmongUsCrouch2.png", 
  "./sprites/LightBlue/bluecrouch.png",
  "./sprites/Pink/pinkcrouch.png",
  "./sprites/green/greencrouch.png"];

//array of colour sprites
let colourDeadSprites = [
  "./sprites/Brown/AmongUsDead.png",
  "./sprites/LightBlue/AmongUsDead.png",
  "./sprites/Pink/AmongUsDead.png",
  "./sprites/green/AmongUsDead.png"];

//video speeds
let bgSpeed = 1.5;
let groundSpeed = 4 ;

let bgSpeedIncrease = 0.0003;
//let groundSpeedIncrease = 0.0001;
initialize();



function initialize(){
  //set highscore to highest score
  setHighscoreText();
  console.log("colour index",colourIndex);
  //changing player colour
  playerImage.src = standingSprites[colourIndex];

  //stop the videos
  bgVideo.pause();
  //groundvideo.pause();
  //bug where image is in the ground
  playerImage.style.height= 10+"vh";

  //make videos slow
  bgVideo.playbackRate = bgSpeed;
  //groundvideo.playbackRate = groundSpeed;
}
function setHighscoreText(){
  console.log(localStorage.getItem("highScores"));
  let text = "0";
  if (JSON.parse(localStorage.getItem("highScores"))){
    text = JSON.parse(localStorage.getItem("highScores"))[0].Score;
  }
 document.querySelector(".highscoreText").innerHTML="Highscore: "+text;
}

/*
//when a page is loaded
window.onload = (event) => {
  console.log("page is fully loaded");
  //check if its the game.html page
  if ( document.URL.includes("game.html") ) {
    
  }
};
*/



  
//change colour as the game is loaded
//colourChangeWalkSprite()




//start a timer
let timer1;
//clearInterval(timer);
let firstTime = true;

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

let downKeyIsDown = false;

let randomCounter = 0;
let randomCounterSpeed = 1;
let obstacleX = 0;
let obstacleSpeed = 0.3;
let nextObstacleAtCounter = 300;
let speedIncrease = 0.0001;

let randomDistance = 150;
let minDistance = 150;

//score
let score = 0;

let numberOfDeletedObstacles = 0;

let explosionTime = 0;
let explosionIsActive = false;

let alive=false;

let stopTimerAfterExplosionCounter = 0;

let timerNotStarted = true;

let isNotCrouching = true;

let obstaclesRunning = true;

let bounce=false;

let xBackwards = 0;

let shouldBounce=true;

let randomNumber=1;

let hasNotCrouched=true;

let videoShouldPlay = true;

let soundPlayOnceVariable = 0;

let walkSound = new Audio("/sound/walkingmetal.mp3");
walkSound.volume = 0.2;

let ventSound = new Audio("/sound/ventSound.mp3");



let enemyLeft = -15;

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
    downKeyIsDown=true;
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
    firstTime = false;
    jumpKeyIsDown = false;
    
  }
  //40 is down arrow
  //83 is S
  if (event.keyCode===40||event.keyCode===83){
    downKeyIsDown=false;
    //should uncrouch
    if (alive){
      unCrouch();
    }
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

function unCrouch(){
  //should uncrouch
  isNotCrouching = true;
  console.log("uncrouch");
  player.style.height= 10+"vh";
  playerImage.style.height= 10+"vh";

  //change image back to walk
  playerImage.src=colourWalkSprites[colourIndex];
}

function playerUp(){
  if (firstTime){
    //hide the start menu
    document.querySelector(".start").style.display = "none";
    //alive
    alive=true;

    //only start the timer once, to fix going fast at the start bug
    //cause by starting multiple timers because of keydown
    if (timerNotStarted){
      timerNotStarted=false;
      //start the timer
      timer1 = setInterval(timer, 8);
    } 
  } else {
    //console.log("playerUp");
    //make a countJumpHeight to true
    //if the player is on the ground, then you can jump

    //to fix crouching and jumping bug, can only jump if not crouching
    if (isNotCrouching){
      console.log(player.style.bottom);
      if (height==0){
        jumpKeyIsDown = true;
      }
      playerIsJumping=true;
    }
    
  }
}

function playerDown(){
  if (alive){
    console.log("playerDown");
    if (playerIsJumping){
      //if down, shift the x value over so its decreasing
      //can only press once, so downHasNotBeenPressed is used
      if(downHasNotBeenPressed){
        downHasNotBeenPressed = false;
        //change the parabola equation to a decreasing one from the y that you are at
        currentY=(playerHeight*0.4+groundHeight);
        x=0;
        isNotDecreasing=false;
      }
    } else {
      crouch();
    }
  }
}


function crouch(){
  //only crouch if still alive
  //only crouch once, not over and over while the down key is pressed
  if (alive&&isNotCrouching){
    isNotCrouching= false;
    //change the sprite
    playerImage.src = standingSprites[colourIndex];

    //should crouch
    console.log("crouch");
    player.style.height= 5+"vh";
    playerImage.style.height= 5+"vh";

    
  }  
}

//let parabolaEquation = (playerHeight*0.4+groundHeight)+"vh";

function timer(){
  if (videoShouldPlay){
    videoShouldPlay = false;
    //groundvideo.play();
    bgVideo.play();
    walkSound.play();
    //change sprite
    playerImage.src = colourWalkSprites[colourIndex];
    //vent noise
    ventSound.play();
  }

  //play walk sound
  if (playerIsJumping&&soundPlayOnceVariable==0){
    soundPlayOnceVariable=1;
    //stop walk sound
    walkSound.pause();
  }
  if (!playerIsJumping&&soundPlayOnceVariable==1){
    soundPlayOnceVariable=0;
    //play walk sound
    walkSound.play();
  }

  //video speeds
  bgSpeed+=bgSpeedIncrease;
  //groundSpeed+=groundSpeedIncrease;
  bgVideo.playbackRate = bgSpeed;
  //groundvideo.playbackRate = groundSpeed;

  //move enemy to the right
  if (enemyLeft<0){
    console.log("enemyMove=",enemyLeft);
    enemyLeft+=0.03;
    enemy.style.left=enemyLeft+"vh";
  }
  



  //explosion
  //console.log("explostionTime",explosionTime);
  if (explosionIsActive){
    explosionTime+=1;
  }
  if (explosionTime>100){
    //reset
    explosionTime=false;
    explosionIsActive=false;
    //hide the explosion
    document.querySelector(".explosionImage").src="";
  }
  if (alive){
    
    //score
    score+=0.1;
    //update text
    document.querySelector(".scoreText").innerHTML="Score: "+Math.floor(score).toString();

    //first thing i do, i check if the key is pressed down
    //i count how long the key is pressed for
    //when key up, or when the key is held for a certain amount of time,
    //the parabola starts

    if (playerIsJumping&&isNotCrouching){
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
        /*
        //if its about to teleport underneath the floor, set to 20 (ground height)
        if (-1*((3+x)**2)+9+currentY<20){
          player.style.bottom=20+"vh";
          console.log("/////////////////////////////////////////////i down");
          if (downKeyIsDown){
            crouch();
          }
        } else {
          */if (-1*((5+x)**2)+25+currentY<20){
            //if its about to teleport underneath the floor, set to 20 (ground height)
            player.style.bottom=20+"vh";
            console.log("/////////////////////////////////////////////i down");
          } else {
            player.style.bottom = (-1*((5+x)**2)+25+currentY)+"vh";
          }
          
        //}
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

      if (downKeyIsDown){
        crouch();
      }
    }
  }

  if (obstaclesRunning){
    //random obstacles
    //adding to the counter based on the speed
    //counter speed increases over time

    //increasing speed over time
    randomCounterSpeed+=speedIncrease;
    obstacleSpeed+=speedIncrease;

    //movement/spawning
    randomCounter+=randomCounterSpeed;
    obstacleX-=obstacleSpeed;
    //console.log("randomCounter",randomCounter);
    if (randomCounter >= nextObstacleAtCounter){
      //reset counter
      randomCounter=0;
      //choose when next obstacle
      //choose random number in a range, with a minimum distance
      nextObstacleAtCounter = Math.floor(Math.random() * randomDistance) + minDistance;
      //spawn the obstacle
      chooseObstacle();
    }

    //move the obstacles in the list
    for (let i = numberOfDeletedObstacles;i<numberOfObstacles;i++){
      obstaclesXList[i]-=obstacleSpeed;
      obstaclesList[i].style.left=obstaclesXList[i]+"vh";
      //console.log("obstaclesXList[numberOfObstacles]");
      if (obstaclesXList[i]<15){
        //if past the screen, delete
        obstaclesList[i].remove();
        numberOfDeletedObstacles++;
        //numberOfObstacles--;

        //show explosion
        document.querySelector(".explosionImage").src="sprites/explosion.gif";
        //using the timer to stop the explosion gif from looping again
        explosionIsActive=true;

      }
      
      //checking for collisions with player
      //checking x or right
      //console.log("right",obstaclesList[i].getBoundingClientRect().right);
      //console.log("width",obstaclesList[i].getBoundingClientRect().width);
      //console.log("add",obstaclesList[i].getBoundingClientRect().right+obstaclesList[i].getBoundingClientRect().width);
      let obstacleLeft = obstaclesList[i].getBoundingClientRect().left;
      let obstacleTop = obstaclesList[i].getBoundingClientRect().top;
      let obstacleWidth = obstaclesList[i].getBoundingClientRect().width;
      let obstacleHeight = obstaclesList[i].getBoundingClientRect().height;

      let playerLeft = player.getBoundingClientRect().left;
      let playerTop = player.getBoundingClientRect().top;
      let playerWidth = player.getBoundingClientRect().width;
      let playerHeight = player.getBoundingClientRect().height;

      //checking x or right
      if (obstacleLeft+obstacleWidth>playerLeft
        &&obstacleLeft<playerLeft+playerWidth
        //checking y or bottom
        &&obstacleTop+obstacleHeight>playerTop
        &&obstacleTop<playerTop+playerHeight
        ){
          gameOver();
        }
    }
  }


  //timer will stop once the explosion gif ends
  //(this was a small bug that is very rare)
  if (!alive){
    if (hasNotCrouched){
      hasNotCrouched=false;
      unCrouch();
      //play death sound
      //stop walk sound
      walkSound.pause();
      let audio = new Audio("sound/deathSoundEffect.mp3");
      audio.play();
      //hide shadow
      document.querySelector(".shadow").style.display="none";
      
    }
    
    if (stopTimerAfterExplosionCounter==0){
      
      //get the current y to jump starting there
      //the bottom is a number like 20vh, so i converted to a string, removed the
      //vh from the end, and converted back to a number
      currentY=Number(player.style.bottom.toString().slice(0, -2));
      console.log("current",currentY);
      x=0;
    }
    stopTimerAfterExplosionCounter+=1;
    x+=xSpeed;
    console.log(stopTimerAfterExplosionCounter);
    //death animation should play here

    //first part of animation is the hop, i can change the parabola
    //to a short fast one

    //rotating the player
    player.style.transform +="rotate(10deg)";

    //should slowly move backwards
    xBackwards+=0.08;

    //if touching the impostor chasing
    if (xBackwards>25){
      setTimeout(popUp, 500);
      //play the animation video
      
      //todo
      //deathVideo.play();
      //while video is playing:
      

      //hide the explosion
      //reset
      explosionTime=false;
      explosionIsActive=false;
      //hide the explosion
      document.querySelector(".explosionImage").src="";

      //change impostor sprite to dance
      enemyImage.src="sprites/Red/reddance.gif";

      //reset player position and rotation
      player.style.transform ="rotate(0deg)";
      player.style.left=15+"vh";
      player.style.bottom=20+"vh";
      shouldBounce=false;
      //change player sprite
      playerImage.src = colourDeadSprites[colourIndex];
      //change size
      playerImage.style.marginTop = "4vh";
      playerImage.style.height = "7vh";
      playerImage.style.width = "8vh";

      //stop the timer
      clearInterval(timer1);
      //groundvideo.pause();
      bgVideo.pause();
      //popUp();

      

      
    } else {
      //move the player backwards
      player.style.left=35-xBackwards+"vh";
    }
  

    if (bounce){
      //bounce animation

      //absolute of sinx * 1/x gives a bouncing effect
      //i transformed it to match the game better
      //1/x * abs of sin10x
      //console.log("111111111111111111111111111111111111bouncing");
      //console.log("bouncing=",1/x*(Math.abs(Math.sin(10*x))))
      if (shouldBounce){
        player.style.bottom = 200/x*(Math.abs(Math.sin(0.5*x)))+20+"vh";
      }
      


    } else {
      //the hop animation
      if (-1*(((10*x*0.1)-5)**2)+25+20+currentY<=20){
        //if its about to teleport underneath the map
        //teleport to ground coordinate instead
        //player.style.bottom = 20+"vh";
        //reset the x, the first x intercept is at pi/10
        x=Math.PI/0.5;
        //start the bouncing animation, using a new equation
        bounce=true;
      } else {
        //if not, do the hop
        player.style.bottom = -1*(((10*x*0.1)-5)**2)+25+20+currentY+"vh";
      }
    }
    
    

    
    
  }
  /*
  if (stopTimerAfterExplosionCounter>300){
    console.log("stopped the timer");
    clearInterval(timer1);
    //play the video
  }*/

  
}

function chooseObstacle(){
  //5 different obstacles:
  //short box 3/15
  //long box 3/15
  //flying knife 2/15
  //low knife 4/15
  //tall box 3/15
 
  
  
  

  //knives will be slightly faster
  randomNumber = Math.floor(Math.random() * 15) + 1;
  console.log("randomnumber",randomNumber);
  if (randomNumber>=1&&randomNumber<=4){
    //short box (4/15)
    spawnObstacle("obstacle1");
  } else if (randomNumber>=5&&randomNumber<=7){
    //long box (3/15)
    spawnObstacle("obstacle2");
  } else if (randomNumber>=8&&randomNumber<=9){
    //long knife (2/15)
    spawnObstacle("obstacle3");
  } else if (randomNumber>=10&&randomNumber<=12){
    //single knife (3/15)
    spawnObstacle("obstacle4");
  } else {
    //tall box (3/15)
    spawnObstacle("obstacle5");
  }
}

let obstaclesList = [];
let numberOfObstacles = 0;

let obstaclesXList = [];
const main = document.querySelector(".obstaclesSection");
function spawnObstacle(className,speed){
  //main.innerHTML="hi";
  //creating the div
  //console.log(height,width,y,speed,image);
  obstaclesList[numberOfObstacles] = document.createElement("div");
  main.appendChild(obstaclesList[numberOfObstacles]);
  ///giving it the unique values given for each obstacle
  obstaclesList[numberOfObstacles].classList.add(className);
  //obstaclesList[numberOfObstacles].style.image="";

  //obstaclesList[numberOfObstacles].innerHTML="hi";
  obstaclesList[numberOfObstacles].classList.add("test");

  //position
  obstaclesList[numberOfObstacles].style.left=-40+"vh";
  //keeping the x value
  obstaclesXList[numberOfObstacles]=200;

  numberOfObstacles++;
  console.log(obstaclesList);


  /*
  //timer will stop once the explosion gif ends
  //(this was a small bug that is very rare)
  if (!alive){
    stopTimerAfterExplosionCounter+=1;
    console.log(stopTimerAfterExplosionCounter);
    //death animation should play here
    //first part of animation is the hop, i can change the parabola
    //to a short fast one
    
  }
  if (stopTimerAfterExplosionCounter>150){
    clearInterval(timer1);
  }*/
}

function gameOver(){
  console.log("/////////////////////////////////////////////collision");
  alive=false;
  //timer will stop once the explosion gif ends
  
  //show gameover menu
  //document.querySelector(".gameOver").style.display="block";

}

function popUp() {
  // calling saveHighScore at completion of game in order to store the data for use in the leaderboards
  saveHighScore();
  //show the gmaeovermenu
  document.querySelector(".gameOver").style.display="block";
}


//leaderboard

// saving highscore function
function saveHighScore() {
    score=Math.floor(score);

  // asks player for their username in order to store the score with a name
      const username = prompt("Nice Score! Enter your name to be put into the leaderboards: ");
  
  // creates a constant that keeps the player's given name and the score they achieved during that run
      const newScore = {
          Score: score,
          Name: username
      };
  
  // makes sure the data is added
      highScores.push(newScore);
  
  // orders all high scores in descending order
      highScores.sort( (a, b) => b.Score - a.Score)
  
  
  // only keeps the top 6 high scores achieved and if a better one is accomplished, it gets rid of the lowest one
      highScores.splice(5);
  
  // sets the scores to local storage so that they can be used and carried over into the leaderboard page
      localStorage.setItem("highScores", JSON.stringify(highScores));
  
  // a quick check used to ensure the data is saved correctly in console
      console.log(highScores);

      // set the text
      setHighscoreText();
  };

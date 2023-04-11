// constant for pulling the unordered list from the html file
const highScoreList = document.getElementById("highScoreList");
// constant for reading the local file with all of the stored high score data, returns empty array if there are none
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// innerHTML code for properly displaying the high scores on the page
highScoreList.innerHTML =
    highScores.map(newScore => {
        return `<li class="high-score">${newScore.Name} with a score of ${newScore.Score}</li>`;
    }).join("");

// music
    //let play = document.getElementById("play");
    function playMusic() {
      let audio = new Audio("sound/dripsong.mp3");
      audio.play();
      audio.loop = true;
    }
    playMusic();





//crazy effect
let redImage = "/sprites/crewmate.png";
let redArray = [];
let redArray2 = [];
let x=-50;
let x2=-50;
let timerCrazy=setInterval(timer2, 10);
let toggle=1;
clearTimeout(timerCrazy);

function crazyFunction(){
    if (toggle==1){
        //make the among us sprites
        for(let i=0;i<100;i++){
            //snake
            redArray[i]=(document.createElement("img"));
            document.querySelector("body").appendChild(redArray[i]);
            redArray[i].classList.add("red");
            redArray[i].src=redImage;


            //parametric equation
            redArray2[i]=(document.createElement("img"));
            document.querySelector("body").appendChild(redArray2[i]);
            redArray2[i].classList.add("red");
            redArray2[i].src=redImage;
        }
        timerCrazy=setInterval(timer2, 10);
    } else {
        clearTimeout(timerCrazy);
        for(let i=0;i<100;i++){
            redArray[i].remove();
            redArray2[i].remove();
        }
        redArray = [];
        redArray2 = [];
    }
    toggle*=-1;
}
crazy.addEventListener("click", crazyFunction);

function timer2(){
    console.log("hi");
    x+=0.1;
    x2+=0.1;
    for(let i=0;i<100;i++){
        let t=(x+(i*1));
        redArray[i].style.left=i*2+"vh";
        redArray[i].style.top=(        (5)*Math.sin((1/5*t))          )+20+"vh";

        redArray2[i].style.left=20*(   Math.sin(3*t+(Math.PI/4))               )+93+"vh";
        redArray2[i].style.top=20*(  Math.sin(4*(t))               )+56+"vh";
    }
}
    

//Random flying among us

//array of colour sprites
let colourWalkSprites = [
    "./sprites/Brown/brownrun.gif", 
    "./sprites/LightBlue/lightbluerun.gif",
    "./sprites/Pink/pinkrun.gif",
    "./sprites/green/greenrun.gif"];

let spawnCounter = 0;
let randomSpawnRate = 1;

let flyingIndex = 0;
let flyingArray = [];
let xArray = [];
let speedArray=[];
let rotateArray=[];
let rotateSpeedArray = [];
let numOfDeleted = 0;
timer1 = setInterval(timerFunction, 100);
function timerFunction(){
    //console.log(Math.floor(spawnCounter));
    spawnCounter++;
   if (spawnCounter>randomSpawnRate){
    spawnCounter=0;
    //get a new spawnrate
    randomSpawnRate = Math.floor(Math.random() * 4) + 2;
    //console.log("randomSpawnRate",randomSpawnRate);
    //instantiate new among us into array to access later
    flyingArray[flyingIndex]=(document.createElement("img"));
    document.querySelector("body").appendChild(flyingArray[flyingIndex]);
    xArray[flyingIndex]=-10;
    flyingArray[flyingIndex].style.left="-15vh";
    speedArray[flyingIndex]=3;
    rotateArray[flyingIndex]=0;
    rotateSpeedArray[flyingIndex]=(Math.floor(Math.random() * 20) + 8);
    //setting the image
    flyingArray[flyingIndex].src=colourWalkSprites[Math.floor(Math.random() * 4)];   
    //set the size
    let randomSize = Math.floor(Math.random() * 5) + 5;
    flyingArray[flyingIndex].style.height = randomSize.toString()+"vh";
    flyingArray[flyingIndex].style.width = randomSize.toString()+"vh";
    //set the height
    flyingArray[flyingIndex].style.position = "fixed";
    flyingArray[flyingIndex].style.bottom = Math.floor(Math.random() * 90) + 2+"vh";
    //z index
    flyingArray[flyingIndex].style.zIndex = "-2";
    //increase index
    flyingArray[flyingIndex].style.opacity=0.5;
    flyingIndex++;
   }
   
   for(let i=numOfDeleted;i<flyingIndex;i++){
    xArray[i]+=speedArray[i];
    flyingArray[i].style.left=xArray[i]+"vh";
    rotateArray[i]+=rotateSpeedArray[i];
    flyingArray[i].style.transform ="rotate("+rotateArray[i].toString()+"deg)";
    //delete if leaves the screen
    if (xArray[i]>200){
        numOfDeleted++;
        flyingArray[i].remove();
    }
   }
}

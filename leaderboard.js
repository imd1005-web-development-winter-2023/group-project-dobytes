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
    let play = document.getElementById("play");
    function playMusic() {
      let audio = new Audio("sound/dripsong.mp3");
      audio.play()
    }
    play.addEventListener("click", playMusic);




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
    console.log("randomSpawnRate",randomSpawnRate);
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

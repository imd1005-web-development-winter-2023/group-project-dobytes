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
    "./sprites/green/greenrun.gif",
    "/sprites/Red/redrun.gif"];

let spawnCounter = 0;
let randomSpawnRate = 0;

let flyingIndex = 0;
let flyingArray = [];
let xArray = [];
let speedArray=[];
timer1 = setInterval(timerFunction, 10);
function timerFunction(){
    spawnCounter+=0.1;
   if (spawnCounter>randomSpawnRate){
    //get a new spawnrate
    randomSpawnRate = Math.floor(Math.random() * 100) + 50;
    //instantiate new among us into array to access later
    flyingArray.append(document.createElement("img"));
    xArray.append(-15);
    //setting the image
    flyingArray[flyingIndex]=Math.floor(Math.random() * 6);
    //set the size
    let randomSize = Math.floor(Math.random() * 15) + 10;
    flyingArray[flyingIndex].style.height = randomSize+"vh";
    flyingArray[flyingIndex].style.width = randomSize+"vh";
    //increase index
    flyingIndex++;
   }
   for(let i=0;i<flyingIndex;i++){
    xArray[i]+=
    flyingArray[i].style.left=xArray[]
   }

}

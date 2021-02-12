/*Selecting the DOM*/
let playerOne = document.querySelector("#player1");
let playerTwo = document.querySelector("#player2");
let button = document.querySelector('#modalsec');
let clickStart = document.querySelector("#letsgo");
let modalContent = document.querySelector("#modalsec");
let modalBg = document.querySelector("#myModal");
let API_KEY = "20243707-909ee3b566e94a50bc75fcf13";
let gamesRules = document.querySelector("#starpause");
let gameStart = document.querySelector("#gamestart");
let guessCount = document.querySelector("#twenty");
let guessDisplay = document.querySelector("#guessdisplay");




// Set variables

/*Functions & EventHandlers*/

function addCounter(){
    let x = document.querySelector("#twenty").classList.add("thecount");
}


//Fetch API
async function Images(){
    try{
        let getCat = await  fetch(`https://pixabay.com/api/?key=${API_KEY}&category=people&pretty=true`);
        let getData = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}&q=zoo+animals&pretty=true`);
        let catJSON = await getCat.json();
        let vidJSON = await getData.json();

        let imgdata = catJSON;
        let viddata = vidJSON;

        // let newdata = [...catdata, ...imgdata]; //merge APIs

        console.log("videos", viddata.hits[0].videos.tiny.url);

        // console.log(catdata.hits[2].videos.tiny.url)
        console.log("photos", imgdata.hits[2].webformatURL);

        // newdata[1].hits[0].videos.tiny.url

        for(let y=0; y < viddata.length; y++){
            console.log(viddata.hits[y].videos.tiny.url)
        }

        
        for (let i = 0; i < imgdata.length; i++){
            console.log(imgdata.hits[i].webformatURL);
        }
        

    } catch(err){
        console.log(err);
    }
}
Images();



//On page load
function randomImages(){
    let imageContainer = document.querySelector("#myvid");
    let pathToImage = `public/images/img/`;
    let createImg = document.createElement('img');

    for(let i = 1; i < 8; i++){
        let imgChild = imageContainer.appendChild(createImg);
        imgChild.src = `${pathToImage}${[i]}.jpg`;
        imgChild.setAttribute("class", "imageslider");
        // imgChild.src++;
        console.log(imgChild);
    }

}
randomImages();

 //Handle the initial clicks
function start(){
    //button opens up the modal
    clickStart.addEventListener("click", (event)=>{
        console.log("Lets go - just got click");
        modalContent.classList.add("none");
        modalBg.classList.add("modposition");
        button.classList.add("none");
    }, false);
}
start();

function onStart(){
    gameStart.addEventListener("click", ()=>{
        let wordsArr = ["Am I alive", "Am I an animal", "Do I exist alone", "Can I be used", "Do I live in a zoo", "Can you spend me"]
        document.querySelector("#secondbutton").classList.add("green");
        playerOne.textContent = "Your Turn";
        playerTwo.textContent = "Your Computer";
        addCounter();
        gameStart.textContent = "Pause Game";

        for (let i = 0; i < wordsArr.length; i++){
            guessDisplay.textContent = wordsArr[Math.floor(Math.random() * wordsArr.length)];

        }
        
    }, false);
}
onStart();


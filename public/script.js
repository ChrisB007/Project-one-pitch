/*Selecting the DOM*/
let playerOne = document.querySelector("#player1");
let playerTwo = document.querySelector("#player2");
let button = document.querySelector('#modalsec');
let clickStart = document.querySelector("#letsgo");
let modalContent = document.querySelector("#modalsec");
let modalBg = document.querySelector("#myModal");
let API_KEY = "20243707-909ee3b566e94a50bc75fcf13";
let gamesRules = document.querySelector("#starpause");
let guessCount = document.querySelector("#twenty");


// Set variables

guessCount.textContent = 30;



/*Functions & EventHandlers*/

//Fetch API
async function Images(){
    try{
        let getCat = await  fetch(`https://pixabay.com/api/?key=${API_KEY}&category=people&pretty=true`);
        let getData = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}&q=zoo+animals&pretty=true`);
        let catJSON = await getCat.json();
        let imgJSON = await getData.json();

        let catdata = catJSON.hits;
        let imgdata = imgJSON.hits;

        let newdata = [...catdata, ...imgdata]; //merge APIs
        
        for (let i = 0; i < newdata.length; i++){
            let vids = newdata;
            
            console.log(vids[i]);
            // hits[0].videos.tiny.url
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
        gamesRules.textContent = "Start Game";
        playerOne.textContent = "You";
        playerTwo.textContent = "Your Computer";
        document.querySelector("#secondcol").classList.add("green");
    }, false);
}
start();

function gameStart(){
    gamesRules.addEventListener("click", ()=>{
        gamesRules.textContent = "Pause Game";
        let count = 20;
        guessCount.innerHTML = "Thissss";

        let countTime = setTimeout(()=>{
            for(let i = 0; i = count.length; i-- ){

            }
        }, 30000)
    });
}
gameStart();


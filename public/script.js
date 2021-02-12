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
        gamesRules.textContent = "Start Game";
        playerOne.textContent = "You";
        playerTwo.textContent = "Your Computer";
        document.querySelector("#secondcol").classList.add("green");
    }, false);
}
start();

function gameStart(){
    gamesRules.addEventListener("click", ()=>{
        gamesRules.textContent = "Pause Game"; //Change start to pause
        let count = guessCount.textContent; // 
        console.log(`This is ${count}`);

        animateValue(`${count}`, 30, 0, 30000);
    });
}
gameStart();

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


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
let myvidOnclick = document.querySelector("#myvid");
let randomImagesTwo;
// Set variables

/*Functions & EventHandlers*/

function addCounter(){
    let x = document.querySelector("#twenty").classList.add("thecount");
}


//Fetch API
// async function Images(){
//     try{
//         let getCat = await  fetch(`https://pixabay.com/api/?key=${API_KEY}&category=people&pretty=true`);
//         // let getData = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}&q=zoo+animals&pretty=true`);
//         let catJSON = await getCat.json();
//         // let vidJSON = await getData.json();

//         var imgdata = catJSON;
//         randomImagesTwo = imgdata.hits[i].webformatURL;
//         // let viddata = vidJSON;

//         // console.log(imgdata.hits[0].webformatURL);

//         // let newdata = [...catdata, ...imgdata]; //merge APIs

//         // console.log("videos", viddata.hits[0].videos.tiny.url);

//         // console.log(catdata.hits[2].videos.tiny.url)
//         // console.log("photos", imgdata.hits);

//         // newdata[1].hits[0].videos.tiny.url

//         // for(let y=0; y < viddata.length; y++){
//         //     console.log(viddata.hits[y].videos.tiny.url)
//         // }
        
//         for (var i = 0; i < imgdata.length; i++){
//             console.log(imgdata.hits[i].webformatURL);
//             return imgdata.hits[i].webformatURL;
//         }

//     } catch(err){
//         console.log(err);
//     }
// };

//Display images on page load
function randomImages(){
    let pathToImage = `public/images/img/`;
    let createImg = document.createElement('img');
    let yesTags = [["Support", "sit", "seat"], ["garden", "bee", "smell"], ["fast","horse", "drive"], ["oxygen", "green", "field"], ["zoo","mane", "chase"],["cute","cudly","carrot"],["technolog", "information","typing"]]
    let gameTags = [];

    for(var i = 1; i < 8; i++){
        let imgChild = myvidOnclick.appendChild(createImg);
        imgChild.src = `${pathToImage}${[i]}.jpg`;
        imgChild.setAttribute("class", "imageslider");

        gameTags.push(yesTags[Math.floor(Math.random() * yesTags)])

        if(i === "1.jpg"){
            gameTags.push(yesTags[1]);
        } else if (i === "2.jpg"){
            gameTags.push(yesTags[6]);
        } else if (i === "3.jpg"){
            gameTags.push(yesTags[2]);
        } else if (i === "4.jpg"){
            gameTags.push(yesTags[5]);
        } else if (i === "5.jpg"){
            gameTags.push(yesTags[3]);
        } else if (i === "6.jpg"){
            gameTags.push(yesTags[4]);
        } else if (i === "7.jpg"){
            gameTags.push(yesTags[0]);
        } else{
            "There is no option"
        }
    }
}

function clues(){
    playerTwo.addEventListener("click", ()=>{
        if(playerTwo.textContent === "Clues"){
            let tagDiv = document.createElement("div");
            tagDiv.classList.add("tags");
            button.textContent = tagDiv;
        }
    });
}

randomImages();

 //Handle  other initial clicks
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
 

// Starting the game
function onStart(){
    gameStart.addEventListener("click", ()=>{
        let wordsArr = ["Support", "Sit", "Rest", "Relax", "Furniture", "Seat"]
        document.querySelector("#secondbutton").classList.add("green");
        playerOne.textContent = "This is your turn";
        playerTwo.textContent = "Computer";
        // randomImages();
        addCounter();
        // clues()
        gameStart.textContent = "Next Clue";
        myvidOnclick.classList.add("clickme");

        for (let i = 0; i < wordsArr.length; i++){
            guessDisplay.textContent = `Clue: ${wordsArr[Math.floor(Math.random() * wordsArr.length)]}`
        };

        // Loop over the API to display image(s)
    }, false);
}
onStart();

//Adding winning blocks

// function createBlocks(){
//     document.createElement('div');

// }
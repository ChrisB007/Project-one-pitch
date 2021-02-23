/*Selecting the DOM*/
let playerOne = document.querySelector("#player1");
let playerTwo = document.querySelector("#player2");
let button = document.querySelector('#modalsec');
let clickStart = document.querySelector("#letsgo");
let modalContent = document.querySelector("#modalsec");
let modalBg = document.querySelector("#myModal");
let gamesRules = document.querySelector("#starpause");
let gameStart = document.querySelector("#gamestart");
let guessCount = document.querySelector("#twenty");
let guessDisplay = document.querySelector("#guessdisplay");
let myvidOnclick = document.querySelector("#myvid");
let imageDisplay = document.querySelector("#imgdisply");
let yourResponse = document.querySelector("#respondto");
let onSubmit = document.getElementById("guesssubmit");
let randomImagesTwo;

/*Functions & EventHandlers*/

//Counter
function addCounter(){
    let x = document.querySelector("#twenty").classList.add("thecount");
}

//Display images randomly on page load
function randomImages(){
    let pathToImage = `public/images/img/`;
    let createImgDiv = document.createElement('div');
    createImgDiv.setAttribute('class', `pgImage`);
    let images = document.createElement('img');

    // random display
    let rotateimages = [];
    let imageIndex = 0;

    rotateimages[0] = `${pathToImage}1.jpg`;
    rotateimages[1] = `${pathToImage}2.jpg`;
    rotateimages[2] = `${pathToImage}3.jpg`;
    rotateimages[3] = `${pathToImage}4.jpg`;
    rotateimages[4] = `${pathToImage}5.jpg`;
    rotateimages[5] = `${pathToImage}6.jpg`;
    rotateimages[6] = `${pathToImage}7.jpg`;

    imageIndex = Math.floor(Math.random() * rotateimages.length);
    imageDisplay.append(createImgDiv);
    images = rotateimages[imageIndex];

    //adding and styling image
    let imgrotator = document.createElement("img");
    imgrotator.setAttribute('src', `${images}`)
    imgrotator.classList.add("imageslider");
    createImgDiv.append(imgrotator);
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
    // On click
    // -- Start counter
    // -- Change player text content
    // -- Change clues button text content

    gameStart.addEventListener("click", ()=>{
        document.querySelector("#secondbutton").classList.add("green");
        playerOne.textContent = "This is your turn";
        playerTwo.textContent = "Computer";
        addCounter();
        gameStart.textContent = "Next Clue";
        myvidOnclick.classList.add("clickme");

    }, false);
}
onStart();



function clues(){
    // Store array of words that describes image
    // target the images shown
    // if the image src matches the array properties
    // show corresponding value
    let wordsArr = [
        {
            flower : ["spring", "smell", "decorate", "send", "bee"],
            computer : ["tech", "screen", "research", "entertainment"],
            car : ["speed", "transport", "luxury", "engine"],
            rabbit : ["fluff", "carrot", "small", "ears", "fast"],
            tree : ["Oxygen", "Wind", "Vegetation", "nest"],
            lion : ["Zoo", "Predator", "King", "Meat"],
            chair : ["Relax", "Rest", "Sit", "Decorate", "Furniture"]
        }
    ];

    gameStart.addEventListener("click", ()=>{
        // for (let i = 0; i < wordsArr.length; i++){
        //     if( )
        //     // guessDisplay.textContent = `Clue: ${wordsArr[Math.floor(Math.random() * wordsArr.length)]}`
        // };
    })

};
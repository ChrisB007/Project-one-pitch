/*Selecting the DOM*/
let button = document.querySelector('#modalsec');
let replace = document.querySelector("#firstformdiv");
let replace2 = document.querySelector("#secformdiv");
let clickStart = document.querySelector("#letsgo");
let modalContent = document.querySelector("#modalsec");
let modalBg = document.querySelector("#myModal");
let API_KEY = "20243707-909ee3b566e94a50bc75fcf13";



/*Functions & EventHandlers*/

 //Handles the initial clicks
function start(){
    //hides the forms
    replace.classList.add("hideme");
    replace2.classList.add("hideme");

    //button opens up the modal
    clickStart.addEventListener("click", (event)=>{
        console.log("Lets go - just got click");
        modalContent.classList.add("none");
        modalBg.classList.add("modposition");

}, false);
}
start();

async function Images(){
    try{
        let getCat = await  fetch(`https://pixabay.com/api/?key=${API_KEY}&category=people&pretty=true`);
        let getData = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}&q=zoo+animals&pretty=true`);
        let catJSON = await getCat.json();
        let imgJSON = await getData.json();

        let catdata = catJSON.hits;
        let imgdata = imgJSON.hits;

        let newdata = [...catdata, ...imgdata];
        
        for (let i = 0; i < newdata.length; i++){
            let vids = newdata[i];

            
            
            console.log(vids);
            // hits[0].videos.tiny.url
        }

    } catch(err){
        console.log(err);
    }
}
Images();







// function selectPlayer(){

//     var playerSelected = document.getElementsByName("payerchoice");

//     pickingPlayer.addEventListener("click", ()=>{
//         for (let i = 0; i < playerSelected.length; i++){
//             if (playerSelected[i].checked && playerSelected[i].value === "Player One"){
//                 pOneTextBox.textContent = `You are ${playerSelected[i].value}`;
//                 replace.classList.remove("hideme");
//                 radioTwo.disabled = true;
//                 modalDisplay.classList.add("none");
//                 replacement.textContent = "Enter a number. Player with the highest number starts the game.";
//             } else if(playerSelected[i].checked && playerSelected[i].value === "Player Two"){
//                 pTwoTextBox.textContent = `You are ${playerSelected[i].value}`;
//                 replace2.classList.remove("hideme");
//                 // document.querySelector("#first-input").disabled = true;
//                 modalDisplay.classList.add("none");
//                 replacement.textContent = "Enter a number. Player with the highest number starts the game.";
//             }
//         }
//     }, false);
// };



// function calc(){
//     // Target input's value and get values from input on click
//     let firstButton = document.getElementById("button1");
//     let secondButton = document.getElementById("button2");

//     firstButton.addEventListener("click", (e)=>{
//         let firstInput = document.getElementById("first-input").value;
//         if (firstInput != parseInt(firstInput)){
//             alert("Please enter a number");
//         } else{
//             pOneInput = firstInput;
//             compareInput();
//         }
//     }, false);

    

//     secondButton.addEventListener("click", (e)=>{
//         let secondInput = document.getElementById("sec-input").value;
//         if (secondInput != parseInt(secondInput)){
//             alert("Please enter a number");
//         } else{
//             pTwoInput = secondInput;
//             compareInput();
//         }
//     }, false);
    
// }
// calc();


// //Game Logic

// function compareInput(){
//     if (pOneInput && pTwoInput){
//         if (typeof pOneInput !== "undefined" && typeof pTwoInput !== "undefined" ){
//             if (pOneInput === pTwoInput){
//                 replacement.textContent = `This is a tie - [Player One entered: ${pOneInput}] [Player Two entered: ${pTwoInput}]`;
//                 console.log("This is a tie");
//             } else if (pOneInput > pTwoInput){
//                 replacement.textContent = `Player One starts the game - [Player One entered: ${pOneInput}] [Player Two entered: ${pTwoInput}]`;
//                 console.log("Player One starts the game");
//             } else if (pOneInput < pTwoInput){
//                 replacement.textContent = `Player Two starts the game - [Player One entered: ${pOneInput}] [Player Two entered: ${pTwoInput}]`;
//                 console.log("Player Two starts the game");
//             }
//         }
//     } else if (typeof pOneInput !== "undifined" || typeof pTwoInput === "undifined"){
//         replacement.textContent = "Waiting for the other player to enter a number";
//         console.log("Waiting for the other player to enter a number");
//     } else if (typeof pTwoInput !== "undifined" || typeof pOneInput === "undifined"){
//         replacement.textContent = "Waiting for the other player to enter a number";
//         console.log("Waiting for the other player to enter a number");
//     }
// };



// function startButton(){
// // function for the start button
// }
















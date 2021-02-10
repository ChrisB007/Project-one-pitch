/*Selecting the DOM*/
let secondCam = document.querySelector('#peerDiv');
let firstCam = document.querySelector('#myvid');
const players = {};
let button = document.querySelector('#secondcol');
let replace = document.querySelector("#firstformdiv");
let replace2 = document.querySelector("#secformdiv");
let replacement = document.querySelector("#replacediv");
let hidePlayers1 = document.querySelector("#player1");
let hidePlayers2 = document.querySelector("#player2");
let form = document.querySelector("form");
let pOneInput, pTwoInput;


/*Functions & EventHandlers*/

 //Handles the initial clicks
function start(){
    //hide the forms
    replace.classList.add("hideme");
    replace2.classList.add("hideme");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        button.classList.add("hideme");
        replacement.textContent = "Enter a number. Player with the highest number starts the game.";
        hidePlayers1.classList.add("hideme");
        hidePlayers2.classList.add("hideme");
        replace.classList.remove("hideme");
        replace2.classList.remove("hideme");

}, false);
}
start();


function calc(){
    // Target input's value and get values from input on click
    let firstButton = document.getElementById("button1");
    let secondButton = document.getElementById("button2");
    


    firstButton.addEventListener("click", (e)=>{
        let firstInput = document.getElementById("first-input").value;
        if (firstInput != parseInt(firstInput)){
            alert("Please enter a number");
            // if (parseInt(firstInput) < 1 || parseInt(firstInput) > 10){
            //     alert("Please enter a number between 1 and 10");

            // }//check if number is > 10 || < than 1;
        } else{
            pOneInput = firstInput;
            compareInput();
            // console.log(pOneInput);
        }
    });

    

    secondButton.addEventListener("click", (e)=>{
        let secondInput = document.getElementById("sec-input").value;
        if (secondInput != parseInt(secondInput)){
            alert("Please enter a number");
        } else{
            pTwoInput = secondInput;
            compareInput();
            //  console.log(secondInput);
        }
    });
    
}
calc();


//Game Logic

function compareInput(){
    if (pOneInput && pTwoInput){
        if (typeof pOneInput !== "undefined" && typeof pTwoInput !== "undefined" ){
            if (pOneInput === pTwoInput){
                replacement.textContent = `This is a tie - Player One entered: ${pOneInput}, Player Two entered: ${pTwoInput}`;
                console.log("This is a tie");
            } else if (pOneInput > pTwoInput){
                replacement.textContent = `Player One starts the game - Player One entered: ${pOneInput}, Player Two entered: ${pTwoInput}`;
                console.log("Player One starts the game");
            } else if (pOneInput < pTwoInput){
                replacement.textContent = `Player Two starts the game - Player One entered: ${pOneInput}, Player Two entered: ${pTwoInput}`;
                console.log("Player Two starts the game");
            }
        }
    } else if (typeof pOneInput !== "undifined" || typeof pTwoInput === "undifined"){
        replacement.textContent = "Waiting for the other player to enter a number";
        console.log("Waiting for the other player to enter a number");
    } else if (typeof pTwoInput !== "undifined" || typeof pOneInput === "undifined"){
        replacement.textContent = "Waiting for the other player to enter a number";
        console.log("Waiting for the other player to enter a number");
    }
};


// If P1 and P2 does not !== undefined
    // If p1 === p2 console.log tie
    //else if p1 > p2 console.log player 1's turn
    // else if p1 < p2 conssole.log player 2's turn


















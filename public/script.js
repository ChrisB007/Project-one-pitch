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


/*Functions & EventHandlers*/

 //Handles the initial clicks
function start(){
    //hide the forms
    replace.classList.add("hideme");
    replace2.classList.add("hideme");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        button.classList.add("hideme");
        replacement.textContent = "Enter a number between 1 & 10";
        hidePlayers1.classList.add("hideme");
        hidePlayers2.classList.add("hideme");
        replace.classList.remove("hideme");
        replace2.classList.remove("hideme");

}, false);
}
start();


function calc(){
    // Target input's value
    let firstButton = document.getElementById("button1");
    let secondButton = document.getElementById("button2");
    let pOneInput, pTwoInput;

    //Goal is to get values from input
    firstButton.addEventListener("click", (e)=>{
        let firstInput = document.getElementById("first-input").value;
        if (firstInput != parseInt(firstInput)){
            console.log("NAN");
            alert("Please enter a number");
        } else{
            console.log(firstInput);
            pOneInput = firstInput;
        }
    });

    secondButton.addEventListener("click", (e)=>{
        let secondInput = document.getElementById("sec-input").value;
        if (secondInput != parseInt(secondInput)){
            console.log("NAN");
            alert("Please enter a number");
        } else{
            console.log(secondInput);
            pTwoInput = secondInput;
        }
    });

    // Select values from input.

    console.log(pOneInput, pTwoInput);



    // Compare values to see which is higher
    
}
calc();

//Selecting the DOM
let secondCam = document.querySelector('#peerDiv');
let firstCam = document.querySelector('#myvid');

//functions
function camSwitch(){
    if (firstCam && secondCam){
        secondCam = firstCam;
    } else{
        return firstCam;
    }
}




//EventListeners

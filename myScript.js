let currentAudio = null; 




function playAudio(src) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Resets the track
    }
    currentAudio = new Audio(src);
    currentAudio.play();
}



 if (currentAudio) {
    let fadeOut = setInterval(() => {
        if (currentAudio.volume > 0.1) {
            currentAudio.volume -= 0.1;
        } else {
            clearInterval(fadeOut);
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }, 100);
}

function changeProfile() { 
var el = document.querySelector("img");
el.setAttribute("src","Prince3.png");
}



function changeProfile() { 
var el = document.querySelector("img");
el.setAttribute("src","Prince3.png");
}

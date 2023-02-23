list.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;
  var audio = document.getElementById('audio');

  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
};

function playAudio (src) {
    if(window.audio) {
       audio.pause();
    }
    window.audio = new Audio (src);
    window.audio.play();
}




function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
var drums = document.querySelectorAll(".drum").length;

for(var i=0;i<drums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);}

//CLICK EVENTS
function handleClick(){
var button = this.innerHTML;
sound(button);
makeAnimation(button);
}

//KEYBOARD EVENTS
document.addEventListener("keydown",function(event){
sound(event.key);
makeAnimation(event.key);
});


//PLAYING SOUND FOR CHOSEN LETTER
function sound(letter) {
   switch (letter) {
      case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
         break;
      case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
         break;
      case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
         break;
      case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
         break;
      case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
         break;
      case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
         break;
      case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
         break;
      default:
            console.log(letter);
         break;
}}

function makeAnimation(currentKey){
//ADDS PRESSED CLASS
var activeButton = document.querySelector("." +currentKey);
activeButton.classList.add("pressed");
//REMOVES THE CLASS PRESSED
setTimeout(function(){
activeButton.classList.remove("pressed");
},100);
}
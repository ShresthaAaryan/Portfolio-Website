
for (var i=0 ; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var ak = this.innerHTML;
        makeSound(ak);
        but(ak);
    });
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event){
        makeSound(event.key);
        but(event.key);
    });
}

function makeSound(ap){
    switch (ap) {
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
            var tom4 = new Audio("sounds/tom-4.mp3");
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
            var kickBase = new Audio("sounds/kick-bass.mp3");
            kickBase.play();
        break;
        default:
        break;
    }
}

function but(k){
    document.querySelector("." + k).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + k).classList.remove("pressed");
    },100);
}

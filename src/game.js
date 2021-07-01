var buttoncolours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
const nextSequence = () => {
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttoncolours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var sound = new Audio('sounds/' + randomChosenColour);
    sound.play();

}
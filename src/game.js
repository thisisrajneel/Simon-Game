var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click( function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

const nextSequence = () => {
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var sound = new Audio('sounds/' + randomChosenColour);
    sound.play();

}
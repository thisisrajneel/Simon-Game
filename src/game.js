var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var play = false;

$(".btn").click( function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

if(!play) {
    $(document).keypress(nextSequence);
}

function nextSequence () {
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $("#level-title").text("Level " + level);
    level++;
    play = true;
    
}
function playSound (name) {
    var sound = new Audio('sounds/' + name + ".mp3");
    sound.play();
}

function animatePress(currentColour) {
    
    $('#'+currentColour).addClass("pressed");
    setInterval(function () {
    $('#'+currentColour).removeClass("pressed");
    },100);

}
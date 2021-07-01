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
    checkAnswer(userClickedPattern.length-1);
});

if(!play) {
    $(document).keypress(nextSequence);
}

function nextSequence () {
    
    userClickedPattern = [];
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

function animatePress (currentColour) {
    
    $('#'+currentColour).addClass("pressed");
    setInterval(function () {
    $('#'+currentColour).removeClass("pressed");
    },100);

}

function checkAnswer (currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }
    else {
        $("#level-title").text("Game Over!\nPress any key to start again!");
        var over = new Audio("sounds/wrong.mp3");
        over.play();
        $("body").addClass("game-over");
        setInterval(function () {
            $("body").removeClass("game-over");
        }, 200);
        
        startOver();
    }
}

function startOver () {
    level = 0;
    gamePattern = [];
    play = false;
}
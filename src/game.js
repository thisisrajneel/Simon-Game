var buttoncolours = ["red","blue","green","yellow"];
var gamePattern = [];
const nextSequence = () => {
    var randomNumber = Math.floor(Math.random()*4);
}

var randomChosenColour = buttoncolours[randomNumber];
gamePattern.push(randomChosenColour);

setTimeout(() => {
    $("#"+randomChosenColour).fadeOut(100);
    $("#"+randomChosenColour).fadeIn(100);
}, 500);

$("btn").click(() => {
    alert('hello');
});

switch (randomChosenColour) {
    case "red":
        var sound = new Audio('sounds/' + randomChosenColour);
    break;
    
    case "yellow":
        var sound = new Audio('sounds/' + randomChosenColour);
    break;

    case "green":
        var sound = new Audio('sounds/' + randomChosenColour);
    break;

    case "blue":
        var sound = new Audio('sounds/' + randomChosenColour);
    break;

    default:
        var sound = new Audio('sounds/wrong.mp3');
    break;
}
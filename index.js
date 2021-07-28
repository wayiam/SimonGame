var gamePattern = [];
var userClickedPattern = [];
var buttonColors = [ "red","blue", "green","yellow"];

//create a variable to check if game is started 
var started = false;

//to keep track of the level
var level = 0;

//check if user has intiated the game

$(document).keypress(function () {

    if (!started) {
        //change the title if game started
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});


$(".btn").click(function () {
   
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});




function nextSequence() {

    //increasing the level
    level++;

    //updating the level
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push[randomChosenColor];

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);


}





//playing sound

function playSound( name ) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    

} 



function animatePress(currentColor) {

   $("#" + currentColor).addClass("pressed");

   setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    },100);

}
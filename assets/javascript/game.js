var psychicGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables to hold number of wins, loses, guesses left, and letters guessed

// NEW NEWvar userGuess = '';
// var userWins = 1;
// var userLosses = 0;
// var totalGuess = 9;
var userGuess = '';
var wins = 0;
var losses = 0;
var totalGuess = 9;
var compGuess = '';


//var psychicLetter should not appear on final project - shows computer's guess
var psychicLetter = document.getElementById("psychicLetter");

//Array to hold user guesses
var userGuessSoFar = [];

//ATTEMPT2 to display userarray on screen
var displayGuess = document.getElementById("userGuessSoFar")

//ATTEMPT1 to display userarray on screen
// var userGuessSoFarDisplay = document.getElementById[userGuessSoFar];
// var useGuessString = userGuessSoFar.toString();

// NEWNEW
// var displayGuessLeft = document.getElementById("totalGuess");
// var displayWins = document.getElementById("wins");
// var displayLoses = document.getElementById("loses");

//Variables to Hold references to the places in the HTML where we want to display things
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalGuessText = document.getElementById("guesses-text");
//NEWNEW attempt of psychic string
var PsychicString = document.getElementById("psychicstring");


//This funciton selects a random letter from my Psychic array
function getPsychicLetter () {
    var random = Math.floor(Math.random() *(psychicGuess.length-1));
    //Pics random index value from psychicGuess array
    //Writes chosen value to HTML
    psychicLetter.textContent = psychicGuess[random];

    console.log("Computer's Choice: " + psychicGuess[random]);
    return psychicGuess[random];
}

compGuess = getPsychicLetter();



document.onkeyup = function(event) {
    // Determines which key was pressed.
    userGuess = event.key;
    userGuessSoFar.push(userGuess); 

    var guessId = document.getElementById("userGuessSoFar")
guessId.textContent = "Letters Guessed: " + userGuessSoFar + " ";


    for (j=0; j < compGuess.length; j++){

        if(userGuess === compGuess[j]){
            console.log(compGuess[j]);
            alert("You guessed right!")
            //+1 wins
            // displayWins.textContent = "Wins: " +1;
            wins++;
            totalGuess = 9;
            userGuessSoFar = [];
            guessId.textContent = "Letters Guessed: " + userGuessSoFar + " ";
            compGuess = getPsychicLetter();
            //reset the guess counter
            //reset the guess array
        }
        else {
            // console.log(userGuess);
            console.log(userGuessSoFar);
            // displayLoses.textContent = "Loses: " +1;
            // displayGuessLeft.textContent -1;
            // losses++;
            totalGuess--;
        }  

    }

    if(totalGuess === 0){
        losses++;
        totalGuess = 9;
        userGuessSoFar = [];
        guessId.textContent = "Letters Guessed: " + userGuessSoFar + " ";
        compGuess = getPsychicLetter();
        alert("You Lost")
    }

   //Display to screen guesses, wins, loses, guesses left
   winsText.textContent = "wins: " + wins;
   lossesText.textContent = "losses: " + losses;
   totalGuessText.textContent = "guesses left: " + totalGuess;

}; 



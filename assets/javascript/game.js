var psychicGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = '';
var userWins = 0;
var userLosses = 0;
var totalGuesses = 0;
var compGuess = '';


//var psychicLetter should not appear on final project - shows computer's guess
var psychicLetter = document.getElementById("psychicLetter");

var userGuessSoFar = [];
var userGuessSoFarDisplay = document.getElementById(userGuessSoFar[userGuessSoFar]);
var displayGuessLeft = document.getElementById("totalGuesses");
var displayWins = document.getElementById("wins");
var displayLoses = document.getElementById("loses");

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
        
    for (i=0; i < compGuess.length; i++){

        if(userGuess === compGuess[i]){
            console.log(compGuess[i]);
            alert("You guessed right!")
            //+1 wins
            wins += 1;
            //reset the guess counter
            //reset the guess array
        }
        else {
            console.log(userGuess);
            console.log(userGuessSoFar);
            //remove one guess
            totalGuesses -= 1;
            //display incorrect guess
        }  

    }
}
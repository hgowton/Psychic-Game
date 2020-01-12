var psychicGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = '';
var wins = 0; 
var loses = 0;
var totalGuesses = 9;
var compGuess = '';


//var psychicLetter should not appear on final project - shows computer's guess
var psychicLetter = document.getElementById("psychicLetter");

var userGuess = document.getElementById("userGuess");
var totalGuesses = document.getElementById("totalGuesses");
var wins = document.getElementById("wins");
var loses = document.getElementById("loses");


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
    // Determines which key was pressed and adds letter to already guessed field on screen
    userGuess.textContent += event.key + ", ";
    userGuess2 = event.key;
   
    for (i=0; i < compGuess.length; i++){

        if(userGuess2 === compGuess[i]){
            console.log("Yes " + compGuess[i]);
            alert("You guessed right!")
            // wins.textContent = wins + 1;
            var x = 0;
            wins.textContent= x + 1;
        }

        else {
            console.log(userGuess);
            totalGuesses--;
            loses.textContent= 
        }  

    }
}

    console.log(compGuess);
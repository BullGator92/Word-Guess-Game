// array of word options for computer to use
var targetWords = ["Gilligan", "Skipper", "Professor", "Ginger", "Mary Ann", "Thurston Howell III", "Lovey Howell"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//computer picks random choice from the 'targetWords' array
var computerChoice = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log(computerChoice);

// Creating variables to hold the number of wins, losses, and guesses left. They start at 0, 0, and 10, respectively.
var wins = 0;
var guessesLeft = 9;
var guesses = [];

// generate spaces "_" based on the length of the target word, fill the array "spaces" with that number of spaces
var spaces = [];
for (i = 0; i < computerChoice.length; i++) {
    spaces[i] = "_";
    console.log(spaces);
}

// will be used to keep track of how many letters are left to be guessed
var targetWordLength = computerChoice.length;

// capture user letter guesses
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (targetWords.includes(userGuess)) {
        console.log(userGuess);
        guesses.push(userGuess);
    }
}

//Gameplay
// input from player
while (targetWordLength > 0) {
    return(spaces.join(" "));
    console.log(spaces.join(" "));
}



// Display the wins counter, losses counter, # of guesses left, and user's previous guesses.
winsText.textContent = "Wins: " + wins;
guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;
userChoiceText.textContent = "You chose: " + userGuess;

// computer compares the input to letters in target word
// if user guess is in the target word, update the spaces to show where the letter should be
if (userGuess === )
// if user guess is not in the target word, display the guess in the "wrong Guesses" section.
// 
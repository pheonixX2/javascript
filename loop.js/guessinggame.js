let userGuess = parseInt(prompt("Guess the number"));

let numberToguess = 7;

 while (typeof userGuess == "number" && userGuess <= 10 && userGuess >= 1){
    userGuess = parseInt(prompt("Guess the number between 1 and 10"));
    console.log("Enter a number between 1 and 10");
    alert("Enter a number between 1 and 10");

}

if (userGuess == numberToguess){
    console.log("you guessed the number its 7")
}



const randomNum = Math.floor(Math.random() * 100) + 1;

let guess = null;
let attempts = 0;

while (guess !== randomNum) {
    const input = prompt("Guess a number between 1 and 100:");
    guess = Number.parseInt(input);
    attempts++;

    if (guess < randomNum) {
        console.log("Too low, guess again");
    } else if (guess > randomNum) {
        console.log("Too high, guess again");
    } else {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    }
}
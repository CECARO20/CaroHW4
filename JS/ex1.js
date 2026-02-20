const input = prompt("Enter a number between 1 and 100:");

const num = Number.parseInt(input);

if (input === null || input.trim() === "" || isNaN(num) || !Number.isInteger(num) || num < 1 || num > 100) {
    console.log(`Sorry, ${input} is not a valid entry.`);
} else {
    console.log(`Thank you! You entered ${num}, a valid number.`);
}
let num = 55;
let guess;
do {
    guess = prompt("Enter a random number:");
    if (num != guess) {
        console.log("You are wrong.");
    }
} while (num != guess);
console.log("You entered",guess,", it is right!");
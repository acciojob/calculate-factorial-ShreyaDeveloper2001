//your JS code here. If required.
// Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Parse the input string into an integer
const number = parseInt(userInput);

// Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Calculate the factorial
const result = factorial(number);

// Display the result in an alert box
alert(`The factorial of ${number} is ${result}`);


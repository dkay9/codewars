/* Even or Odd */

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) { //if number is divisible by 2 without a remainder return "Even"
      return "Even"; // "Even"
    }
    else { 
      return "Odd" // "Odd"
    }
}
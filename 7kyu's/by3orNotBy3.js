/* By 3, or not by 3? That is the question */

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

function divisibleByThree(str){
    let arr = str.split("").map(x => Number(x)) // Turn str to an array of numbers
    let sum = arr.reduce((a, b) => a + b, 0) // Sum every number in the array
    if (sum % 3 === 0){ // Condition to check if sum of the numbers is divisible by 3
      return true // If divisible by 3 return true
    }else {
      return false // If not divisible by 3 return false
    }
}
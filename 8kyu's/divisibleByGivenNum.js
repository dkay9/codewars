/* Divisible By A Given number */

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0)
}
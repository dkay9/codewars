//Take the Derivative

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0


function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

//The derive funtion above takes in two parameters a coefficient and an exponent
//It returns a string the template literals denoted by backticks (`)
//Inside the template literals ${coefficient * exponent} calculates a new coefficient, by multiplying the original coefficient by the exponent 
//x^ is a fixed part of the string representing the variable and the exponent
//A new exponent is then derived by subtracting 1 from the existing exponent 
//E.g if we're to derive (5, 4) in the function the coefficient would be 5 and the exponent 4, the new coefficient: 5 * 4 = 20. new exponent: 4 - 1 = 3 and the returned string: `20x^3`
//Its also important to note that in the Derivative calculation the power rule in calculus is applied which states that ax^n is a*n*x^(n-1)
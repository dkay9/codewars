/* Sum Of Two Lowest Positive Integers */
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    // sort the array of numbers and the two lowest values in a new array
    let sorted = numbers.sort((a, b) => {
        return a - b
    })
    return sorted[0] + sorted[1] //returning the sum of the two lowest numbers
}
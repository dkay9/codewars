// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.map(a => Number(a)).reduce((a, b) => a + b);
}
// .map() ensures all the array values are numbers
// .reduce() takes two arguments (a,b) that is the accumulator(first value in the array) and the current element and adds them while iterating through the array 
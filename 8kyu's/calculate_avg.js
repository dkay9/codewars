/* Calculate average */

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
function findAverage(array) {
    if(array.length === 0) return 0; //checks if list is empty and returns 0
    return array.reduce((acc, c) => acc + c, 0) / array.length //gets the average num by summing up every number in the array and dividing by the array length
}

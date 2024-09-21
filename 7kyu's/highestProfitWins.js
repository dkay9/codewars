/* Highest Profit Wins */

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
    //initialize min and max value to start from the beginning of the arr
    let min = arr[0]
    let max = arr[0]

    for(let i = 0; i < arr.length; i++){ //looping through the array
        if(arr[i] < min) { //at each iteration if the value is less than current value (min) 
            min = arr[i] //then assign that value to min variable
        }
        if(arr[i] > max){ //and if the value is greater than the current value (max)
            max = arr[i] //assign that value to max variable
        }
    }
    const result = [min, max] //store min and max in a new array
    return result
}
/* Remove duplicates from list */

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
    const uniqueArray = a.filter((value,index,array) => array.indexOf(value) === index)
    return uniqueArray;
}

// .filter() creates a new array uniqueArray and passes on unique elements from the distinct(a) 
// .filter() iterates over every element in the array
// array.indexOf(value) returns the first occurence of value in the array which is its first index
// The condition array.indexOf(value) === index ensures that only the first occurrence of each value passes the filter. If the same value occurs again then it'll have a different index and will be filtered out 
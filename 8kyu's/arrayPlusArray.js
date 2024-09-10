/* Array Plus Array */

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let joinArr = arr1.concat(arr2) // Use .concat() method to join the two arrays
    return joinArr.reduce((acc,c) => acc + c,0) // use .reduce() method to get the sum of the joined array
}
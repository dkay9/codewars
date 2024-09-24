/* Descending Order */

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
function descendingOrder(n){
    let arr = n.toString().split('') //turn array of numbers to string and split
    let descArr = arr.sort((a, b) => b - a) //sorting array to return in descending order
    let newArr = descArr.join('') //join the strings with the join method
    return +newArr // return the arr, the + converts the array to number
}
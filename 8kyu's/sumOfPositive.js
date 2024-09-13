/* Sum Of Positive */

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let newArr = [] // create empty array
    for(let i = 0; i < arr.length; i++) { //iterate through the array of numbers
      if (arr[i] > 0) { 
        newArr.push(arr[i]) // if the current value is greater than 0 then push to new array
      }
    }
    return newArr.reduce((a,b) => a + b,0) //return the sum the new array
}
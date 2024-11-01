//Smallest Value Of An Array

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

function min(arr, toReturn){
    let minVal = Math.min(...arr) // find minimum value in array and store in a variable
    if(toReturn === 'value'){ //if second param of the function is equal to string 'value'
        return minVal //return the min value 
    }if(toReturn === 'index'){ // if second param of the function is equal to string 'index'
        return arr.indexOf(minVal) //return the index of the min value
    }
}

//refactored
const min = (a, r) => {
    let minVal = Math.min(...a)
    return r === 'value' ? minVal : a.indexOf(minVal)  
}

//refactored more
const min = (a, r) => r === 'value' ? Math.min(...a) : a.indexOf(Math.min(...a))
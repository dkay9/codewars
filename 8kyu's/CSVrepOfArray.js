// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

function toCsvText(array) {
    for(let i = 0; i < array.length; i++){
      array[i] = array[i].join(',')
    }
   return array.join('\n')
}

//First I create a function that loops into the array which is a 2D array(array of arrays)
//Each inner array(array[i]) is converted to a string with the .join() where its elements are joined by a comma
//At each loop .join(',') method transforms the inner arrays into a string seperated by commas(,)
//After the loop is complete, the return statement array.join('\n) joins the entire array into a string where
//each inner array's string is seperated by a newline('\n). This means all the elements of the outer array
//into one large string with each inner array on a new line.
/* Get The Mean Of An Array */

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    let sum = 0 //array to push the sum of the marks array
    for(let i = 0; i < marks.length; i++){ //iterating through the marks array
      sum += marks[i] // add the sum of the marks array in the new sum array 
    }
    const average = sum / marks.length // calculation for the mean and storing the result in a variable
    return Math.floor(average) //return the mean rounded to its nearest integer
}
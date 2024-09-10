/* Abbreviate a Two Word Name */

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let nameArr = name.split(" ") // spit the string by the space and store them in an array
    return (nameArr[0][0] + "." + nameArr[1][0]).toUpperCase() // by concatenating, select the name in the 0 index of the nameArr and select the 0 index of that name, do the same for the first index of the nameArr  and Concatenate with a (.) and return the arr in uppercase
}

// Example: nameArr = ['Sam', 'Harris'] 
// in the above array the 0 index is 'Sam' and the first index is 'Harris'
// the 0 index of 'Sam' is 'S' and the 0 index of 'Harris' is 'H'
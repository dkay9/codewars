// Isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str){
    let newStr = str.toLowerCase() // convert string to lower case
    let set = new Set() // create a Set to store unique characters
    for(let char of newStr){ // iterate through each character in the string
        if(set.has(char)){ // if the character is already in the set theres a duplicate
            return false
        }
        set.add(char) //add the character to the set
    }
    return true // if the loop completes without finding a duplicate return true
}
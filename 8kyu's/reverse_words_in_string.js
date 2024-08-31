/* Reverse words in a string */
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
    let word = string.split(" "); //splits the string into an array of words
    let reverseWord = [] // An empty array where the reversed order of words will be stored
    for(let i = (word.length) - 1; i >= 0; i--){ // A for loop used to iterate through the word array from the last element to the first.
      reverseWord.push(word[i]) // Takes each word from the word array starting from the last element and adds it to the reverseWord array 
    }
    return reverseWord.join(" ") // Combines the elements of the reversedWord array into a string, with spaces between the words.  
  }
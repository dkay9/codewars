        // REMOVE FIRST AND LAST CHARACTER

// It's pretty straightforward. Your goal is to create a function that removes the first and 
// last characters of a string. You're given one parameter, the original string. You don't have to
// worry about strings with less than two characters.

//inputs are a single string
//output is going to be the same string without the first and the last characters
//slice the first and last chars by identifying the indexes

function removeChar(str){
   return str.slice(1, str.length -1)
};


// Remove First and Last Character Part Two

// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except 
// the first and the last ones but this time separated by spaces.
// if input or output is empty then return NULL

function array(str){
    console.log(string.split(',').slice(1, -1).join(" ") || null)
}
//In the above function .split(',') splits the str into an array of sub strings using comma(,) as the delimeter
//example if str is ("banna,orange,apple") .split(',') will make to become ["banana", "orange", "apple"]
//then .slice(1, -1) slices the array to include only the elements starting from index 1 up to the second to
//last index i.e not including the last index, .join(" ") joins the element of the sliced array into a single
//string with all the elements of the sliced array seperated by a space.



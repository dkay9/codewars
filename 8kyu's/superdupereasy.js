/* Super Duper Easy */

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if(typeof x === "string"){ // Checks if value is a string 
      return 'Error' // returns "Error" if string
    } else { // checks if number 
      return (x * 50) + 6 // does the maths
    }
}
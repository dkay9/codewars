/* Counting Sheep */

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
    let num = 0 // create new variable to store number of present sheep
    for (let i = 0; i < sheep.length; i++){ // loop through the sheep array
      if(sheep[i] == true) {
        num++ // add every present sheep to the new variable at every iteration
      }
    }
    return num // return the new variable with the total number of sheep available (17)
} 
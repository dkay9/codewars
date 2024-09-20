/* Likes Vs Dislikes */
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
function likeOrDislike(buttons) {
    let state = 'Nothing' // Initial state 
    buttons.forEach(button => { // Loop through each button input
      if(state === button){ // if the current button is the same as the state, reset to "Nothing"
        state = 'Nothing'
      } else { //otherwise change the state to the current button
        state = button
      }
    })
    return state
}
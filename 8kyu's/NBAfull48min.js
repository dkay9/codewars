// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
    if(mpg  === 0){
      return 0
    }
  return Math.round(((ppg/mpg) * 48) * 10) / 10
}

//I create a function that takes in two parameters ppg and mpg
//In the function then first run a condition that checks if mpg is equal to 0. If so it returns 0
//return Math.round(((ppg/mpg) * 48) * 10) / 10; this calculates i.e first divides the ppg by the mpg (ppg/mpg) to get the points per minutes. Then multiplies the points per minute by 48 to predict how many points the player would score in a 48mins game. The result is then multiplied by 10 and also divided by 10 in other to round the number to the nearest tenth as requested in the task description 
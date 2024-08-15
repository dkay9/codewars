// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

function howMuchWater(water, load, clothes){
    if (clothes > 2 * load){
      return 'Too much clothes'
    } else if (clothes < load){
      return 'Not enough clothes'
    } else{
      return +((water) * 1.1 ** (clothes - load)).toFixed(2)
    }
}

//the above function takes in 3 arguments (water, load, clothes)
//in the function we run condition 1 which checks if the amount of clothes exceeds twice the capacity of the load and if it does it returns 'Too much clothes'
//the second condition checks if the amount of clothes is less than the load capacity and if it is, it returns 'Not enough clothes'
// the last and default condition checks if the number of clothes is within a reasonable range(between load and 2 * load) and then calculate the amount of water needed using the formula +((water) * 1.1 ** (clothes - load)) the result is rounded to 2 decimal places using .to Fixed(2)
// .toFixed(2)returns the result as a string so the unary + operator is used to convert it back to a number
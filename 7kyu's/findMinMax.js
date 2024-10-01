/* Find Min And Max */
// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}
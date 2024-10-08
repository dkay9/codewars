/* Find The Missing Number */
// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
    let expectedSum = (100 * (100 + 1)) / 2

    let actualSum = 0
    for(let i = 0; i < nums.length; i++){
        actualSum += nums[i]
    }
    return expectedSum - actualSum
}
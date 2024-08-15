// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    return str.split('').map(el => el + el).join('')
}

//the doubleChar(str) function takes in a string(str) as a single argument
//the .split('') converts the str into an array of its individual characters e.g 'string' would become ['s','t','r','i','n','g']
//the .map(el => el + el) maps over each element(el) of the array created by the .split() and for each element it returns el + el which means returning or doubling that same character. This can also be interpreted as concatenating that same character with itself e.g 's' becomes 's' + 's' which is = 'ss'
//the .join('') method then combines these characters from an array back to one string without any seperator e.g ['ss', 'tt', 'rr', 'ii', 'nn', 'gg'] becomes 'ssttrriinngg'
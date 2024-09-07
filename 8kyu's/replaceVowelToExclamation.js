/* Replace Vowel To Exclamation Mark */

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    //coding and coding....
    //with regex
   //   return s.replace(/[aeiouAEIOU]/g, '!')
    const vowels = 'aeiouAEIOU' //define vowels in both upper and lowercase 
    let result = '' //split the string into an array of characters
    for (let char of s) { //loop through each character
      if(vowels.includes(char)){
        result += '!' //if the character is a vowel replace it with '!'
      } else {
        result += char //if its not vowel keep the character as it is
      }
    }
    return result
}
  
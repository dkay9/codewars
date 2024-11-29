// Changing Letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

let vowel = ['a', 'e', 'i', 'o', 'u']
function swap (string) {
  return string.split('').map(x => vowel.includes(x) ? x.toUpperCase() : x).join('');
}
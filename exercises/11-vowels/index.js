// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// Create count = 0
// Create array of vowels (could be also a string)
// Iterate through all character in lowercase
// If array includes the letter, increment count

// Solution 2
// Create a variable to hold the result of str.match(/[aeiou]/gi)
// This RegEx will check for any character inside [], g makes it not stop
// on the first match and i makes it case insensitive
// 'match' return and array if find any match or null if not
// Final step is to return the length of the array or 0

function vowels(str) {}

module.exports = vowels

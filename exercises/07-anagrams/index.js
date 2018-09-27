// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Notes
// - /[^\w]/g - RegExp to selected all non-alphanumeric with global flag
// - sort() sorts and returns in place an array alphabetically, according to Unicode code points

// Solution 1
// Create helper function to generate a charMap of each string
// Compare if length of keys of each object is the same, or string's length is the same
// If they are, loop through one map comparing to the other

// Solution 2
// Create helper function to clean and sort each string
// Compare both cleaned strings

function anagrams(stringA, stringB) {}
module.exports = anagrams

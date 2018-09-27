// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
// Create empty array to hold capitalized words
// Loop through each word of the string, pushing the capitalized first letter and the rest to the array
// Return joined array

// Solution 2
// Create string called 'result' with first letter capitalized
// For each next character in the string check if character to the left is a space
// If it is, capitalize it and add to 'result', else just add to 'result'

function capitalize(str) {}

module.exports = capitalize

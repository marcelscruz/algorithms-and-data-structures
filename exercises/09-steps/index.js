// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursion tips
// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do some work. Call your function again, making sure the arguments have changed in some fashion

// Solution 1
// Iterate through rows - 0 to n
// Create empty string 'stair'
// Iterate through columns - 0 to n
// If current column <= current row, add '#' to 'stair'
// If not, add ' ' to 'stair'

// Solution 2 - Recursion
// Directions
// If (row === n) then we have hit the end of our problem
// If the 'stair' string has a length === n then we are at the end of a row
// If the length of the 'stair' string is less than or equal to the row number we're working on, we add a '#', otherwise add a space
// -----------
// Instructions
// Add 'row' as second function parameter with default value = 0
// Add 'stair' as third function parameter with default value = ''
// If n === row, end function
// If n = stair.length, log and call again incrementing row
// If stair.length <= row, stair += '#', else stair += ' ', and call function again

function steps(n) {}

module.exports = steps

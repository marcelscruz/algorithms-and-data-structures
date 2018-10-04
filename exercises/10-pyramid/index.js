// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
// Create variable to hold the midpoint - Math.floor((2 * n - 1) / 2)
// Iterate through rows - 0 to n
// Create empty string 'level'
// Iterate through columns - 0 to 2 * n - 1
// If midpoint - row <= column && midpoint + row >= column, add '#' to 'level'
// If not, add ' ' to 'level'
// Logic for decision:
// 2 - 1 <= 1 && 2 + 1 >= 1
// 2 - 1 <= 2 && 2 + 1 >= 2
// 2 - 1 <= 3 && 2 + 1 >= 3

// Solution 2 - Recursion
// Directions
// If (row === n) then we have hit the end of our problem
// If the 'level' string has a length === 2 * n - 1 then we are at the end of a row
// If midpoint - row <= level.length && midpoint + row >= level.length, then add #, otherwise add space
// ------
// Instructions
// Add 'row' as second function parameter with default value = 0
// Add 'level' as third function parameter with default value = ''
// If n === row, end function
// If level.length === 2 * n - 1, log and call again incrementing row
// Create midpoint
// Create add = ''
// If midpoint - row <= level.length && midpoint + row >= level.length, then add '#' to 'add', otherwise add a space, and call function again with current 'level' + 'add'

function pyramid(n) {}

module.exports = pyramid

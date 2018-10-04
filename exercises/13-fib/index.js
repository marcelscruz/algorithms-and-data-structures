// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1 - Complexity: n
// Create array with first two elements [0, 1]
// Loop from the third element to n
// - Create two variables, one for each previous number
// - Push to the array the sum of these numbers
// Return array at index n

// Solution 2 - Recursive - Complexity: 2 ^ n, this is bad, fib(5) 15 func calls, fib(6) 25 func calls
// If n < 2, return n
// If not, return fib(n - 1) + fib(n - 2)
// Check diagram
// Also check tests time to understand complexity
// ---------
// Memoization
// Create memoize function that receives a fn as argument
// Create empty object 'cache'
// Return a function that creates an array of the passed arguments - ...args
// If 'cache' already has the set of args, return it from there
// If not, create 'result' to store the result of passed function applying args
// Store it in the 'cache'
// Return 'result'
// Make sure that 'fib' is a reference to the memoized function

function fib(n) {}

module.exports = fib

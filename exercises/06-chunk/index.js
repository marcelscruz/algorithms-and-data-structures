// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size and return it
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Notes
// Slice method retrieves elements from first index to second index not inclusive

// Solution 1
// Create empty array called chunked
// Loop through array
// Retrieve the last element in chunked and if it doesn't exist or its length is 'size'
// then create new chunk with current element, else add element into last chunk

// Solution 2
// Create empty array called chunked
// Create variable 'index' with value of 0
// While index < array.length, push a slice of length 'size' from 'array' to 'chunked'
// and add 'size' to 'index'

function chunk(array, size) {}

module.exports = chunk

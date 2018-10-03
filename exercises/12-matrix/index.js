// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Solution 1
// Create empty array and loop through 'n' to add empty arrays to it
// Create a counter, starting at 1
// Create 4 variables, one for each start and end row/column
// While (start column <= end column) AND (start row <= end row)
// - Loop from start column to end column (top row)
// - - At results[start_row][i] assing counter variable
// - - Increment counter
// - Increment start row
// - Loop from start row to end row (right column)
// - - At results[i][end_column] assign counter variable
// - - Increment counter
// - Decrement end column
// - ...repeat for other two sides

function matrix(n) {
  const results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  return results
}

module.exports = matrix

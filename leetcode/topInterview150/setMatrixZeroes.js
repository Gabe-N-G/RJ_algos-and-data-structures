/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;

  let firstRowHasZero = false,
    firstColHasZero = false;

  // Step 1: Determine if the first row or first column should be zeroed
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstColHasZero = true;
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRowHasZero = true;
  }

  // Step 2: Use first row & first column as markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark the row
        matrix[0][j] = 0; // Mark the column
      }
    }
  }

  // Step 3: Zero out cells based on markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4: Handle first row & column separately
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

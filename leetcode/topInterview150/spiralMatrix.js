/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  let result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Move Right →
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Shrink top boundary

    // Move Down ↓
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Shrink right boundary

    // Move Left ← (if row remains)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Shrink bottom boundary
    }

    // Move Up ↑ (if column remains)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Shrink left boundary
    }
  }

  return result;
};

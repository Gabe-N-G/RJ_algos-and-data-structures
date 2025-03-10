/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  let m = board.length,
    n = board[0].length;

  // Directions for the 8 possible neighbors (horizontal, vertical, diagonal)
  let directions = [
    [-1, -1], [-1, 0], [-1, 1], 
    [0, -1],         [0, 1], 
    [1, -1], [1, 0], [1, 1]
  ];

  // Step 1: Mark the cells with temporary values
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveNeighbors = 0;

      // Count live neighbors
      for (let [dx, dy] of directions) {
        let ni = i + dx,
          nj = j + dy;
        if (
          ni >= 0 &&
          ni < m &&
          nj >= 0 &&
          nj < n &&
          (board[ni][nj] === 1 || board[ni][nj] === 2)
        ) {
          liveNeighbors++;
        }
      }

      // Apply game rules
      if (board[i][j] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 2; // Live cell → Dead (1 → 2)
        }
      } else if (board[i][j] === 0) {
        if (liveNeighbors === 3) {
          board[i][j] = -1; // Dead cell → Live (0 → -1)
        }
      }
    }
  }

  // Step 2: Convert markers back to 0 and 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) board[i][j] = 0; // Previously live → Now dead
      if (board[i][j] === -1) board[i][j] = 1; // Previously dead → Now live
    }
  }
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  // Edge case: no zigzag needed
  if (numRows === 1 || numRows >= s.length) return s;

  // Create an array to represent each row
  const rows = new Array(numRows).fill("");

  let curRow = 0; // Start at the first row
  let goingDown = false; // Direction flag

  // Traverse the string and place characters in the appropriate row
  for (let char of s) {
    rows[curRow] += char; // Append character to the current row
    // Reverse direction if the top or bottom row is reached
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1; // Move up or down
  }

  // Concatenate all rows to form the final result
  return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
// console.log(convert("A", 1)); // Output: "A"
// console.log(convert("AB", 1)); // Output: "AB"
// console.log(convert("ABC", 2)); // Output: "ACB"

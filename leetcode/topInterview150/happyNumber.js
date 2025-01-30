/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = {}; // Track numbers we've seen to detect cycles

  // Helper function to compute sum of squares of digits
  function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  while (n !== 1) {
    if (seen[n]) return false; // Cycle detected
    seen[n] = true; // Mark number as seen
    n = getSumOfSquares(n); // Update n to next value in sequence
  }

  return true; // If we reach 1, it's a happy number
};

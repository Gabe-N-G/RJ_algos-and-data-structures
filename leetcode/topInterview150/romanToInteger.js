/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  // Step 1: Create a mapping of Roman numerals to integers
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0; // Variable to store the resulting integer
  let n = s.length;

  // Step 2: Traverse the string
  for (let i = 0; i < n; i++) {
    // Step 3: Check if the current numeral is smaller than the next numeral
    if (i < n - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]]; // Subtract its value
    } else {
      total += romanMap[s[i]]; // Add its value
    }
  }

  return total; // Return the final total
};

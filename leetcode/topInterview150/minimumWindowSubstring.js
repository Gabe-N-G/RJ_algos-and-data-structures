/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length < t.length) return ""; // Quick edge case check

  const tFreq = {}; // Frequency map of t
  const windowFreq = {}; // Frequency map of the current window

  // Build tFreq map
  for (const char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let left = 0; // Left pointer
  let right = 0; // Right pointer
  let required = Object.keys(tFreq).length; // Number of unique characters in t to match
  let formed = 0; // Number of unique characters matched in the current window

  let minLength = Infinity; // Track the smallest window length
  let result = ""; // Store the result

  while (right < s.length) {
    // Expand the window by adding s[right]
    const char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    // Check if the current char satisfies the requirement
    if (tFreq[char] && windowFreq[char] === tFreq[char]) {
      formed++;
    }

    // Contract the window from the left if it's valid
    while (formed === required) {
      const windowSize = right - left + 1;

      // Update result if the current window is smaller
      if (windowSize < minLength) {
        minLength = windowSize;
        result = s.substring(left, right + 1);
      }

      // Shrink the window by removing s[left]
      const leftChar = s[left];
      windowFreq[leftChar]--;
      if (tFreq[leftChar] && windowFreq[leftChar] < tFreq[leftChar]) {
        formed--;
      }
      left++;
    }

    // Expand the window
    right++;
  }

  return result;
};

// Test Case 1: Basic example
console.log(minWindow("ADOBECODEBANC", "ABC"));
// Expected Output: "BANC"

// Test Case 2: Single character, exact match
console.log(minWindow("a", "a"));
// Expected Output: "a"

// Test Case 3: Single character, no match
console.log(minWindow("a", "aa"));
// Expected Output: ""

// Test Case 4: Multiple occurrences of characters in t
console.log(minWindow("AAABBBCCC", "ABC"));
// Expected Output: "ABC"

// Test Case 5: Target characters scattered throughout the string
console.log(minWindow("aaflslflsldkfabdflf", "abc"));
// Expected Output: "abdf"

// Test Case 6: Edge case - Empty s
console.log(minWindow("", "ABC"));
// Expected Output: ""

// Test Case 7: Edge case - Empty t
console.log(minWindow("ADOBECODEBANC", ""));
// Expected Output: ""

// Test Case 8: s shorter than t
console.log(minWindow("AB", "ABC"));
// Expected Output: ""

// Test Case 9: Large input with a valid window
const largeS = "A".repeat(50000) + "BC";
const largeT = "ABC";
console.log(minWindow(largeS, largeT));
// Expected Output: "ABC"

// Test Case 10: All characters in t are the same
console.log(minWindow("AAABBC", "AAA"));
// Expected Output: "AAA"

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  const charIndexMap = {}; // Store the last seen index of each character

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If char is a duplicate and within the current window, move the left pointer
    if (char in charIndexMap && charIndexMap[char] >= left) {
      left = charIndexMap[char] + 1;
    }

    // Update the last seen index of the current character
    charIndexMap[char] = right;

    // Calculate the length of the current substring
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
// console.log(lengthOfLongestSubstring("")); // Output: 0
// console.log(lengthOfLongestSubstring("abcdef")); // Output: 6
// console.log(lengthOfLongestSubstring("tmmzuxt")); // Output: 5

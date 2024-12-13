/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let length = 0; // To track the length of the last word
  let i = s.length - 1; // Start from the end of the string

  // Step 1: Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Step 2: Count the characters of the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length; // Return the length of the last word
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  // Step 1: Trim leading and trailing spaces
  // Step 2: Split the string into words and filter empty strings
  const words = s
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  // Step 3: Reverse the array of words
  const reversedWords = words.reverse();

  // Step 4: Join the reversed words with a single space
  return reversedWords.join(" ");
};

console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
// console.log(reverseWords("  hello world  ")); // Output: "world hello"
// console.log(reverseWords("a good   example")); // Output: "example good a"
// console.log(reverseWords("singleword")); // Output: "singleword"
// console.log(reverseWords("   multiple   spaces   ")); // Output: "spaces multiple"

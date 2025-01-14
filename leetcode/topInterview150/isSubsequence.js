/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let i = 0,
    j = 0; // Initialize two pointers

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // Move the pointer for `s` if there is a match
    }
    j++; // Always move the pointer for `t`
  }

  return i === s.length; // Check if all characters of `s` were matched
};

// Basic Test Cases
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

// Edge Cases
// console.log(isSubsequence("", "ahbgdc")); // true (empty string is a subsequence of any string)
// console.log(isSubsequence("abc", "")); // false (non-empty `s` cannot be a subsequence of an empty `t`)
// console.log(isSubsequence("", "")); // true (empty string is a subsequence of an empty string)

// Long `t` with repeated characters
// console.log(isSubsequence("aaaa", "aabbbaa")); // false
// console.log(isSubsequence("abc", "aabbcc")); // true

// Single Character
// console.log(isSubsequence("a", "a")); // true
// console.log(isSubsequence("a", "b")); // false
// console.log(isSubsequence("a", "abc")); // true

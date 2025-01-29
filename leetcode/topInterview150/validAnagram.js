/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Build frequency map for s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease count using t
  for (const char of t) {
    if (!charCount[char]) return false; // Char not found or count already 0
    charCount[char]--;
  }

  return true;
};

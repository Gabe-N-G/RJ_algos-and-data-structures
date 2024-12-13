/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  // Edge case: needle is longer than haystack
  if (m > n) return -1;

  // Traverse the haystack
  for (let i = 0; i <= n - m; i++) {
    // Check if the substring matches the needle
    if (haystack.slice(i, i + m) === needle) {
      return i; // Return the starting index
    }
  }

  return -1; // If no match is found
};

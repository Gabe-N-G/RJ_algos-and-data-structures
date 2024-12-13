/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  // Step 1: Sort the array of strings
  strs.sort();

  // Step 2: Compare the first and last strings
  const first = strs[0];
  const last = strs[strs.length - 1];
  let i = 0;
  let prefix = "";

  // Step 3: Traverse characters until they differ
  while (i < first.length && first[i] === last[i]) {
    prefix += first[i]; // Step 3b: concate the matching letters
    i++;
  }

  // Step 4: Return the common prefix
  return prefix;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  // const pMap = Object.create(null), sMap = Object.create(null); // This line can replace the line below, in order to pass the last test case from Leet Code. "Contructor" is a reservd keyword.
  const pMap = {}, sMap = {};
  const words = s.split(" ");

  // If lengths don't match, return false immediately
  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = words[i];

    // If a mapping already exists, ensure it's consistent
    if (pMap[letter] && pMap[letter] !== word) return false;
    if (sMap[word] && sMap[word] !== letter) return false;

    // Create new mappings
    pMap[letter] = word;
    sMap[word] = letter;
  }

  return true;
};

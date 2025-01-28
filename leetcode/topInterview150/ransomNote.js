/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const magazineMap = {};

  // Build the frequency map for magazine
  for (const letter of magazine) {
    magazineMap[letter] = (magazineMap[letter] || 0) + 1;
  }

  // Check each letter in ransomNote
  for (const letter of ransomNote) {
    if (magazineMap[letter] > 0) {
      magazineMap[letter]--; // Use the letter
    } else {
      return false; // Not enough letters
    }
  }

  return true;
};

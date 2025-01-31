/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const anagramGroups = {};

  for (const word of strs) {
    // Sort the word alphabetically to use as a key
    const sortedWord = word.split("").sort().join("");

    // If the key doesn't exist, initialize an empty array
    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }

    // Add the original word to the corresponding group
    anagramGroups[sortedWord].push(word);
  }

  // Return the grouped anagrams as an array of values
  return Object.values(anagramGroups);
};

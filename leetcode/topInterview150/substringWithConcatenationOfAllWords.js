/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  if (!s || words.length === 0) return [];

  const lengthOfWord = words[0].length;
  // const substringLength = words.length * lengthOfWord; // For clarification only
  const wordsCount = words.length;
  const wordFreq = {}; // Frequency map of words
  const result = [];

  // Build the frequency map of words
  for (let word of words) {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  }

  // Sliding window over all possible starting points
  for (let i = 0; i < lengthOfWord; i++) {
    let left = i; // Left pointer of the window
    let right = i; // Right pointer of the window
    let seen = {}; // Frequency map of words in the current window
    let count = 0; // Number of valid words seen in the window

    while (right + lengthOfWord <= s.length) {
      // Extract the next word in the window
      const word = s.substring(right, right + lengthOfWord);
      right += lengthOfWord;

      if (word in wordFreq) {
        // Update seen map and count
        seen[word] = (seen[word] || 0) + 1;
        count++;

        // If word is overused, shrink the window
        while (seen[word] > wordFreq[word]) {
          const leftWord = s.substring(left, left + lengthOfWord);
          seen[leftWord]--;
          count--;
          left += lengthOfWord;
        }

        // Check if the window contains all words
        if (count === wordsCount) {
          result.push(left);
        }
      } else {
        // Reset window if an invalid word is found
        seen = {};
        count = 0;
        left = right;
      }
    }
  }

  return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9]
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // Output: [6, 9, 12]
console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa", "aa"])); // Output: [0, 1, 2, 3, 4, 5, 6]

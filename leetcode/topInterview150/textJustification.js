/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const result = [];
  let currentLine = [];
  let currentLength = 0;

  for (let word of words) {
    // Check if adding the current word exceeds maxWidth
    if (currentLength + word.length + currentLine.length > maxWidth) {
      // Justify the current line
      for (let i = 0; i < maxWidth - currentLength; i++) {
        currentLine[i % (currentLine.length - 1 || 1)] += " ";
      }
      result.push(currentLine.join(""));
      currentLine = [];
      currentLength = 0;
    }
    // Add the current word to the line
    currentLine.push(word);
    currentLength += word.length;
  }

  // Handle the last line (left-justified)
  result.push(
    currentLine.join(" ") +
      " ".repeat(maxWidth - currentLength - (currentLine.length - 1))
  );

  return result;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
// Output: [
//   "This    is    an",
//   "example  of text",
//   "justification.  "
// ]

console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
// Output: [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
// Output: [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

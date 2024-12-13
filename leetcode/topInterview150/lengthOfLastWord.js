// Approach 1: Split Method (Simple and Readable)
// const lengthOfLastWord = function (s) {
//   const stringArr = s.split(" ");

//   for (let i = stringArr.length - 1; i > 0; i--) {
//     if (stringArr[i] === "") {
//       stringArr.pop();
//       continue;
//     }

//     break;
//   }

//   return stringArr[stringArr.length - 1].length;
// };

// Approach 2: OPTIMAL SOLUTION (Traverse Backwards), using while loop
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let length = 0; // To track the length of the last word
  let i = s.length - 1; // Start from the end of the string

  // Step 1: Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Step 2: Count the characters of the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length; // Return the length of the last word
};

// Approach 2: OPTIMAL SOLUTION (Traverse Backwards), using for loop
// const lengthOfLastWord = function (s) {
//   let count = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " " && count === 0) continue;
//     if (s[i] === " ") break;
//     count++;
//   }

//   return count;
// };

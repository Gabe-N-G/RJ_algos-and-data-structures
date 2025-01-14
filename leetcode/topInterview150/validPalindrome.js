/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // Initialize two pointers
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer to the next alphanumeric character
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Move right pointer to the previous alphanumeric character
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // Move pointers inward
    left++;
    right--;
  }

  return true; // The string is a palindrome
};

// Helper function to check if a character is alphanumeric without RegEx
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  // Check if the character is a digit (0-9), an uppercase letter (A-Z), or a lowercase letter (a-z)
  return (
    (code >= 48 && code <= 57) || // Digits: '0' - '9'
    (code >= 65 && code <= 90) || // Uppercase: 'A' - 'Z'
    (code >= 97 && code <= 122) // Lowercase: 'a' - 'z'
  );
}

// Helper function to check if a character is alphanumeric
// function isAlphanumeric(char) {
//   return /[a-zA-Z0-9]/.test(char);
// }

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
// console.log(isPalindrome("race a car")); // Output: false
// console.log(isPalindrome(" ")); // Output: true
// console.log(isPalindrome("abcba")); // Output: true
// console.log(isPalindrome("abccba")); // Output: true
// console.log(isPalindrome("abcde")); // Output: false

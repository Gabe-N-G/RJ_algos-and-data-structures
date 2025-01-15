/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let left = 0; // Initialize the left pointer
  let right = numbers.length - 1; // Initialize the right pointer

  while (left < right) {
    const sum = numbers[left] + numbers[right]; // Calculate the sum of numbers at left and right pointers

    if (sum === target) {
      // If the target is found, return the 1-indexed positions
      return [left + 1, right + 1];
    }

    // If the sum is less than the target, move the left pointer forward
    // If the sum is greater than the target, move the right pointer backward
    sum < target ? left++ : right--;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
// console.log(twoSum([2, 3, 4], 6)); // Output: [1, 3]
// console.log(twoSum([-1, 0], -1)); // Output: [1, 2]
// console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
// console.log(twoSum([5, 25, 75], 100)); // Output: [2, 3]

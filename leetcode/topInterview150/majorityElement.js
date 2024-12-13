// Approach 1: Hash Map Approach
// const majorityElement = function (nums) {
//   const counter = {};

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     counter[num] = (counter[num] || 0) + 1;
//     if (counter[num] > nums.length / 2) return num;
//   }
// };

// Approach 2: OPTIMAL SOLUTION - Boyer-Moore Voting Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let candidate = null; // Variable to track the potential majority element
  let count = 0; // Variable to track the "votes"

  for (let num of nums) {
    if (count === 0) {
      candidate = num; // Set the new candidate
      count = 1; // Reset count to 1
    } else if (num === candidate) {
      count++; // Increment count if the current number matches the candidate
    } else {
      count--; // Decrement count otherwise
    }
  }

  return candidate; // Return the candidate as the majority element
};

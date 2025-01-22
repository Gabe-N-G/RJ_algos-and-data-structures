/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]; // Expand the window by adding nums[right]

    // Shrink the window while the sum is greater than or equal to target
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1); // Update the minimal length
      currentSum -= nums[left]; // Shrink the window from the left
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength; // Return 0 if no valid subarray is found
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
// console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // Output: 5
// console.log(minSubArrayLen(100, [1, 2, 3, 4, 5])); // Output: 0

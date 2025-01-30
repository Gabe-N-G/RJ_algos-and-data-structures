/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const numMap = {}; // Using a plain object

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return []; // This line is never reached since a solution is guaranteed.
};

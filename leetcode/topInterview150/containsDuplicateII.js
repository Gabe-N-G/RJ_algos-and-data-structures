/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const numMap = {}; // Stores last seen index of each number

  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] !== undefined && i - numMap[nums[i]] <= k) {
      return true; // Found a valid duplicate within range
    }
    numMap[nums[i]] = i; // Update last seen index
  }

  return false; // No valid duplicates found
};

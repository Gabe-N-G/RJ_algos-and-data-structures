/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const result = [];

  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements for the fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Two-pointer approach
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Found a triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Move both pointers inward and skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        // Increment left pointer to increase the sum
        left++;
      } else {
        // Decrement right pointer to decrease the sum
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0,0,0]]
// console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2,0,2],[-2,1,1]]
// console.log(threeSum([])); // Output: []
// console.log(threeSum([0])); // Output: []

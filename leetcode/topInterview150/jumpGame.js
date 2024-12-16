/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Greedy Approach (OPTIMAL)
const canJump = function (nums) {
  let maxReach = 0; // Farthest index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false; // If current index is beyond maxReach, we are stuck
    }
    maxReach = Math.max(maxReach, i + nums[i]); // Update maxReach
  }

  return true; // If we complete the loop, we can reach the last index
};

// Original Approach: Same complexity, but maybe easier to see the jumps?
// const canJump = function (nums) {
//   if (nums.length <= 1) return true; // One or no elements mean you can reach the end

//   const finalIdx = nums.length - 1; // Last Index in nums array
//   let i = 0; // iterate through array
//   let maxJump = nums[0];

//   while (maxJump > 0) {
//     if (i + maxJump >= finalIdx) {
//       return true;
//     } else {
//       maxJump--;
//       i++;

//       if (nums[i] > maxJump) maxJump = nums[i]; // Greedy portion - keep track of best jump
//     }
//   }

//   return false;
// };

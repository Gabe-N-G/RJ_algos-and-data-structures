/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let jumps = 0; // Count of jumps made
  let currentEnd = 0; // End of the current jump range
  let farthest = 0; // Farthest index reachable in the current range

  // Traverse the array (except the last index)
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest index reachable
    farthest = Math.max(farthest, i + nums[i]);
    console.log("farthest: ", farthest)

    // If we reach the end of the current range:
    console.log("i: ", i, "currentEnd: ", currentEnd)
    if (i === currentEnd) {
      jumps++; // Make a jump
      currentEnd = farthest; // Extend the range
    }
  }

  return jumps; // Return the total jumps made
};

console.log(jump([2, 3, 1, 1, 4])); // Output: 2
// console.log(jump([2, 3, 0, 1, 4])); // Output: 2
// console.log(jump([0])); // Output: 0
// console.log(jump([10, 9, 8, 7, 6])); // Output: 1
// console.log(jump([2, 0, 1, 0, 4])); // Output: 2
// console.log(jump([1, 2, 3, 4, 5])); // Output: 3

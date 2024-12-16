/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let s = 0; // Slow pointer for writing the result - s short for "slow"

  // f short for "fast"
  for (let f = 0; f < nums.length; f++) {
    // Allow first two occurrences of each unique element
    if (s < 2 || nums[f] !== nums[s - 2]) {
      nums[s] = nums[f]; // Copy the element at fast pointer to slow pointer
      s++; // Move slow pointer forward
    }
  }

  return s; // Return the length of the modified array
};

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  // If the array is empty or has only one element, it's already unique.
  if (nums.length === 0) return 0;

  // Pointer to keep track of the position of the unique element.
  let i = 0;

  // Iterate over the array starting from the second element.
  for (let j = 1; j < nums.length; j++) {
    // When a new unique element is found
    if (nums[j] !== nums[i]) {
      i++; // Move the unique position pointer
      nums[i] = nums[j]; // Update the position with the unique element
    }
  }

  // The number of unique elements is i + 1
  return i + 1;
};

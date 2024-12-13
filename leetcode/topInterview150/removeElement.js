/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let slow = 0; // Pointer to track the position of the next non-val element

  // Iterate through the array
  for (let fast = 0; fast < nums.length; fast++) {
    // If the current element is not equal to val
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]; // Copy the element to the slow pointer position
      slow++; // Move the slow pointer forward
    }
  }

  return slow; // The slow pointer now represents the count of non-val elements
};

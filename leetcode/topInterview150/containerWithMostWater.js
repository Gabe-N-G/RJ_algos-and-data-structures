/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxArea = 0; // To store the maximum area found

  let left = 0; // Pointer at the beginning of the array
  let right = height.length - 1; // Pointer at the end of the array

  while (left < right) {
    // The area of a rectangle is meased as width * height
    let w = right - left; // Width calculated as the difference/distance between the indexes
    let h = Math.min(height[left], height[right]); // Take the min height at each pointer as the water cannot overflow

    // Calculate the current area (width * height)
    maxArea = Math.max(maxArea, w * h);

    // Move the pointer with the smaller height inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea; // Return the maximum area found
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
// console.log(maxArea([1, 1])); // Output: 1
// console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
// console.log(maxArea([1, 2, 1])); // Output: 2
// console.log(maxArea([1, 2, 4, 3])); // Output: 4

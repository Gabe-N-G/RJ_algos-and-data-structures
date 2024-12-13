/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k is greater than nums.length
  console.log(k);

  // Helper function to reverse a portion of the array
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
      start++;
      end--;
    }
  };

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the last n - k elements
  reverse(k, n - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1], 2)

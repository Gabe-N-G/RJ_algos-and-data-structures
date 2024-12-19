/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Prefix pass
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix; // Set the current prefix product
    prefix *= nums[i]; // Update the prefix product
  }

  // Suffix pass
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix; // Multiply by the current suffix product
    suffix *= nums[i]; // Update the suffix product
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
// console.log(productExceptSelf([2, 3])); // Output: [3, 2]
// console.log(productExceptSelf([5, 1, 10, 1])); // Output: [10, 50, 5, 50]

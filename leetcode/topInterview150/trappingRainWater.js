// APPROACH 1: Dynamic Programming (Two Arrays)
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const n = height.length;
  if (n <= 1) return 0;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  // Fill leftMax array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Fill rightMax array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Calculate trapped water
  let trappedWater = 0;
  for (let i = 0; i < n; i++) {
    trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return trappedWater;
};

// APPROACH 2: Two-Pointer Approach
/**
 * @param {number[]} height
 * @return {number}
 */
// const trap = function (height) {
//   const n = height.length;
//   if (n <= 1) return 0;

//   let left = 0,
//     right = n - 1;
//   let leftMax = 0,
//     rightMax = 0;
//   let trappedWater = 0;

//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] >= leftMax) {
//         leftMax = height[left];
//       } else {
//         trappedWater += leftMax - height[left];
//       }
//       left++;
//     } else {
//       if (height[right] >= rightMax) {
//         rightMax = height[right];
//       } else {
//         trappedWater += rightMax - height[right];
//       }
//       right--;
//     }
//   }

//   return trappedWater;
// };

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
// console.log(trap([1, 0, 2])); // Output: 1
// console.log(trap([3, 0, 0, 2, 0, 4])); // Output: 10
// console.log(trap([1, 1, 1, 1, 1])); // Output: 0

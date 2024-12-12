# Rotate Array

Link: [Rotate Array](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/)

Difficulty: Medium

## The Ask

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

---

### Examples

#### Example 1

```javascript
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 step to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

#### Example 2

```javascript
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 step to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // code goes here
};
```

<details> <summary>Hint 1</summary> The easiest solution would use additional memory, and that is perfectly fine. </details> <details> <summary>Hint 2</summary> The actual trick comes when trying to solve this problem without using any additional memory. This means you need to use the original array somehow to move the elements around. </details> <details> <summary>Hint 3</summary> One approach involves **reversing the array** (or parts of it) to achieve the desired result. </details> <details> <summary>Hint 4</summary> Another approach involves **cyclic dependencies**, where elements are moved in a cycle until all positions are filled. </details>

## Approach

This problem can be solved efficiently in-place using the **reverse approach**. Here's the idea:

### Key Observations:

1. Rotating the array by `k` steps to the right is equivalent to:
   - Moving the last `k` elements to the front of the array.
   - Moving the first `n - k` elements to the back of the array.
2. Instead of directly shifting the elements, we can achieve the same result by **reversing parts of the array**:
   - Reverse the entire array.
   - Reverse the first `k` elements.
   - Reverse the last `n - k` elements.

---

### Steps:

1. Compute `k % nums.length` to handle cases where `k` is greater than the array length. This will reduce unnecessary rotations. For example, if we have an array with a length of 5 and `k` is 12, Here, `k % nums.length = 12 % 5 = 2`, which means **rotating the array by 12 steps is equivalent to rotating it by 2 steps**.
2. Reverse the entire array.
3. Reverse the first `k` elements.
4. Reverse the last `n - k` elements.
5. The array is now rotated **in-place** with \( O(1) \) space complexity.

---

### Algorithm Complexity:

- **Time Complexity:** \( O(n) \)  
  Reversing the entire array and two subarrays takes \( O(n) \).
- **Space Complexity:** \( O(1) \)  
  No extra space is used; all operations are done in-place.

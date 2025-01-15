# Two Sum II - Input Array Is Sorted

Link: [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given a **1-indexed** array of integers `numbers` that is already sorted in **non-decreasing order**, find two numbers such that they add up to a specific target number. Return the indices of the two numbers as an integer array `[index1, index2]`.

- **Constraints:**
  - 1 <= index1 < index2 <= numbers.length
  - The solution must use **constant extra space**.
  - There is **exactly one solution**.

## Examples

### Example 1

```javascript
Input: (numbers = [2, 7, 11, 15]), (target = 9);
Output: [1, 2];
```

**Explanation**:
The sum of `2` and `7` is `9`. Therefore, return `[1, 2]` (1-indexed).

### Example 2

```javascript
Input: (numbers = [2, 3, 4]), (target = 6);
Output: [1, 3];
```

**Explanation**:
The sum of `2` and `4` is `6`. Therefore, return `[1, 3]` (1-indexed).

### Example 3

```javascript
Input: (numbers = [-1, 0]), (target = -1);
Output: [1, 2];
```

**Explanation**:
The sum of `-1` and `0` is `-1`. Therefore, return `[1, 2]` (1-indexed).

## Setup

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use the **two-pointer approach** to traverse the sorted array efficiently. </details> <details> <summary>Hint 2</summary> Adjust the left and right pointers based on whether the current sum is less than or greater than the target. </details> <details> <summary>Hint 3</summary> If the current sum equals the target, return the indices adjusted for 1-based indexing. </details>

## Approach

### Key Observations:

1. The array is sorted in non-decreasing order, making it possible to use the **two-pointer approach**:
   - Start with one pointer at the **left** and the other at the **right** of the array.
   - Calculate the sum of the two pointers.
   - If the sum is less than the target, move the left pointer forward.
   - If the sum is greater than the target, move the right pointer backward.
2. Since there is exactly one solution, the algorithm can safely return as soon as the target sum is found.

### Steps:

#### 1. Initialize Two Pointers:

- `left` pointing to the start of the array.
- `right` pointing to the end of the array.

#### 2. Traverse the Array Using a Loop:

- Calculate the sum of `numbers[left] + numbers[right]`.
- If the sum equals the target, return `[left + 1, right + 1]` (1-indexed).
- If the sum is less than the target, increment the `left` pointer.
- If the sum is greater than the target, decrement the `right` pointer.

#### 3. The Algorithm is Guaranteed to Find a Solution:

- This is because the problem states there is exactly one solution.

### Algorithm Complexity

#### Time Complexity:

- **O(n):**  
  Each element is visited at most once as the pointers traverse the array.

#### Space Complexity:

- **O(1):**  
  No additional space is used.

## Example Walkthrough

### Input: `numbers = [2,7,11,15]`, `target = 9`

#### Step 1: Initialize Pointers

- `left = 0`, `right = 3`.

#### Step 2: Traverse the Array

- **Iteration 1:**

  - `numbers[left] + numbers[right] = 2 + 15 = 17` (too large).
  - Move `right` to 2.

- **Iteration 2:**

  - `numbers[left] + numbers[right] = 2 + 11 = 13` (too large).
  - Move `right` to 1.

- **Iteration 3:**
  - `numbers[left] + numbers[right] = 2 + 7 = 9` (match).
  - Return `[left + 1, right + 1] = [1, 2]`.

#### Output: `[1, 2]`

## Why is this Solution Optimal?

### Two-Pointer Approach:

- The two-pointer technique leverages the sorted property of the array to efficiently find the target sum in linear time.

### Space Efficiency:

- The solution uses constant extra space, adhering to the problem's constraints.

### Guaranteed Solution:

- The problem guarantees that exactly one solution exists, so the algorithm terminates as soon as it finds the pair.

### Simplicity:

- The approach is intuitive and avoids unnecessary computations.

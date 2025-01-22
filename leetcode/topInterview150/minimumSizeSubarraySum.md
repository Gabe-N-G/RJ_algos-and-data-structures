# Minimum Size Subarray Sum

**Link:** [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Medium

## The Ask

Given an array of positive integers `nums` and a positive integer `target`, return the **minimal length** of a subarray whose sum is **greater than or equal** to `target`. If no such subarray exists, return `0`.

## Examples

### Example 1

```javascript
Input: (target = 7), (nums = [2, 3, 1, 2, 4, 3]);
Output: 2;
```

**Explanation**:

The subarray `[4,3]` has a sum of `7` and is the shortest subarray satisfying the condition.

### Example 2

```javascript
Input: (target = 4), (nums = [1, 4, 4]);
Output: 1;
```

**Explanation**:

The subarray `[4]` has a sum of `4` and is the shortest subarray satisfying the condition.

### Example 3

```javascript
Input: (target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1]);
Output: 0;
```

**Explanation**:

No subarray has a sum greater than or equal to `11`.

## Setup

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use the **sliding window technique** to efficiently find the smallest subarray that satisfies the condition. </details> <details> <summary>Hint 2</summary> For the O(n log n) solution, use a **prefix sum** and **binary search** to efficiently check ranges. </details>

## Approach: Sliding Window (O(n))

### Key Observations:

#### Sliding Window Technique:

- Use a **variable-sized sliding window** to maintain a running sum of the subarray.
- If the sum of the current window is **greater than or equal to `target`**, try shrinking the window from the left to find the minimal length.
- If the sum of the current window is **less than `target`**, expand the window by moving the right pointer.

#### Dynamic Window Adjustment:

- Keep track of the **start and end of the window** (`left` and `right` pointers).
- Dynamically adjust the size of the window as the sum crosses the target.

### Steps:

1. **Initialize Variables:**

   - `left` pointer at the start of the array.
   - `currentSum` to store the running sum.
   - `minLength` initialized to a very large number (`Infinity`).

2. **Traverse the Array with a Right Pointer:**

   - Add `nums[right]` to `currentSum`.
   - While `currentSum >= target`:
     - Calculate the current subarray length and update `minLength`.
     - Shrink the window by incrementing `left` and subtracting `nums[left]` from `currentSum`.

3. **Return Result:**
   - Return `minLength` if it's updated; otherwise, return `0`.

### Algorithm Complexity

#### Time Complexity:

- **O(n):**
  - Both pointers traverse the array at most once, making the algorithm linear.

#### Space Complexity:

- **O(1):**
  - The algorithm uses a constant amount of additional space.

## Why is This Solution Optimal?

### Sliding Window:

1. **Efficiency:**

   - The two-pointer sliding window approach processes each element at most twice, ensuring O(n) time complexity.

2. **Simplicity:**
   - The approach avoids additional space and is intuitive to implement, making it a clean and efficient solution.

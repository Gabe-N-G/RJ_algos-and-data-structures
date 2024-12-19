# Jump Game II

Link: [Jump Game II](https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

You are given a **0-indexed array of integers** `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]`, and
- `i + j < n`.

Return the **minimum number of jumps** required to reach `nums[n - 1]`.

The test cases guarantee that you can always reach the last index.

## Examples

### Example 1

```javascript
Input: nums = [2,3,1,1,4]
Output: 2
Explanation:
Jump 1 step from index 0 to index 1, then 3 steps to the last index.
```

### Example 2

```javascript
Input: nums = [2,3,0,1,4]
Output: 2
Explanation:
Jump 1 step from index 0 to index 1, then 3 steps to the last index.
```

## Edge Cases

1. **Single Element Array:**  
   Input: `nums = [0]`  
   Output: `0` (Already at the last index).

2. **All Elements are Large Enough to Jump in One Step:**  
   Input: `nums = [10, 9, 8, 7, 6]`  
   Output: `1`.

3. **Array with Zeros (except the last element is reachable):**  
   Input: `nums = [2, 0, 1, 0, 4]`  
   Output: `2` (Jump over zeros to reach the end).

## Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> You don't need to explore all possible jumps for every index. Instead, aim to cover as much ground as possible within a single jump. </details> <details> <summary>Hint 2</summary> Use a **greedy approach** to minimize the number of jumps. Keep track of the current jump's range and move to the next range when you run out of steps. </details>

## Approach

This problem can be solved efficiently using a **greedy approach**. Instead of exploring all possible jump paths, we focus on:

1. **Maximizing the distance covered in each jump.**
2. **Only jumping when absolutely necessary** (when our current range runs out).

### Key Observations:

1. Each element `nums[i]` tells you the maximum range you can jump forward from index `i`.
2. To minimize the jumps, you should maximize the range you can cover with each jump.
3. Keep track of:
   - The **current range** of indices you can reach without making another jump.
   - The **farthest index** you can reach during the current range.
4. When you reach the end of the current range, increment your jump count and extend the range to the farthest index you can reach.

### Steps:

1. Initialize variables:
   - `jumps = 0` (to count the number of jumps),
   - `currentEnd = 0` (end of the current jump range),
   - `farthest = 0` (farthest index reachable during the current range).
2. Traverse the array up to `nums.length - 1` (you don’t need to check the last index):
   - Update `farthest` to `max(farthest, i + nums[i])` (calculate the farthest reachable index).
   - If `i == currentEnd` (you’ve reached the end of the current jump range):
     - Increment `jumps`.
     - Update `currentEnd` to `farthest` (extend the range for the next jump).
3. Return `jumps` at the end of the loop.

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n)`  
  The array is traversed once, where `n` is the size of the array.

- **Space Complexity:**  
  `O(1)`  
  No additional space is used apart from a few variables.

## Why is this Solution Optimal?

1. The **greedy approach** ensures that you jump as far as possible within each jump, minimizing the number of jumps.
2. By dynamically updating the `farthest` and `currentEnd` variables, we avoid unnecessary computations.

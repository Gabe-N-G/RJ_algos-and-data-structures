# Jump Game

Link: [Jump Game](https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your **maximum jump length** at that position.

Return `true` if you can reach the last index, or `false` otherwise.

---

### Examples

#### Example 1

```javascript
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

#### Example 2

```javascript
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a greedy approach by keeping track of the farthest position you can reach at each index. </details> <details> <summary>Hint 2</summary> If at any index you find that the farthest reachable position is less than the current index, you cannot proceed further. </details>

## Approach

This problem can be solved efficiently using a **greedy algorithm**.

---

### Key Observations:

1. At every position, the maximum reachable index is calculated as `current index + nums[current index]`.
2. Use a variable `maxReach` to keep track of the farthest index you can reach while traversing the array.
3. If at any point `maxReach` is less than the current index, it means you are stuck and cannot proceed further.
4. If `maxReach` is greater than or equal to the last index, return `true`.

---

### Steps:

1. Initialize `maxReach = 0` to track the farthest index that can be reached.
2. Traverse the array:
   - If the current index exceeds `maxReach`, return `false` (you cannot proceed further).
   - Otherwise, update `maxReach` to `max(maxReach, current index + nums[current index])`.
3. If the loop completes without returning `false`, return `true`.

---

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n)` — We traverse the array once, where `n` is the size of the array.

- **Space Complexity:**  
  `O(1)` — No extra space is used apart from a few variables.

---

### Why is this Solution Efficient?

1. **Greedy Strategy:**  
   At every step, the algorithm ensures that the maximum reachable index is updated optimally.

2. **Early Exit:**  
   If at any point `maxReach` becomes less than the current index, the algorithm terminates early, saving computation.

3. **Space Efficiency:**  
   The solution operates in constant space.

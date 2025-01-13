# Trapping Rain Water

Link: [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Hard

## The Ask

Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Examples

### Example 1

![Rain Water Trap](../assets/rainwatertrap.png)

```javascript
Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
Output: 6;
```

### Example 2

```javascript
Input: height = [4, 2, 0, 3, 2, 5];
Output: 9;
```

## Setup

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use the concept of "bounded heights" to calculate trapped water. Water above a bar is bounded by the smaller of the maximum heights to its left and right. </details> <details> <summary>Hint 2</summary> You can calculate the left and right maximum heights for each bar using pre-computed arrays. </details> <details> <summary>Hint 3</summary> Alternatively, you can solve this problem with a two-pointer approach in O(n) time and O(1) space. </details>

## Approach

### Key Observations:

1. The water that can be trapped above any bar is determined by the **minimum of the maximum heights** to its **left** and **right**, minus the height of the bar itself.
2. There are two main approaches to solving this problem:
   - **Dynamic Programming (Two Arrays):** Pre-compute the left and right maximum heights for every bar.
   - **Two-Pointer Approach:** Use two pointers (`left` and `right`) and dynamically track the maximum heights as you traverse the array.

### Approach 1: Dynamic Programming (Two Arrays)

#### Steps:

1. **Pre-compute the left maximum heights** for each bar:
   - `leftMax[i]` is the maximum height from the start of the array to index `i`.
2. **Pre-compute the right maximum heights** for each bar:
   - `rightMax[i]` is the maximum height from index `i` to the end of the array.
3. **Calculate the trapped water** for each bar:
   - `water[i] = min(leftMax[i], rightMax[i]) - height[i]` if this value is positive, otherwise it's 0.
4. **Sum up all trapped water values.**

#### Complexity:

- **Time Complexity:** O(n)
  - Two passes for computing left and right maximum arrays, and one pass for calculating trapped water.
- **Space Complexity:** O(n)
  - Space required for `leftMax` and `rightMax` arrays.

### Approach 2: Two-Pointer Approach

#### Steps:

1. Use **two pointers**, `left` and `right`, starting at the two ends of the array.
2. Keep track of the **maximum height encountered so far** for both pointers:
   - `leftMax` for the left pointer.
   - `rightMax` for the right pointer.
3. Move the pointers inward:
   - If `height[left] < height[right]`:
     - Calculate trapped water at `left` using `leftMax`.
     - Increment `left`.
   - Otherwise:
     - Calculate trapped water at `right` using `rightMax`.
     - Decrement `right`.
4. Continue until the two pointers meet.

#### Complexity:

- **Time Complexity:** O(n)
  - A single pass through the array is sufficient.
- **Space Complexity:** O(1)
  - Uses only constant extra space.

## Algorithm Complexity

### Dynamic Programming (Two Arrays):

- **Time Complexity:** O(n)
  - Three linear traversals of the array.
- **Space Complexity:** O(n)
  - Two additional arrays for storing left and right maximum heights.

### Two-Pointer Approach:

- **Time Complexity:** O(n)
  - Single traversal of the array.
- **Space Complexity:** O(1)
  - Constant space is used for pointers and variables.

## Example Walkthrough

### Input: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`

#### Approach 1 (Dynamic Programming):

1. **Compute `leftMax`:** `[0,1,1,2,2,2,2,3,3,3,3,3]`.
2. **Compute `rightMax`:** `[3,3,3,3,3,3,3,3,2,2,2,1]`.
3. **Compute trapped water:**
   - For each `i`, calculate `min(leftMax[i], rightMax[i]) - height[i]`.
4. **Total trapped water = 6.**

#### Visualizing the Problem

Each bar in the `height` array has **two walls**:

1. **Left wall:** The highest bar to its **left**.
2. **Right wall:** The highest bar to its **right**.

To trap water above a bar, **both walls** are needed:

- The water trapped above a bar is bounded by the **smaller of the two walls** because water cannot rise above the shorter wall.

#### Approach 2 (Two-Pointer):

1. Use two pointers (`left` and `right`) and dynamically track `leftMax` and `rightMax`.
2. Calculate trapped water as pointers move inward.
3. **Total trapped water = 6.**

### Output: `6`

## Why is this Solution Optimal?

### Two Approaches:

1. **Dynamic Programming:**
   - Simple and efficient for understanding pre-computed maximums.
2. **Two-Pointer:**
   - Optimal in terms of space complexity with constant memory usage.

### Efficiency:

- Both approaches run in **O(n)** time complexity.

### Scalability:

- Handles large inputs (`n` up to `2 * 10^4`) efficiently due to linear time complexity.

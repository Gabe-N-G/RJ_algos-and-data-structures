# Container With Most Water

Link: [Container With Most Water](https://leetcode.com/problems/container-with-most-water/submissions/1509568096/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

You are given an integer array `height` of length `n`. Each element represents the height of a vertical line at index `i`, where the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines such that, together with the x-axis, they form a container that holds the maximum amount of water. Return the maximum amount of water that the container can store.

**Note:**  
The container cannot be slanted.

## Examples

### Example 1

![Water Container](../assets/water_container.jpg)

```javascript
Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
Output: 49;
```

**Explanation**:
The vertical lines are represented by the array `[1,8,6,2,5,4,8,3,7]`. The maximum area of water the container can hold is `49`, formed by the lines at indices `1` and `8` with height `8` and `7`.

### Example 2

```javascript
Input: height = [1, 1];
Output: 1;
```

**Explanation**:
The container is formed by the lines at indices `0` and `1`, both with height `1`. The area is `1`.

## Setup

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use the two-pointer approach to efficiently find the maximum container area. </details> <details> <summary>Hint 2</summary> Start with the widest possible container and gradually narrow it by moving the smaller-height pointer inward. </details> <details> <summary>Hint 3</summary> The area is determined by the shorter of the two heights multiplied by the width between the two pointers. </details>

## Approach

### Key Observations:

1. The area of a container is determined by:

   - **Width:** The distance between the two pointers.
   - **Height:** The shorter of the two heights (`min(height[left], height[right])`).
   - **Formula:** `area = width * min(height[left], height[right])`.

2. To maximize the area:
   - Start with the **widest possible container** (left pointer at the start, right pointer at the end).
   - Move the pointer with the **smaller height** inward to explore potentially larger areas.
3. The **two-pointer approach** ensures all possible containers are considered efficiently.

### Steps:

#### 1. Initialize Pointers:

- `left` at the beginning of the array (`0`).
- `right` at the end of the array (`height.length - 1`).

#### 2. Traverse the Array:

- Calculate the area for the current container:
  - `area = (right - left) * min(height[left], height[right])`.
- Update the `maxArea` if the current area is larger.
- Move the pointer with the smaller height inward:
  - If `height[left] < height[right]`, increment `left`.
  - Otherwise, decrement `right`.

#### 3. Return Result:

- After traversing the array, `maxArea` contains the maximum possible area.

### Algorithm Complexity

#### Time Complexity:

- **O(n):**  
  The two-pointer approach ensures each element is processed at most once.

#### Space Complexity:

- **O(1):**  
  No additional space is used.

## Example Walkthrough

### Input: `height = [1,8,6,2,5,4,8,3,7]`

#### Step 1: Initialize Pointers

- `left = 0`, `right = 8`, `maxArea = 0`.

#### Step 2: Traverse the Array

- **Iteration 1:**

  - `area = (8 - 0) * min(1, 7) = 8 * 1 = 8`.
  - `maxArea = max(0, 8) = 8`.
  - Move `left` to 1 (since `height[left] < height[right]`).

- **Iteration 2:**

  - `area = (8 - 1) * min(8, 7) = 7 * 7 = 49`.
  - `maxArea = max(8, 49) = 49`.
  - Move `right` to 7 (since `height[left] >= height[right]`).

- **Continue Iterations:**
  - Repeat the above logic until `left >= right`.

#### Final Output:

- Maximum area is `49`.

## Why is this Solution Optimal?

### Two-Pointer Approach:

- The two-pointer technique efficiently explores all possible containers by moving inward based on height comparison.

### Efficiency:

- **O(n):** Processes each element at most once, making it scalable for large arrays.

### Simplicity:

- The algorithm is straightforward and avoids unnecessary calculations.

### Space Efficiency:

- **O(1):** No additional data structures are used, keeping the space usage constant.

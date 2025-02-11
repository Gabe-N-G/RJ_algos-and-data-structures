# Spiral Matrix

Link: [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an `m x n` matrix, return all elements of the matrix in spiral order.

### Examples

#### Example 1

![Spiral One](../assets/spiral1.jpg)

```javascript
Input: matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5];
```

#### Example 2

![Spiral Two](../assets/spiral2.jpg)

```javascript
Input: matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
```

## Setup

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Try simulating the movement in the matrix by keeping track of boundaries. </details> <details> <summary>Hint 2</summary> Use four boundaries (`top, bottom, left, right`) to control the traversal direction. </details> <details> <summary>Hint 3</summary> Once you reach the boundary, update it and change direction (right → down → left → up). </details>

## Approach: Simulating the Spiral with Boundaries

### Key Observations

✅ The traversal follows four possible directions: right, down, left, and up.  
✅ We can maintain four boundaries (top, bottom, left, right) that shrink after traversing each row or column.  
✅ The process stops when all elements have been visited.

### Steps

1. **Initialize boundaries:**

   - `top = 0`, `bottom = m - 1`
   - `left = 0`, `right = n - 1`
   - Create an empty result array.

2. **Traverse in spiral order:**

   - Move **right** → across the top row, then shrink `top`.
   - Move **down** ↓ along the right column, then shrink `right`.
   - Move **left** ← across the bottom row, then shrink `bottom`.
   - Move **up** ↑ along the left column, then shrink `left`.

3. **Stop when all elements are visited.**

### Algorithm Complexity

**Time Complexity:** `O(m * n)`

- Every element is visited once.

**Space Complexity:** `O(1)`

- We only use a result array for output.

## Example Walkthrough

### Example 1

```javascript
Input: matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

**Processing:**

| Direction | Elements Added | Remaining Boundaries (`top, bottom, left, right`) |
| --------- | -------------- | ------------------------------------------------- |
| → Right   | `[1,2,3]`      | `top = 1`                                         |
| ↓ Down    | `[6,9]`        | `right = 1`                                       |
| ← Left    | `[8,7]`        | `bottom = 1`                                      |
| ↑ Up      | `[4]`          | `left = 1`                                        |
| → Right   | `[5]`          | `top = 2`                                         |

```javascript
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5];
```

## Why is This Solution Optimal?

✅ **Single Pass `O(m * n)`** → Each element is visited once.  
✅ **In-place Traversal `O(1)`** → No extra memory beyond the result array.  
✅ **Handles Edge Cases** → Works for **single row, single column, and non-square matrices**.

🚀 **Using boundary shrinkage ensures an efficient and elegant solution!**

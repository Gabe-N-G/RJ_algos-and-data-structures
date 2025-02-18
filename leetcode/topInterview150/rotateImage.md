# Rotate Image

Link: [Leetcode - Rotate Image](https://leetcode.com/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

You are given an `n x n` 2D matrix representing an image. Rotate the image **90 degrees clockwise**.

You **must** rotate the image **in-place**, meaning you cannot allocate another 2D matrix.

### Example 1

![Matrix 1](../assets/matrix1.jpg)

```javascript
// Input
input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Output
output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
```

### Example 2

![Matrix 2](../assets/matrix2.jpg)

```javascript
// Input
input = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// Output
output = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
```

### Constraints:

- `n == matrix.length == matrix[i].length` (Square matrix)
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Setup

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Code goes here
};
```

## Hints

<details>  
  <summary>Hint 1</summary>  
  Try rotating **layer by layer** instead of swapping elements one by one.  
</details>

<details>  
  <summary>Hint 2</summary>  
  Can you find a mathematical way to swap elements without needing extra space?  
</details>

## Approach: Transpose and Reverse

### **Key Observations**

✅ **Two-Step Process** for in-place rotation:

1. **Transpose the Matrix**: Swap elements at `(i, j)` with `(j, i)`, converting rows into columns.
2. **Reverse Each Row**: This achieves the 90-degree clockwise rotation.

✅ **No Extra Space Needed**: The operations modify the matrix directly.

### **Steps**

1. **Transpose the Matrix** (convert rows into columns):

   - Swap `matrix[i][j]` with `matrix[j][i]` for `i < j`.

2. **Reverse Each Row**:
   - Swap `matrix[i][left]` with `matrix[i][right]` while moving `left` and `right` inward.

## Algorithm Complexity

**Time Complexity:** `O(n²)`

- **Transposing** the matrix takes `O(n²)`.
- **Reversing rows** takes `O(n²)`.

**Space Complexity:** `O(1)`

- The transformation is done **in-place**, so no extra space is used.

### Example Walkthrough

```javascript
// Input
input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

### **Step 1: Transpose the Matrix** (Swap elements at `[i][j]` with `[j][i]`)

| **Before Transpose** | **After Transpose** |
| -------------------- | ------------------- |
| `[1, 2, 3]`          | `[1, 4, 7]`         |
| `[4, 5, 6]`          | `[2, 5, 8]`         |
| `[7, 8, 9]`          | `[3, 6, 9]`         |

### **Step 2: Reverse Each Row**

| **Before Reverse**        | **After Reverse** |
| ------------------------- | ----------------- |
| `[1, 4, 7]` → `[7, 4, 1]` |
| `[2, 5, 8]` → `[8, 5, 2]` |
| `[3, 6, 9]` → `[9, 6, 3]` |

```javascript
// Final Output
output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
```

## **Why is This Solution Optimal?**

✅ **O(n²) Time Complexity** → Efficient for small `n ≤ 20`.  
✅ **O(1) Space Complexity** → In-place modifications, no extra memory needed.  
✅ **Simple & Readable** → Uses a two-step process that is easy to understand.  
✅ **Handles Edge Cases** → Works for `n = 1` (single element), already rotated matrices, and large negative numbers.

🚀 **Transposing first, then reversing rows, ensures an elegant in-place rotation!**

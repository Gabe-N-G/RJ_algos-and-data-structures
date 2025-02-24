# Set Matrix Zeroes

**Link:** [Leetcode - Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Medium

## The Ask

Given an `m x n` integer `matrix`, if an element is `0`, set its **entire row** and **column** to `0`s.

You must do it **in-place**.

### Example 1:

![Matrix One](../assets/setMatrix1.jpg)

```javascript
// Input
matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// Output
output = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
```

### Example 2:

![Matrix Two](../assets/setMatrix2.jpg)

```javascript
// Input
matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

// Output
output = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
```

## Constraints:

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2³¹ <= matrix[i][j] <= 2³¹ - 1`

## Setup

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // Code goes here
};
```

## Hints

<details>
<summary>Hint 1</summary>
A brute-force solution using `O(m * n)` space is straightforward but not efficient. Can we optimize it?
</details>

<details>
<summary>Hint 2</summary>
An intermediate solution uses `O(m + n)` space. It involves storing zero positions in arrays and modifying the matrix accordingly.
</details>

<details>
<summary>Hint 3</summary>
The best solution uses **constant space** `O(1)`. Can we store zero information inside the matrix itself without extra memory?
</details>

## Approach: In-Place Modification Using First Row & First Column

### Key Observations:

✅ A brute-force `O(m * n)` space approach would require copying the matrix.  
✅ We can optimize using **two boolean arrays** (`O(m + n)`) to track rows & columns that need to be zeroed.  
✅ The most **optimal solution (`O(1)`)** leverages the **first row and first column** to store zero markers.

### Steps:

1. **Mark Zeroes Using First Row & First Column:**

   - Iterate through the matrix to find `0`s.
   - Mark the **first element** of the corresponding row & column as `0`.

2. **Modify the Matrix Based on the First Row & Column:**

   - Traverse the matrix **(excluding the first row & column)**.
   - If a row or column is marked with `0`, set that cell to `0`.

3. **Handle the First Row & Column Separately:**
   - If the first row originally contained a `0`, set the entire first row to `0`.
   - If the first column originally contained a `0`, set the entire first column to `0`.

### Algorithm Complexity:

- **Time Complexity:** `O(m * n)`
  - We iterate over the matrix a few times but never revisit elements unnecessarily.
- **Space Complexity:** `O(1)`
  - We only use existing matrix space for marking zeroes.

## Why is This Solution Optimal?

✅ **O(m \* n) Time Complexity** → Each element is processed a constant number of times.  
✅ **O(1) Space Complexity** → Uses first row & column instead of extra arrays.  
✅ **In-Place Modification** → Avoids unnecessary memory allocation.  
✅ **Handles Edge Cases** → Works for single rows, single columns, and large matrices.

🚀 Using the first row & column as markers enables an efficient **O(1) space** solution!

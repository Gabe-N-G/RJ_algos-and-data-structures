# Valid Sudoku

**Link:** [Leetcode - Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Medium

## The Ask

Determine if a **9 × 9 Sudoku board** is **valid**. Only the **filled cells** need to be validated according to the following rules:

1. Each **row** must contain the digits **1-9** without repetition.
2. Each **column** must contain the digits **1-9** without repetition.
3. Each of the **nine 3 × 3 sub-boxes** of the grid must contain the digits **1-9** without repetition.

### Notes:

- A **partially filled** Sudoku board can be **valid but not necessarily solvable**.
- Empty cells are represented by **'.'** and do not need validation.

## Example 1

### **Input:**

```javascript
board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// Output: true
```

## Example 2

### **Input:**

```javascript
board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// Output: false
```

**Explanation:**  
Same as Example 1, except with the `5` in the top left corner being modified to `8`.  
Since there are **two 8's in the top left 3×3 sub-box**, it is invalid.

## Setup

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Code goes here
};
```

<details>
  <summary>Hint 1</summary>
  You need to check **three constraints**:  
  - Each row must contain unique numbers.  
  - Each column must contain unique numbers.  
  - Each 3×3 sub-box must contain unique numbers.  
</details>

<details>
  <summary>Hint 2</summary>
  A **hashmap (object)** can track seen numbers efficiently.  
  - Use three different maps to store **rows, columns, and sub-boxes**.  
</details>

<details>
  <summary>Hint 3</summary>
  Instead of multiple loops, iterate **once** and check all three constraints at the same time.  
</details>

## Approach: Hashmap for Validation

### **Key Observations**

✅ We need to check **rows, columns, and sub-boxes** efficiently.  
✅ Using a **hashmap (object)** allows O(1) lookups for duplicates.  
✅ Instead of **three separate loops**, we can iterate through the board **once** and validate all constraints simultaneously.

### **Steps**

1. **Initialize Hashmaps (Objects):**
   - `rows` → Track numbers seen in each row.
   - `cols` → Track numbers seen in each column.
   - `boxes` → Track numbers seen in each 3×3 box.
2. **Iterate Over the Board:**
   - For each cell `(r, c)`:
     - If the cell contains a **number** (not `'.'`):
       - Check if the number **already exists** in `rows[r]`, `cols[c]`, or `boxes[boxId]`.
       - If yes, return `false`.
       - Otherwise, store the number in all three hashmaps.
3. **Return `true`** if no conflicts are found.

### **Algorithm Complexity**

- **Time Complexity:** O(1) → **Only 81 iterations (9×9 grid).**
- **Space Complexity:** O(1) → **Only 27 keys stored (9 rows, 9 cols, 9 boxes).**

## Why is This Solution Optimal?

✅ **Efficient (O(1))** → Only **81 iterations** (fixed grid size).  
✅ **Memory Efficient (O(1))** → Uses at most **27 keys** in hashmaps.  
✅ **Early Exit** → Returns `false` immediately if a duplicate is found.  
✅ **Handles Edge Cases** → Works for **partially filled boards** and **empty cells**.

🚀 Using **hashmaps for quick lookups** ensures a clean and efficient solution!

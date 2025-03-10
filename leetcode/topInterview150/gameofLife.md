# Game of Life

Link: [Leetcode - Game of Life](https://leetcode.com/problems/game-of-life/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an `m x n` board of cells where each cell is either **alive (1)** or **dead (0)**, update the board to its **next state** according to the following rules:

1. Any **live** cell with **fewer than two** live neighbors **dies** (underpopulation).
2. Any **live** cell with **two or three** live neighbors **stays alive**.
3. Any **live** cell with **more than three** live neighbors **dies** (overpopulation).
4. Any **dead** cell with **exactly three** live neighbors **becomes alive** (reproduction).

The update must happen **simultaneously** for all cells.

## Examples

### Example 1

![Game of Life Example 1](../assets/gameOfLife1.jpg)

```javascript
Input: board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
Output: [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];
```

### Example 2

![Game of Life Example 2](../assets/gameOfLife2.jpg)

```javascript
Input: board = [
  [1, 1],
  [1, 0],
];
Output: [
  [1, 1],
  [1, 1],
];
```

## Setup

```javascript
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // Code goes here
};
```

[The Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

## Hints

✅ Use **in-place modification** to avoid using extra space.  
✅ Since we cannot update cells immediately (because we would influence future calculations), consider using temporary values:

- `2` → A **live cell** that should become **dead**.
- `-1` → A **dead cell** that should become **alive**.  
  ✅ After processing, convert `2 → 0` and `-1 → 1` to finalize the transformation.

## **Approach: In-Place State Transition**

### **Key Observations**

✅ We must update all cells **simultaneously**, meaning we **cannot** change values directly before checking neighbors.  
✅ Instead of using extra space, we **mark changes in-place** with **temporary values**:

- `1 → 0` (live → dead) → Mark as `2`
- `0 → 1` (dead → live) → Mark as `-1`  
  ✅ Since we only have two states (`0` or `1`), these markers allow us to track old states while applying the new rules.

## Steps

### Step 1: Count Live Neighbors

- Define the **8 possible directions** (left, right, top, bottom, and diagonals).
- For each cell `(i, j)`, count **live** neighbors by checking:
  - `board[ni][nj] === 1 || board[ni][nj] === 2`
  - `2` represents a cell that was **originally live** but is now transitioning to dead.

### Step 2: Apply the Rules Using Markers

- **For live cells (`board[i][j] === 1`)**:
  - If **fewer than 2** or **more than 3** live neighbors → Mark as `2` (`1 → 0`).
- **For dead cells (`board[i][j] === 0`)**:
  - If **exactly 3** live neighbors → Mark as `-1` (`0 → 1`).

### Step 3: Convert Markers to Final Values

- Replace:
  - `2 → 0` (live → dead)
  - `-1 → 1` (dead → live)

## Algorithm Complexity

✅ **Time Complexity: O(m × n)**

- Each cell is processed exactly **twice** (once for marking, once for finalizing).  
  ✅ **Space Complexity: O(1)**
- In-place modification avoids extra memory.

## Example Walkthrough

### Example 1

```javascript
input = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
```

#### Step 1: Processing:

Mark cells using rules:

```javascript
[
  [0, 2, 0],
  [-1, 0, 1],
  [1, 1, 2],
  [0, -1, 0],
];
```

#### Step 2: Convert Markers

Using markers:

```javascript
[
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];
```

#### Output:

```javascript
[
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];
```

## Why is This Solution Optimal?

✅ **O(m × n) Time Complexity** → Each cell is processed a constant number of times.  
✅ **O(1) Space Complexity** → Uses **in-place markers** instead of extra arrays.  
✅ **Handles Edge Cases** → Works for small grids, large boards, and boundary conditions.  
✅ **No Extra Memory Needed** → Modifies the board directly, avoiding unnecessary memory overhead.

🚀 **Using in-place state transitions ensures an efficient and scalable solution!**

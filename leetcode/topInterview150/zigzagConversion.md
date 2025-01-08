# Zigzag Conversion

Link: [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given a string `s` and an integer `numRows`, rearrange the string in a **zigzag pattern** across `numRows` rows and then read the characters **line by line**.

## Examples

### Example 1

```javascript
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Explanation: The zigzag pattern for 3 rows is

P   A   H   N
A P L S I I G
Y   I   R

Reading row by row gives: "PAHNAPLSIIGYIR".
```

### Example 2

```javascript
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Explanation: The zigzag pattern for 4 rows is:

P     I    N
A   L S  I G
Y A   H R
P     I

Reading row by row gives: "PINALSIGYAHRPI".
```

### Example 3

```javascript
Input: (s = "A"), (numRows = 1);
Output: "A";
```

## Setup

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Simulate the zigzag pattern row by row. Use an array to store characters for each row. </details> <details> <summary>Hint 2</summary> Keep track of the current row and direction of movement (up or down). When the top or bottom row is reached, reverse the direction. </details> <details> <summary>Hint 3</summary> After populating the rows, concatenate them to get the final result. </details>

## Approach

### Key Observations:

1. Each character in the input string is assigned to a specific row in the zigzag pattern.
2. The zigzag traversal alternates between moving **down** and **up**:
   - Start at the first row and move **downwards**.
   - When you reach the bottom row, reverse direction and move **upwards**.
   - Continue this process until all characters are placed.

### Steps:

#### 1. Handle Edge Case:

- If `numRows == 1` or `numRows >= s.length`, return `s` directly (no zigzag needed).

#### 2. Simulate Rows:

- Use an array `rows` of size `numRows` to represent each row in the zigzag pattern.
- Append characters to the appropriate row based on the current direction.

#### 3. Track Current Row and Direction:

- Use a variable `curRow` to track the current row.
- Use a flag `down` to track whether the direction is moving **down** or **up**.
- Reverse the direction when the top or bottom row is reached.

#### 4. Concatenate Rows:

- After processing all characters, concatenate the strings in all rows to produce the final result.

## Algorithm Complexity

### Time Complexity:

- **O(n):**
  - We iterate through the input string `s` once, placing each character into the appropriate row.

### Space Complexity:

- **O(n):**
  - Additional space is used for the array of rows, which stores the characters in each row.

## Example Walkthrough

### Input: `s = "PAYPALISHIRING"`, `numRows = 3`

#### 1. Initialize Rows:

- `rows = ["", "", ""]`
- `curRow = 0`, `goingDown = false`

#### 2. Traverse the String:

| Character | Current Row | Direction | Rows                         |
| --------- | ----------- | --------- | ---------------------------- |
| P         | 0           | Down      | `["P", "", ""]`              |
| A         | 1           | Down      | `["P", "A", ""]`             |
| Y         | 2           | Up        | `["P", "A", "Y"]`            |
| P         | 1           | Up        | `["P", "AP", "Y"]`           |
| A         | 0           | Down      | `["PA", "AP", "Y"]`          |
| L         | 1           | Down      | `["PA", "APL", "Y"]`         |
| I         | 2           | Up        | `["PA", "APL", "YI"]`        |
| S         | 1           | Up        | `["PA", "APLS", "YI"]`       |
| H         | 0           | Down      | `["PAH", "APLS", "YI"]`      |
| I         | 1           | Down      | `["PAH", "APLSI", "YI"]`     |
| R         | 2           | Up        | `["PAH", "APLSI", "YIR"]`    |
| I         | 1           | Up        | `["PAH", "APLSII", "YIR"]`   |
| N         | 0           | Down      | `["PAHN", "APLSII", "YIR"]`  |
| G         | 1           | Down      | `["PAHN", "APLSIIG", "YIR"]` |

#### 3. Concatenate Rows:

- `rows.join("")` → `"PAHNAPLSIIGYIR"`

### Output: `"PAHNAPLSIIGYIR"`

## Why is this Solution Optimal?

### Efficient Time Complexity:

- The solution processes each character in the string exactly once, resulting in **O(n)** time complexity.

### Simple and Readable:

- The use of an array to simulate rows makes the algorithm easy to understand and implement.

### Handles Edge Cases Gracefully:

- The algorithm directly handles cases where `numRows` is 1 or greater than the length of the string, returning the input string unchanged.

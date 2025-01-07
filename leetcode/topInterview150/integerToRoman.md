# Integer to Roman

Link: [Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Convert an integer to its corresponding Roman numeral representation. Roman numerals are constructed using the following symbols and rules:

### Roman Numeral Symbols

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

### Rules for Constructing Roman Numerals

1. **Additive Rule:**  
   Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. For example:

   - 3000 = `MMM` (1000 + 1000 + 1000).
   - 700 = `DCC` (500 + 100 + 100).

2. **Subtractive Rule:**  
   If the value starts with 4 or 9, use the subtractive form representing one symbol subtracted from the following symbol.

   - Subtractive Forms:
     - 4 = `IV` (1 less than 5).
     - 9 = `IX` (1 less than 10).
     - 40 = `XL` (10 less than 50).
     - 90 = `XC` (10 less than 100).
     - 400 = `CD` (100 less than 500).
     - 900 = `CM` (100 less than 1000).

3. **Repetition Limits:**
   - Powers of 10 (I, X, C, M) can be appended consecutively at most 3 times.
   - If 4 consecutive symbols are required, use the subtractive form instead.

## Examples

### Example 1

```javascript
Input: num = 3749
Output: "MMMDCCXLIX"
Explanation:
3000 = MMM (1000 + 1000 + 1000)
 700 = DCC (500 + 100 + 100)
  40 = XL (10 less than 50)
   9 = IX (1 less than 10)
```

### Example 2

```javascript
Input: num = 58
Output: "LVIII"
Explanation:
50 = L
 8 = VIII
```

### Example 3

```javascript
Input: num = 1994
Output: "MCMXCIV"
Explanation:
1000 = M
 900 = CM (100 less than 1000)
  90 = XC (10 less than 100)
   4 = IV (1 less than 5)
```

## Setup

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Start with the largest Roman numeral symbol and work your way down to the smallest. For each symbol, append it to the result as many times as the value of the symbol fits into the number. </details> <details> <summary>Hint 2</summary> For numbers like 4, 9, 40, 90, 400, and 900, directly use the subtractive Roman numeral forms (`IV`, `IX`, `XL`, `XC`, `CD`, `CM`). </details> <details> <summary>Hint 3</summary> Store Roman numeral symbols and their values in descending order in a lookup table. Traverse the table while reducing the number. </details>

## Approach

### Key Observations:

1. Roman numerals are represented in descending order of values, so always handle the **largest values first**.
2. Use a **lookup table** to map values to their corresponding Roman numeral symbols.
3. For each value in the lookup table:
   - Determine how many times the value fits into the input number.
   - Append the corresponding Roman numeral symbol that many times to the result.
   - Reduce the input number accordingly.

### Steps:

#### Define Lookup Table:

- Create a table of Roman numeral symbols and their values in descending order:

- [1000, "M"]
- [900, "CM"]
- [500, "D"]
- [400, "CD"]
- [100, "C"]
- [90, "XC"]
- [50, "L"]
- [40, "XL"]
- [10, "X"]
- [9, "IX"]
- [5, "V"]
- [4, "IV"]
- [1, "I"]

#### Iterate Through Lookup Table:

1. For each value-symbol pair:

- Compute how many times the value fits into the number:  
  `count = Math.floor(num / value)`.
- Append the symbol to the result `count` times.
- Subtract `value * count` from the number.

#### Return the Result:

- The result string contains the Roman numeral representation.

## Algorithm Complexity

### Time Complexity:

- **O(1):** The lookup table is of fixed size (13 elements), and the number of operations for appending symbols is constant for a given input.

### Space Complexity:

- **O(1):** Uses a constant amount of space for the lookup table and result string (output size depends on the input number but does not affect space complexity analysis).

## Example Walkthrough

### Input: `num = 3749`

1. Start with `num = 3749` and `result = ""`.
2. Traverse the lookup table:

- `1000 ("M")`: Fits 3 times. Append `MMM` to `result`. Update `num = 3749 - 3000 = 749`.
- `900 ("CM")`: Does not fit.
- `500 ("D")`: Fits 1 time. Append `D` to `result`. Update `num = 749 - 500 = 249`.
- `400 ("CD")`: Does not fit.
- `100 ("C")`: Fits 2 times. Append `CC` to `result`. Update `num = 249 - 200 = 49`.
- `50 ("L")`: Does not fit.
- `40 ("XL")`: Fits 1 time. Append `XL` to `result`. Update `num = 49 - 40 = 9`.
- `10 ("X")`: Does not fit.
- `9 ("IX")`: Fits 1 time. Append `IX` to `result`. Update `num = 9 - 9 = 0`.

3. **Result:** `"MMMDCCXLIX"`

### Output: `"MMMDCCXLIX"`

## Why is this Solution Optimal?

### Efficient Time Complexity:

- The algorithm handles each Roman numeral symbol in constant time due to the fixed size of the lookup table.

### Readability:

- The lookup table provides a clear mapping of Roman numeral symbols to their values, simplifying the implementation.

### Adherence to Rules:

- By handling the subtractive cases explicitly in the lookup table, the algorithm ensures valid Roman numeral construction.

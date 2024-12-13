# Roman to Integer

Link: [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Given a Roman numeral string `s`, convert it to an integer.

### Rules for Roman Numerals:

1. Roman numerals are usually written largest to smallest from left to right.
   - Example: `XII = X + II = 12` and `XXVII = XX + V + II = 27`.
2. There are exceptions when subtraction is used:
   - `I` can be placed before `V` (5) and `X` (10) to make `4` and `9`.
   - `X` can be placed before `L` (50) and `C` (100) to make `40` and `90`.
   - `C` can be placed before `D` (500) and `M` (1000) to make `400` and `900`.
   - Example: `IV = 4`, `IX = 9`, `XL = 40`, `XC = 90`, `CD = 400`, and `CM = 900`.

---

### Examples

#### Example 1

```javascript
Input: s = "III";
Output: 3;
Explanation: III = 3;
```

#### Example 2

```javascript
Input: s = "LVIII";
Output: 58;
Explanation: (L = 50), (V = 5), (III = 3);
```

#### Example 3

```javascript
Input: s = "MCMXCIV";
Output: 1994;
Explanation: (M = 1000), (CM = 900), (XC = 90), (IV = 4);
```

### Setup

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // code goes here
};
```

<details> <summary>Hint 1</summary> Use a mapping of Roman numeral characters to their integer values. </details> <details> <summary>Hint 2</summary> Iterate through the string, and for each character, decide whether to add or subtract its value based on the next character. </details>

## Approach

This problem can be solved efficiently using a **greedy traversal approach**. Here's the idea:

---

### Key Observations:

1. Roman numerals are generally written in descending order. If a numeral is smaller than the numeral to its right, it must be subtracted instead of added.
   - **Example:** In `IV`, `I` is subtracted because it is smaller than `V`.
2. Use a mapping (hash map or object) to store the integer value of each Roman numeral character.

---

### Steps:

1. Create a mapping of Roman numerals to their integer values.
2. Initialize a variable `total` to `0` to store the resulting integer.
3. Traverse the string `s` from left to right:
   - If the current numeral is smaller than the next numeral, subtract its value from `total`.
   - Otherwise, add its value to `total`.
4. Return `total` after the loop completes.

---

### Algorithm Complexity:

- **Time Complexity:** \( O(n) \)  
  We traverse the string `s` of length \( n \) once.

- **Space Complexity:** \( O(1) \)  
  The mapping object is constant in size since it contains only the seven Roman numeral symbols.

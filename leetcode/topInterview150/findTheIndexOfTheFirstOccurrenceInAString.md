# Find the Index of the First Occurrence in a String

Link: [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

---

### Examples

#### Example 1

```javascript
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.
```

#### Example 2

```javascript
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

### Setup

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> You can use built-in string methods like `indexOf`, but try solving it manually for better understanding. </details> <details> <summary>Hint 2</summary> Sliding window techniques or substring matching can be used to find the first occurrence of `needle` in `haystack`. </details>

## Approach

This problem can be solved using a **sliding window approach** or a brute force method.

---

### Key Observations:

1. If the length of `needle` is greater than `haystack`, it is impossible for `needle` to occur in `haystack`. Return `-1`.
2. To find the first occurrence, slide a "window" of the same length as `needle` over `haystack` and compare substrings.
3. If a match is found, return the starting index of the window.

---

### Steps:

1. Check if the length of `needle` is greater than `haystack`. If so, return `-1`.
2. Iterate through `haystack` with a loop:
   - Extract a substring of length `needle.length` from the current index.
   - Compare the substring with `needle`.
   - If they match, return the current index.
3. If no match is found after the loop, return `-1`.

---

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n * m)`, where `n` is the length of `haystack` and `m` is the length of `needle`.  
  In the worst case, for each starting position in `haystack`, we compare up to `m` characters.

- **Space Complexity:**  
  `O(1)`, as no additional space is used apart from a few variables.

---

### Why is this Solution Efficient?

1. **Focused Comparison:**  
   The loop checks only substrings of the same length as `needle`, minimizing unnecessary operations.
2. **Constant Space:**  
   The solution does not use any additional data structures, keeping space usage low.
3. **Edge Cases Handled:**  
   Handles cases like `needle` being empty, larger than `haystack`, or no match scenarios.

# Longest Common Prefix

Link: [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

---

### Examples

#### Example 1

```javascript
Input: strs = ["flower", "flow", "flight"];
Output: "fl";
```

#### Example 2

```javascript
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Setup

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Compare characters of each string one by one. Stop as soon as characters differ or you reach the end of any string. </details> <details> <summary>Hint 2</summary> Sort the array and only compare the first and last strings, as they will have the least in common. </details>

## Approach

This problem can be solved efficiently using two approaches:

---

### 1. **Horizontal Scanning (Iterative Comparison):**

- Compare the first string with every other string character by character.
- Reduce the prefix as soon as characters don’t match.
- If the prefix becomes empty at any point, return an empty string.

---

### 2. **Sorting and Comparing First and Last Strings:**

- Sort the array of strings.
- Only compare the first and last strings in the sorted array, as they will have the least common prefix.
- Traverse character by character until they differ, and return the prefix.

---

### Algorithm Complexity:

#### Horizontal Scanning:

- **Time Complexity:** `O(n * m)`
  - `n`: Number of strings in the array.
  - `m`: Average length of strings.
  - Each string is compared character by character.
- **Space Complexity:** `O(1)`
  - No extra space is used apart from variables.

#### Sorting and Comparing:

- **Time Complexity:** `O(n * log n + m)`
  - Sorting takes `O(n * log n)`, and comparing the first and last strings takes `O(m)`.
- **Space Complexity:** `O(1)`
  - Sorting is done in-place if the implementation allows it.

#### Why is the Sorting Approach Optimal?

1. Minimal Comparisons: Sorting ensures that only the first and last strings (most dissimilar) are compared.

2. Efficient: Sorting is `O(n * log n)`, and comparing the first and last strings is `O(m)`, making it scalable for larger inputs.

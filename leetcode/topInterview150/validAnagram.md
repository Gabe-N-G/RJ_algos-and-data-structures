# Valid Anagram

**Link:** [Valid Anagram - LeetCode](https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Easy

## The Ask

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word, using **all the original letters exactly once**.

## Examples

### Example 1

```javascript
Input: (s = "anagram"), (t = "nagaram");
Output: true;
```

### Example 2

```javascript
Input: (s = "rat"), (t = "car");
Output: false;
```

## Setup

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a frequency counter (hashmap) to store letter counts for `s` and compare it to `t`. </details> <details> <summary>Hint 2</summary> If sorting is allowed, can you compare sorted versions of both strings? </details> <details> <summary>Hint 3</summary> If the strings contain Unicode characters, consider using a `Map()` instead of a plain object. </details>

## Approach 1: Hashmap Frequency Count (O(n))

### **Key Observations:**

- An anagram means that both strings **must have the same characters with the same frequency**.
- We can solve this problem using a **frequency counter (hashmap)**.

### **Steps:**

1. **Check Lengths**:
   - If `s.length !== t.length`, return `false` immediately.
2. **Build Frequency Map**:
   - Count occurrences of each character in `s` using a hashmap.
   - Decrease the count while iterating through `t`.
3. **Validate Counts**:
   - If all counts are `0` at the end, return `true`; otherwise, return `false`.

### **Algorithm Complexity**

#### **Time Complexity:**

- **O(n)** → We iterate through `s` and `t` once.

#### **Space Complexity:**

- **O(1)** → Since we store at most **26 characters** (for lowercase English letters), space usage is constant.

### **Why is This Solution Optimal?**

**Efficiency**: Uses a **single pass** with hashmap lookups in **O(1)** time.  
**No Sorting Needed**: Unlike sorting-based approaches (**O(n log n)**), this runs in **O(n)**.  
**Handles Edge Cases**: Works for **single-letter strings** and **large inputs efficiently**.

## **Alternative Approach: Sorting (O(n log n))**

### **Steps**

1. **Sort both `s` and `t`.**
2. **If the sorted strings are equal, return `true`; otherwise, return `false`.**

### **Complexity**

- **Time Complexity**: **O(n log n)** (due to sorting).

- **Space Complexity**: **O(n)** (due to sorting storage).

```javascript
var isAnagram = function (s, t) {
  return (
    s.length === t.length && [...s].sort().join("") === [...t].sort().join("")
  );
};
```

## Follow-up: Unicode Support

For Unicode strings, use `Map()` instead of a plain object `{}`:

```javascript
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
    if (charCount.get(char) === 0) charCount.delete(char);
  }

  return charCount.size === 0;
};
```

- Handles Unicode characters correctly
- Avoids prototype-related issues with `{}`
- Still runs in **O(n)** time

## **Final Thoughts**

- Best Approach: `Hashmap (O(n))`
- Alternative: `Sorting (O(n log n))`
- Unicode-Safe: Use `Map()`
- Edge Cases Covered: Empty strings, Single-character words, Large inputs

🚀 Hashmap is the fastest and most efficient solution!

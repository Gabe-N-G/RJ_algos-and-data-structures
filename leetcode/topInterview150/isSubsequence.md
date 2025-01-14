# Is Subsequence

Link: [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.  
For example:

- `"ace"` is a subsequence of `"abcde"`.
- `"aec"` is **not** a subsequence of `"abcde"`.

## Examples

### Example 1

```javascript
Input: (s = "abc"), (t = "ahbgdc");
Output: true;
```

**Explanation**:
The characters `'a'`, `'b'`, and `'c'` appear in `t` in the same order as in `s`.

### Example 2

```javascript
Input: (s = "axc"), (t = "ahbgdc");
Output: false;
```

**Explanation**:
Although `'a'` appears in `t`, the character `'x'` does not, so s is not a subsequence of `t`.

## Setup

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use two pointers to traverse both strings. </details> <details> <summary>Hint 2</summary> Move the pointer for `s` only when a match is found in `t`. </details> <details> <summary>Hint 3</summary> If the pointer for `s` reaches the end, `s` is a subsequence of `t`. </details>

## Approach

### Key Observations:

1. Use a **two-pointer technique**:
   - One pointer (`i`) traverses `s`.
   - The other pointer (`j`) traverses `t`.
2. If a character in `s` matches a character in `t`, move the pointer for `s`.
3. Always move the pointer for `t`.
4. If the pointer for `s` reaches the end of `s`, then `s` is a subsequence of `t`.

### Steps:

#### 1. Initialize Two Pointers:

- `i = 0` (to traverse `s`).
- `j = 0` (to traverse `t`).

#### 2. Traverse `t`:

- If `s[i] === t[j]`, increment `i` (move the pointer for `s`).
- Always increment `j` (move the pointer for `t`).

#### 3. After Traversing `t`, Check:

- If `i === s.length`, return `true` (all characters of `s` were matched in order).
- Otherwise, return `false`.

## Algorithm Complexity

### Time Complexity:

- **O(n):**  
  Where `n` is the length of `t`.  
  The algorithm processes each character of `t` at most once.

### Space Complexity:

- **O(1):**  
  The solution uses a constant amount of space.

## Example Walkthrough

### Input: `s = "abc"`, `t = "ahbgdc"`

#### Step 1: Initialize Pointers

- `i = 0`, `j = 0`.

#### Step 2: Traverse `t`

- Compare `s[0]` (`'a'`) with `t[0]` (`'a'`): Match → Increment `i` to 1.
- Compare `s[1]` (`'b'`) with `t[1]` (`'h'`): No match → Increment `j` to 2.
- Compare `s[1]` (`'b'`) with `t[2]` (`'b'`): Match → Increment `i` to 2.
- Compare `s[2]` (`'c'`) with `t[3]` (`'g'`): No match → Increment `j` to 4.
- Compare `s[2]` (`'c'`) with `t[4]` (`'d'`): No match → Increment `j` to 5.
- Compare `s[2]` (`'c'`) with `t[5]` (`'c'`): Match → Increment `i` to 3.

#### Step 3: Check Result

- `i === s.length` → Return `true`.

### Output: `true`

## Why is this Solution Optimal?

### Two-Pointer Approach:

#### Efficient Time Complexity:

- Processes each character in `t` at most once, making it **O(n)**.

#### Space Efficiency:

- No additional data structures are needed, making it **O(1)**.

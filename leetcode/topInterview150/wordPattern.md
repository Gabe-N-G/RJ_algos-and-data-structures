# Word Pattern

Link: [Word Pattern](https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Easy

## The Ask

Given a `pattern` and a string `s`, determine if `s` follows the same pattern.

Here, **"follows"** means there is a one-to-one **bijection** between:

- A letter in `pattern` and a unique word in `s`.
- A unique word in `s` and a letter in `pattern`.

### Rules:

- Each **letter** in `pattern` maps to **exactly one** unique word in `s`.
- Each **unique word** in `s` maps to **exactly one** letter in `pattern`.
- No two **letters** map to the same word, and no two **words** map to the same letter.

## Examples

### Example 1

```javascript
Input: (pattern = "abba"), (s = "dog cat cat dog");
Output: true;
```

**Explanation**:
The bijection can be established as:

- `'a'` → `"dog"`
- `'b'` → `"cat"`

### Example 2

```javascript
Input: (pattern = "abba"), (s = "dog cat cat fish");
Output: false;
```

**Explanation**:

- `'a'` → `"dog"`
- `'b'` → `"cat"`
- But the second `'a'` must map to `"dog"` again, not `"fish"`.

### Example 3

```javascript
Input: (pattern = "aaaa"), (s = "dog cat cat dog");
Output: false;
```

**Explanation**:

- `'a'` is mapped to `"dog"`, but the rest must also be `"dog"` to be valid.

## Setup

```javascript
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use two hashmaps: One to map `pattern[i] → word` and another to map `word → pattern[i]`. </details> <details> <summary>Hint 2</summary> If `pattern` and `s.split(" ")` are different lengths, return `false` immediately. </details> <details> <summary>Hint 3</summary> Check for **inconsistent mappings**: If a letter or word is mapped inconsistently, return `false`. </details>

## Approach: Hashmap Technique

### Key Observations:

1. **One-to-One Mapping:**

   - Every letter in `pattern` must map to exactly one word in `s`.
   - Every word in `s` must map to exactly one letter in `pattern`.

2. **Using Two Hashmaps:**

   - `pMap` for **pattern → word** mapping.
   - `sMap` for **word → pattern** mapping.

3. **Check for Mapping Consistency:**
   - If a letter in `pattern` is already mapped to a word, ensure it maps to the **same** word.
   - If a word in `s` is already mapped to a letter, ensure it maps to the **same** letter.
   - If there is an inconsistency, return `false`.

### Steps:

1. **Split `s` into Words:**

   - Convert `s` into an array using `split(" ")`.
   - If `pattern.length !== s.length`, return `false`.

2. **Use Two Hashmaps:**

   - `pMap` stores **pattern → word**.
   - `sMap` stores **word → pattern**.

3. **Iterate Through `pattern` and `s`:**

   - If `pattern[i]` is already mapped but **does not match** `s[i]`, return `false`.
   - If `s[i]` is already mapped but **does not match** `pattern[i]`, return `false`.
   - Otherwise, create a new mapping.

4. **Return `true`** if all mappings are consistent.

## Algorithm Complexity

### Time Complexity:

- **O(n)**
  - Splitting `s` takes **O(n)**.
  - Iterating through `pattern` and `s` takes **O(n)**.

### Space Complexity:

- **O(u)**
  - `u` is the number of **unique** words and characters in `pattern` and `s`.
  - The hashmaps store at most **26 letters** (for `pattern`) and at most **n words** (for `s`).

## Example Walkthrough

### Example 1

```javascript
Input: (pattern = "abba"), (s = "dog cat cat dog");
```

- `words = ["dog", "cat", "cat", "dog"]`
- Mappings:
  - `'a'` → `"dog"`
  - `'b'` → `"cat"`
  - `'b'` → `"cat"` ✅ (consistent)
  - `'a'` → `"dog"` ✅ (consistent)
- Output: `true`

### Example 2

```javascript
Input: (pattern = "abba"), (s = "dog cat cat fish");
```

- `words = ["dog", "cat", "cat", "fish"]`
- Mappings:
  - `'a'` → `"dog"`
  - `'b'` → `"cat"`
  - `'b'` → `"cat"` ✅ (consistent)
  - `'a'` → `"fish"` ❌ (conflict)
- Output: `false`

### Example 3

```javascript
Input: (pattern = "aaaa"), (s = "dog cat cat dog");
```

- `words = ["dog", "cat", "cat", "dog"]`
- Mappings:
  - `'a'` → `"dog"`
  - `'a'` → `"cat"` ❌ (conflict)
- Output: `false`

## Why is This Solution Optimal?

### Efficiency:

- Uses **O(n)** time complexity with only two hashmaps.

### Simplicity:

- Uses a **direct hashmap lookup** instead of looping to check mappings.

### Edge Case Handling:

- Handles:
  - **Different lengths** (`"abc"` vs. `"cat dog"` → `false`).
  - **Single-letter mappings** (`"a"` vs. `"cat"` → `true`).
  - **Large inputs** efficiently.

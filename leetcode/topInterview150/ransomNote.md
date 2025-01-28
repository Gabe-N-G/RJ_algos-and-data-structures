# Ransom Note

Link: [Ransome Note](https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.  
Each letter in `magazine` can only be used once in `ransomNote`.

## Examples

### Example 1

```javascript
Input: (ransomNote = "a"), (magazine = "b");
Output: false;
```

### Example 2

```javascript
Input: (ransomNote = "aa"), (magazine = "ab");
Output: false;
```

### Example 3

```javascript
Input: (ransomNote = "aa"), (magazine = "aab");
Output: true;
```

## Setup

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a hashmap to count the occurrences of each character in `magazine`. </details> <details> <summary>Hint 2</summary> For each character in `ransomNote`, check if it exists in the hashmap with a positive count. </details> <details> <summary>Hint 3</summary> Decrement the character count in the hashmap whenever it is used. If a character is not available, return `false`. </details>

## Approach: Hashmap Technique

### Key Observations:

- Use a frequency map (hashmap) to count the occurrences of each letter in `magazine`.
- For each letter in `ransomNote`, check if it exists in the hashmap:
  - If yes, decrement its count in the hashmap.
  - If no or the count reaches zero, return `false` because there are not enough letters available.
- If all letters in `ransomNote` are accounted for, return `true`.

### Steps:

1. **Build Frequency Map for `magazine`:**

   - Traverse `magazine` and record the frequency of each character in a hashmap.

2. **Check Against `ransomNote`:**

   - For each character in `ransomNote`:
     - If the character exists in the hashmap with a positive count, decrement its count.
     - If not, return `false`.

3. **Return `true`** if all characters in `ransomNote` can be matched.

### Algorithm Complexity

#### Time Complexity:

- **O(m + n):**
  - **O(m):** Build the hashmap for `magazine` (where `m` is the length of `magazine`).
  - **O(n):** Traverse `ransomNote` (where `n` is the length of `ransomNote`).

#### Space Complexity:

- **O(1):**
  - The hashmap uses a constant amount of space since there are at most 26 lowercase English letters.

### Example Walkthrough

#### Example 1

```javascript
Input: (ransomNote = "a"), (magazine = "b");
```

- `magazineMap = { b: 1 }`
- Traverse `ransomNote`:
  - `'a'` not found in `magazineMap` → Return `false`.
- Output: `false`

#### Example 2

```javascript
Input: (ransomNote = "aa"), (magazine = "aab");
```

- `magazineMap = { a: 2, b: 1 }`
- Traverse `ransomNote`:
  - `'a'` found → Decrement: `magazineMap = { a: 1, b: 1 }`.
  - `'a'` found again → Decrement: `magazineMap = { a: 0, b: 1 }`.
- All letters matched.
- Output: `true`

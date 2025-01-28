# Isomorphic Strings

Link: [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given two strings `s` and `t`, determine if they are **isomorphic**.  
Two strings are isomorphic if the characters in `s` can be replaced to get `t`.  
All occurrences of a character must be replaced with another character while preserving the order of characters.  
No two characters may map to the same character, but a character may map to itself.

## Examples

### Example 1

```javascript
Input: (s = "egg"), (t = "add");
Output: true;
```

**Explanation**:
The strings `s` and `t` can be made identical by:

- Mapping `'e'` to `'a'`.
- Mapping `'g'` to `'d'`.

### Example 2

```javascript
Input: (s = "foo"), (t = "bar");
Output: false;
```

**Explanation**:
The strings `s` and `t` cannot be made identical because `'o'` needs to map to both `'a'` and `'r'`.

### Example 3

```javascript
Input: (s = "paper"), (t = "title");
Output: true;
```

**Explanation**:
The strings `s` and `t` can be made identical by:

- Mapping `'p'` to `'t'`.
- Mapping `'a'` to `'i'`.
- Mapping `'e'` to `'l'`.
- Mapping `'r'` to `'e'`.

## Setup

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use two hashmaps (or frequency maps) to track the character mappings from `s -> t` and `t -> s`. </details> <details> <summary>Hint 2</summary> Ensure that no two characters in `s` map to the same character in `t`, and vice versa. </details> <details> <summary>Hint 3</summary> Iterate through both strings simultaneously. If a mapping conflict occurs, return `false`. </details>

## Approach: Hashmap Technique

### Key Observations:

1. **One-to-One Mapping:**

   - Every character in `s` must map to exactly one character in `t`.
   - Similarly, every character in `t` must map to exactly one character in `s`.

2. **Hashmaps for Bidirectional Mapping:**

   - Use two hashmaps:
     - `sToTMap` for mapping characters from `s` to `t`.
     - `tToSMap` for mapping characters from `t` to `s`.

3. **Check Mapping Consistency:**
   - Traverse both strings simultaneously.
   - For each character pair (`charS`, `charT`):
     - If `charS` is already mapped, ensure it maps to `charT`.
     - If `charT` is already mapped, ensure it maps to `charS`.
     - If there is any inconsistency, return `false`.
   - Return `true` if all mappings are consistent.

### Steps:

1. **Initialize Two Hashmaps:**

   - `sToTMap` for characters in `s` mapping to `t`.
   - `tToSMap` for characters in `t` mapping to `s`.

2. **Traverse Strings:**

   - For each character in `s` and `t`:
     - Check if `sToTMap` and `tToSMap` have consistent mappings.
     - If a mapping conflict occurs, return `false`.

3. **Return `true`** if the traversal completes without conflicts.

### Algorithm Complexity

#### Time Complexity:

- **O(n):**
  - We traverse both strings once, where `n` is the length of `s` (or `t`).

#### Space Complexity:

- **O(u):**
  - `u` is the number of unique characters in `s` and `t`.
  - The hashmaps store at most `u` key-value pairs.

### Example Walkthrough

#### Example 1

```javascript
Input: (s = "egg"), (t = "add");
```

- Initialize: `sToTMap = {}`, `tToSMap = {}`.
- Traverse:
  - `i = 0`: Map `'e' -> 'a'`, `'a' -> 'e'`.
  - `i = 1`: Map `'g' -> 'd'`, `'d' -> 'g'`.
  - `i = 2`: Map `'g' -> 'd'`, `'d' -> 'g'` (consistent).
- Return `true`.
- Output: `true`

#### Example 2

```javascript
Input: (s = "foo"), (t = "bar");
```

- Initialize: `sToTMap = {}`, `tToSMap = {}`.
- Traverse:
  - `i = 0`: Map `'f' -> 'b'`, `'b' -> 'f'`.
  - `i = 1`: Map `'o' -> 'a'`, `'a' -> 'o'`.
  - `i = 2`: Conflict! `'o'` cannot map to both `'a'` and `'r'`.
- Return `false`.
- Output: `false`

#### Example 3

```javascript
Input: (s = "paper"), (t = "title");
```

- Initialize: `sToTMap = {}`, `tToSMap = {}`.
- Traverse:
  - `i = 0`: Map `'p' -> 't'`, `'t' -> 'p'`.
  - `i = 1`: Map `'a' -> 'i'`, `'i' -> 'a'`.
  - `i = 2`: Map `'p' -> 't'`, `'t' -> 'p'` (consistent).
  - `i = 3`: Map `'e' -> 'l'`, `'l' -> 'e'`.
  - `i = 4`: Map `'r' -> 'e'`, `'e' -> 'r'`.
- Return true.
- Output: true

### Why is This Solution Optimal?

1. **Efficiency:**

   - Processes each character once, ensuring linear time complexity.

2. **Space Optimization:**

   - Uses two hashmaps with a size proportional to the number of unique characters.

3. **Handles Edge Cases:**
   - Handles strings of different lengths, duplicate characters, and empty strings gracefully.

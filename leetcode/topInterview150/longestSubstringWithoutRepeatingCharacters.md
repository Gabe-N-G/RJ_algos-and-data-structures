# Longest Substring Without Repeating Characters

**Link:** [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Medium

## The Ask

Given a string `s`, find the length of the longest **substring** without repeating characters.

## Examples

### Example 1

```javascript
Input: s = "abcabcbb";
Output: 3;
```

**Explanation**:

The answer is `"abc"`, with the length of `3`.

### Example 2

```javascript
Input: s = "bbbbb";
Output: 1;
```

**Explanation**:

The answer is `"b"`, with the length of `1`.

### Example 3

```javascript
Input: s = "pwwkew";
Output: 3;
```

**Explanation**:

The answer is `"wke"`, with the length of `3`.

Notice that the answer must be a substring. `"pwke"` is a subsequence, not a substring.

## Setup

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Code goes here
};
```

<details>
<summary>Hint 1</summary>
Use the **sliding window technique** to dynamically adjust the size of the substring as you traverse the string.
</details>

<details>
<summary>Hint 2</summary>
Maintain a map to keep track of the **last seen index** of each character. This allows you to efficiently skip over duplicate characters.
</details>

<details>
<summary>Hint 3</summary>
When a duplicate character is found within the current window, move the left pointer to **one position after the duplicate's last occurrence**.
</details>

<details>
<summary>Hint 4</summary>
At each step, calculate the **length of the current substring** (`right - left + 1`) and update the result if it's larger than the previously recorded length.
</details>

## Approach: Sliding Window with Character Index Map (O(n))

### Key Observations:

#### Sliding Window Technique:

- Use a **variable-sized sliding window** to track the current substring without duplicates.
- If a duplicate character is encountered, **shrink the window** from the left until it becomes valid again.

#### Track Characters with a Map:

- Use a map (`charIndexMap`) to store the **last seen index** of each character.
- This allows you to efficiently handle duplicates by jumping the `left` pointer to `charIndexMap[char] + 1`.

### Steps:

#### 1. Initialize Variables:

- `left` pointer to track the start of the sliding window.
- `maxLength` to store the length of the longest substring.
- A `charIndexMap` to store the last seen index of each character.

#### 2. Traverse the String with a Right Pointer:

- For each character at index `right`:
  - If the character exists in `charIndexMap` **and** its last seen index is within the current window (`charIndexMap[char] >= left`), update the `left` pointer to `charIndexMap[char] + 1`.
  - Update `charIndexMap` with the current index of the character.
  - Calculate the current window size: `right - left + 1` and update `maxLength`.

#### 3. Return Result:

- Return `maxLength` as the result.

### Algorithm Complexity

#### Time Complexity:

- **O(n):**  
  Each character is processed at most twice (once when expanding the window, once when shrinking).

#### Space Complexity:

- **O(n):**  
  The `charIndexMap` stores up to `n` characters, where `n` is the length of the string.

## Example Walkthrough

### Input: `s = "abcabcbb"`

#### Initialization:

- `left = 0`, `maxLength = 0`, `charIndexMap = {}`.

#### Traverse with Right Pointer:

1. **Right = 0 (char = 'a'):**  
   `charIndexMap = { a: 0 }`, `maxLength = 1`.
2. **Right = 1 (char = 'b'):**  
   `charIndexMap = { a: 0, b: 1 }`, `maxLength = 2`.
3. **Right = 2 (char = 'c'):**  
   `charIndexMap = { a: 0, b: 1, c: 2 }`, `maxLength = 3`.
4. **Right = 3 (char = 'a'):**  
   `charIndexMap = { a: 3, b: 1, c: 2 }`, `left = 1`, `maxLength = 3`.
5. **Right = 4 (char = 'b'):**  
   `charIndexMap = { a: 3, b: 4, c: 2 }`, `left = 2`, `maxLength = 3`.
6. **Right = 5 (char = 'c'):**  
   `charIndexMap = { a: 3, b: 4, c: 5 }`, `left = 3`, `maxLength = 3`.
7. **Right = 6 (char = 'b'):**  
   `charIndexMap = { a: 3, b: 6, c: 5 }`, `left = 5`, `maxLength = 3`.
8. **Right = 7 (char = 'b'):**  
   `charIndexMap = { a: 3, b: 7, c: 5 }`, `left = 7`, `maxLength = 3`.

#### Output:

- `maxLength = 3`.

## Why is This Solution Optimal?

### Sliding Window Efficiency:

- The sliding window ensures we only traverse the string once, making the algorithm run in linear time.

### Map for Character Indexes:

- The map allows for efficient handling of duplicates and minimizes unnecessary operations.

### Handles Edge Cases:

- Empty strings, strings with all unique characters, and strings with all duplicates are handled gracefully.

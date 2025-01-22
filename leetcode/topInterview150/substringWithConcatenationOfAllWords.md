# Substring with Concatenation of All Words

**Link:** [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Hard

## The Ask

Given a string `s` and an array of strings `words`, find all the starting indices of substrings in `s` that are formed by the concatenation of **all words** in `words` (in any order, without any intervening characters). Each word in `words` must be used exactly once.

You can return the indices in any order.

## Examples

### Example 1

```javascript
Input: (s = "barfoothefoobarman"), (words = ["foo", "bar"]);
Output: [0, 9];
```

**Explanation**:

- Substring starting at index `0` is `"barfoo"` (a concatenation of `["bar", "foo"]`).
- Substring starting at index `9` is `"foobar"` (a concatenation of `["foo", "bar"]`).

### Example 2

```javascript
Input: (s = "wordgoodgoodgoodbestword"),
  (words = ["word", "good", "best", "word"]);
Output: [];
```

**Explanation**:

There is no valid concatenated substring.

### Example 3

```javascript
Input: (s = "barfoofoobarthefoobarman"), (words = ["bar", "foo", "the"]);
Output: [6, 9, 12];
```

**Explanation**:

- Substring starting at index `6` is `"foobarthe"`.
- Substring starting at index `9` is `"barthefoo"`.
- Substring starting at index `12` is `"thefoobar"`.

## Setup

```javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // Code goes here
};
```

<details>
<summary>Hint 1</summary>
All words in `words` are of the same length. Use this property to extract substrings of fixed size while sliding the window.
</details>

<details>
<summary>Hint 2</summary>
Use a frequency map to track the count of each word in `words`. This will help you validate if the current substring matches all the words.
</details>

<details>
<summary>Hint 3</summary>
Think of sliding a window across the string `s` while checking substrings of size equal to `words.length * lengthOfWord`. Use two pointers to adjust the window dynamically.
</details>

<details>
<summary>Hint 4</summary>
If you encounter a word that is not in `words`, reset the current window and move the left pointer.
</details>

## Approach: Sliding Window

### Key Observations:

1. **Fixed Word Length:**
   - All words in `words` are of the same length.
2. **Concatenated Substring Length:**
   - The total length of the concatenated substring is `words.length * lengthOfWord`.
3. **Efficient Validation:**
   - Use a **sliding window** to check substrings of this length efficiently.
   - To validate substrings, maintain a **frequency map** of `words` and compare it with the words in the current substring.

### Steps:

#### Precompute Word Information:

1. Create a **frequency map** for `words` to count the occurrences of each word.
2. Compute:
   - `lengthOfWord` (length of each word).
   - `substringLength` (total length of the concatenated substring).

#### Sliding Window:

1. For each possible starting position within the range of `lengthOfWord`, slide a window of size `substringLength`.
2. Use a secondary frequency map (`seen`) to count the occurrences of words in the current window.
3. If `seen` matches the frequency map of `words`, record the starting index.

#### Skip Invalid Windows:

1. If a word not in `words` is encountered, reset the window and move to the next starting position.

#### Edge Cases:

1. If `words` is empty or `s` is shorter than `substringLength`, return an empty array.

### Algorithm Complexity

#### Time Complexity:

- **O(n \* lengthOfWord):**
  - We iterate over all possible starting positions (`lengthOfWord` iterations).
  - For each iteration, we check substrings of size `substringLength` in linear time relative to the input.

#### Space Complexity:

- **O(k):**
  - `k` is the number of unique words in `words`.
  - We use a frequency map for `words` and `seen`.

### Example Walkthrough

#### Input: `s = "barfoothefoobarman"`, `words = ["foo", "bar"]`

1. **Initialize Variables:**

   - `lengthOfWord = 3`, `substringLength = 6`, `wordFreq = { "foo": 1, "bar": 1 }`.

2. **Sliding Window:**

   - **i = 0:**
     - Window: `"barfoo"` → Matches → Add `0` to result.
     - Window: `"foobar"` → Matches → Add `9` to result.
   - **i = 1 and i = 2:**
     - No valid matches found.

3. **Output:** `[0, 9]`

### Why is This Solution Optimal?

#### Efficiency:

- By sliding the window and using frequency maps, we avoid recomputing the word counts repeatedly.

#### Handles Edge Cases:

- Handles cases with overlapping substrings, invalid words, and duplicate words efficiently.

#### Scalability:

- The algorithm works efficiently for large inputs due to the sliding window approach and avoids unnecessary recomputation.

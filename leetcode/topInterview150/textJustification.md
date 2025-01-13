# Text Justification

Link: [Text Justification](https://leetcode.com/problems/text-justification/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Hard

## The Ask

Given an array of strings `words` and an integer `maxWidth`, format the text such that:

1. Each line has exactly `maxWidth` characters.
2. The text is fully justified (both left and right aligned).
3. Words are packed in a **greedy approach**—pack as many words as possible into each line.
4. **Extra spaces** are distributed as evenly as possible:
   - If the number of spaces does not divide evenly, more spaces go to the **left** slots.
   - For the **last line**, it should be **left-justified**, with no extra spaces between words.

## Examples

### Example 1

```javascript
Input: (words = [
  "This",
  "is",
  "an",
  "example",
  "of",
  "text",
  "justification.",
]),
  (maxWidth = 16);
Output: ["This    is    an", "example  of text", "justification.  "];
```

### Example 2

```javascript
Input: (words = ["What", "must", "be", "acknowledgment", "shall", "be"]),
  (maxWidth = 16);
Output: ["What   must   be", "acknowledgment  ", "shall be        "];
```

Explanation:

- The last line is "shall be " instead of "shall be" because the last line must be left-justified.
- The second line is also left-justified because it contains only one word.

### Example 3

```javascript
Input: (words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
]),
  (maxWidth = 20);
Output: [
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  ",
];
```

## Setup

```javascript
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a greedy approach to pack words into each line. Keep track of the current line length and add words until adding the next word would exceed `maxWidth`. </details> <details> <summary>Hint 2</summary> For each line: - Distribute extra spaces evenly between words. - If there are leftover spaces, assign them to the slots on the left first. </details> <details> <summary>Hint 3</summary> For the **last line**, or lines containing only one word, ensure it is **left-justified** and padded with trailing spaces. </details>

## Approach

### Key Observations:

#### Line Packing:

- Use a greedy approach to fit as many words as possible into each line without exceeding `maxWidth`.

#### Spacing Rules:

1. **If the line is not the last line:**
   - Distribute spaces evenly between words.
   - If extra spaces are left, assign them to the leftmost slots first.
2. **If the line is the last line:**
   - Left-justify the line and pad the remaining spaces at the end.

### Implementation Steps:

1. **Traverse the `words` array:**
   - Maintain a list of words for the current line and their total length.
2. **Format the Current Line:**
   - When adding another word would exceed `maxWidth`, format the current line and reset for the next one.
3. **Handle the Last Line Separately:**
   - For the last line, left-justify the words and pad trailing spaces.

### Steps:

#### 1. Greedy Packing:

- Traverse `words` and pack as many as possible into a single line without exceeding `maxWidth`.
- Maintain a `currentLine` array to store the words for the current line and track their total length.

#### 2. Line Justification:

- **For non-last lines:**
  - Distribute spaces evenly between words in `currentLine`.
  - Assign any leftover spaces to the leftmost slots.
- **For the last line:**
  - Left-justify the words by joining them with a single space and padding the remainder with trailing spaces.

#### 3. Output the Lines:

- After processing all the words, format the remaining line as the last line.

## Algorithm Complexity

### Time Complexity:

- **O(n):** Traverse the `words` array once and process each word at most twice (once for packing and once for justification).

### Space Complexity:

- **O(n):** Additional space is used for the result array.

## Example Walkthrough

### Input: `words = ["This", "is", "an", "example", "of", "text", "justification."]`, `maxWidth = 16`

#### Step 1: Packing Words

- **Line 1:** `"This is an"`
  - Length = 10 (with spaces). Add extra spaces: `"This    is    an"`.
- **Line 2:** `"example of text"`
  - Length = 16 (already justified).
- **Line 3:** `"justification."`
  - Left-justify and pad with spaces: `"justification.  "`.

#### Output:

```javascript
["This    is    an", "example  of text", "justification.  "];
```

## Why is this Solution Optimal?

### Greedy Line Packing:

- The greedy approach ensures each line fits the maximum number of words without exceeding `maxWidth`.

### Space Distribution:

- The even distribution of spaces satisfies the problem's requirements while handling edge cases (e.g., single-word lines, last line).

### Efficiency:

- The algorithm processes the `words` array in linear time, ensuring scalability for large inputs.

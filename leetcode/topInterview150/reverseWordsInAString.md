# Reverse Words in a String

Link: [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an input string `s`, reverse the **order of the words**.  
The returned string should:

- Contain words in reverse order separated by a single space.
- Not contain leading or trailing spaces.
- Not contain multiple spaces between words.

## Examples

### Example 1

```javascript
Input: s = "the sky is blue";
Output: "blue is sky the";
```

### Example 2

```javascript
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

### Example 3

```javascript
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

## Setup

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use the `.split()` method to break the string into words by whitespace and filter out empty strings caused by extra spaces. </details> <details> <summary>Hint 2</summary> Reverse the order of the words array using `.reverse()`. </details> <details> <summary>Hint 3</summary> Join the reversed words back into a single string using `.join(' ')`. </details>

## Approach

### Key Observations:

1. Use `.trim()` to remove leading and trailing spaces from the input string.
2. Use `.split(' ')` to split the string into an array of words.
3. Filter out empty strings caused by extra spaces.
4. Reverse the array of words using `.reverse()`.
5. Use `.join(' ')` to join the words back together with a single space.

### Steps:

#### 1. Trim Leading and Trailing Spaces:

- Use `s.trim()` to remove unnecessary spaces.

#### 2. Split and Filter Words:

- Split the string into an array of words using `s.split(' ')`.
- Filter out empty strings caused by multiple spaces using `filter(word => word !== '')`.

#### 3. Reverse Words:

- Reverse the array using `.reverse()`.

#### 4. Join Words:

- Join the reversed words with a single space using `.join(' ')`.

## Algorithm Complexity

### Time Complexity:

- **O(n):**
  - Splitting the string into words takes O(n).
  - Filtering and reversing the array take O(n).
  - Joining the words takes O(n).

### Space Complexity:

- **O(n):**
  - The array of words requires O(n) space.

## Example Walkthrough

### Input: `s = "  hello world  "`

#### 1. Trim Spaces:

- `s.trim()` → `"hello world"`.

#### 2. Split and Filter Words:

- `"hello world".split(' ')` → `["hello", "world"]`.
- No empty strings, so filtering doesn’t change the array: `["hello", "world"]`.

#### 3. Reverse Words:

- `["hello", "world"].reverse()` → `["world", "hello"]`.

#### 4. Join Words:

- `["world", "hello"].join(' ')` → `"world hello"`.

### Output: `"world hello"`

## Why is this Solution Optimal?

### Efficient Time Complexity:

- The algorithm runs in O(n) time by leveraging efficient string and array methods.

### Simple and Readable:

- The use of `.trim()`, `.split()`, `.filter()`, `.reverse()`, and `.join()` makes the code concise and easy to understand.

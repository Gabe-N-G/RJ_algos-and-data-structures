# Length of Last Word

Link: [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A **word** is defined as a maximal substring consisting of non-space characters only.

---

### Examples

#### Example 1

```javascript
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

#### Example 2

```javascript
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

#### Example 3

```javascript
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

### Setup

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> You can split the string into words using a built-in method and return the length of the last word. </details> <details> <summary>Hint 2</summary> To avoid additional space usage, consider traversing the string from the end and counting the characters of the last word directly. </details>

## Approach

This problem can be solved in two ways:

---

### 1. **Split Method (Simple and Readable):**

- Use the `split` method to divide the string `s` into words by splitting on spaces.
- Remove any leading/trailing spaces automatically handled by the split.
- Return the length of the last word in the resulting array.

---

### 2. **Optimal Solution (Traverse Backwards):**

To achieve \( O(1) \) space complexity, avoid splitting the string and instead traverse it from the end:

1. Start from the end of the string.
2. Skip any trailing spaces.
3. Count the characters of the last word until a space is encountered.
4. Return the count.

---

### Algorithm Complexity:

#### Split Method:

- **Time Complexity:** `O(n)`  
  Splitting the string and accessing the last word.
- **Space Complexity:** `O(n)`  
  Space required for the split array.

#### Optimal Solution (Traverse Backwards):

- **Time Complexity:** `O(n)`  
  Single traversal of the string.
- **Space Complexity:** `O(1)`  
  No additional space used.

# Group Anagrams

Link: [Group Anagrams - LeetCode](https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150)

### Difficulty: Medium

## The Ask

Given an array of strings `strs`, group the **anagrams** together.  
You can return the answer in any order.

### Example 1:

#### Input:

```plaintext
strs = ["eat","tea","tan","ate","nat","bat"]

```

#### Output:

```plaintext
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### Example 2:

#### Input:

```plaintext
strs = [""]
```

#### Output:

```plaintext
[[""]]
```

### Example 3:

#### Input:

```plaintext
strs = ["a"]
```

#### Output:

```plaintext
[["a"]]
```

## Setup

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Think about how you can identify anagrams efficiently. Sorting may help! </details> <details> <summary>Hint 2</summary> If two words are anagrams, their sorted versions will be identical. </details>

## Approach: Hashmap (Object) Grouping

### Key Observations

- Anagrams contain the same characters in different orders.
- Sorting each word will produce the same result for all anagrams.
- A hashmap (object) can be used to group words by their sorted version.

### Steps

1. **Initialize a hashmap (`anagramGroups`)**
   - The key is the sorted version of the word.
   - The value is an array of anagrams.
2. **Iterate through `strs`:**
   - Sort each word alphabetically.
   - Use the sorted word as a key in `anagramGroups`.
   - Append the original word to the corresponding group.
3. **Return** the grouped anagrams as an array of values from the hashmap.

### Algorithm Complexity

- **Time Complexity:**
  - `O(n * k log k)`: Sorting each word takes `O(k log k)` for word length `k`, iterating through `n` words.
- **Space Complexity:**
  - `O(n)`: Storing all words in the hashmap.

### Example Walkthrough

#### **Input:**

```plaintext
strs = ["eat","tea","tan","ate","nat","bat"]
```

#### Processing:

| Original Word | Sorted Key | Grouping in `anagramGroups`                                               |
| ------------- | ---------- | ------------------------------------------------------------------------- |
| "eat"         | "aet"      | `{ "aet": ["eat"] }`                                                      |
| "tea"         | "aet"      | `{ "aet": ["eat", "tea"] }`                                               |
| "tan"         | "ant"      | `{ "aet": ["eat", "tea"], "ant": ["tan"] }`                               |
| "ate"         | "aet"      | `{ "aet": ["eat", "tea", "ate"], "ant": ["tan"] }`                        |
| "nat"         | "ant"      | `{ "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"] }`                 |
| "bat"         | "abt"      | `{ "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"] }` |

#### Final Output:

```plaintext
[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
```

### Why is This Solution Optimal?

✅ **Efficient Sorting Approach** → Sorting each word takes `O(k log k)`, but avoids nested loops.  
✅ **Uses Hashmap for Grouping** → Grouping is `O(1)` on average due to hashmap lookups.  
✅ **Handles Edge Cases** → Works for empty strings, single-character words, and large inputs.

🚀 Sorting each word provides a quick and efficient way to group anagrams!

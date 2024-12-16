# Two-Pointer Technique

The **two-pointer technique** is a common algorithmic strategy used to solve problems involving arrays, strings, or linked lists. It involves using two pointers (or indices) to traverse the data structure. The two pointers can move in various ways (e.g., towards each other, in the same direction, or at different speeds) depending on the problem.

This technique is especially useful for problems like:

1. Finding pairs in a sorted array.
2. Removing duplicates.
3. Reversing arrays or linked lists.
4. Partitioning arrays.
5. Solving sliding window problems.

## Types of Two-Pointer Approaches

**Opposite Direction**: Two pointers start at opposite ends of the array and move towards each other.

- Example: Checking if a string is a palindrome.

**Same Direction**: Two pointers traverse the array in the same direction but at different speeds or for different purposes.

- Example: Finding the length of the longest subarray with no repeating characters.

## Examples of Two-Pointer Technique

### 1. Checking for a Palindrome
```javascript
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false; // Mismatch found
        left++;
        right--;
    }
    return true; // No mismatch
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

Here, the two pointers (left and right) start from opposite ends of the string and move towards each other.

### 2. Finding Two Numbers in a Sorted Array that Sum to a Target

```javascript
function twoSumSorted(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) return [left, right]; // Found the pair
        else if (sum < target) left++; // Increase the sum
        else right--; // Decrease the sum
    }
    return []; // No pair found
}

console.log(twoSumSorted([2, 3, 4, 6, 8, 11], 10)); // [1, 3]
console.log(twoSumSorted([1, 2, 3, 4], 8));         // []
```

Here, one pointer (left) starts at the beginning and the other (right) starts at the end. They move inward based on the sum of their elements.

### 3. Merging Two Sorted Arrays

```javascript
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0, result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }
    while (i < arr1.length) result.push(arr1[i++]); // Append remaining elements
    while (j < arr2.length) result.push(arr2[j++]); // Append remaining elements
    return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
```

Here, two pointers (i and j) traverse the two arrays and merge them while maintaining the sorted order.
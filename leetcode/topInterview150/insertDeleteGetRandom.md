# Insert Delete GetRandom

Link: [Insert Delete GetRandom](https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Implement the `RandomizedSet` class with the following methods:

1. **RandomizedSet()**  
   Initializes the `RandomizedSet` object.

2. **bool insert(int val)**  
   Inserts an item `val` into the set if not present.  
   Returns `true` if the item was not present, `false` otherwise.

3. **bool remove(int val)**  
   Removes an item `val` from the set if present.  
   Returns `true` if the item was present, `false` otherwise.

4. **int getRandom()**  
   Returns a random element from the current set of elements.  
   It is guaranteed that at least one element exists when this method is called.  
   Each element must have the same probability of being returned.

## Constraints

- Values for `val` are in the range `[-2^31, 2^31 - 1]`.
- At most `2 * 10^5` calls will be made to `insert`, `remove`, and `getRandom`.
- There will be at least one element in the data structure when `getRandom` is called.

### Objective:

All operations (`insert`, `remove`, and `getRandom`) must work in **average O(1)** time complexity.

## Example

### Example Input

```javascript
Input[
  ("RandomizedSet",
  "insert",
  "remove",
  "insert",
  "getRandom",
  "remove",
  "insert",
  "getRandom")
][([], [1], [2], [2], [], [1], [2], [])];
```

### Example Output

```javascript
Output[(null, true, false, true, 2, true, false, 2)];
```

## Explanation

1. `RandomizedSet randomizedSet = new RandomizedSet();`  
   Initializes an empty `RandomizedSet`.

2. `randomizedSet.insert(1);`  
   Inserts 1 into the set. Returns `true` as 1 was successfully inserted.

3. `randomizedSet.remove(2);`  
   Returns `false` as 2 does not exist in the set.

4. `randomizedSet.insert(2);`  
   Inserts 2 into the set. Returns `true`. The set now contains `[1, 2]`.

5. `randomizedSet.getRandom();`  
   Returns either 1 or 2 randomly with equal probability.

6. `randomizedSet.remove(1);`  
   Removes 1 from the set. Returns `true`. The set now contains `[2]`.

7. `randomizedSet.insert(2);`  
   Since 2 is already in the set, it returns `false`.

8. `randomizedSet.getRandom();`  
   Since 2 is the only number in the set, it always returns `2`.

## Setup

```javascript
var RandomizedSet = function () {
  // Code goes here
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // Code goes here
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // Code goes here
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // Code goes here
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

<details>
<summary>Hint 1</summary>
Use a **hash map (object)** to store the mapping of each value to its index in the array. This will allow O(1) insertion and deletion operations.
</details>

<details>
<summary>Hint 2</summary>
Use an **array** to store the values of the set. This will allow O(1) access to a random element using an index.
</details>

<details>
<summary>Hint 3</summary>
When removing an element, swap it with the last element in the array and then remove the last element. This prevents shifting elements in the array and keeps the time complexity O(1).
</details>

<details>
<summary>Hint 4</summary>
When checking for the existence of a value in the hash map (object), use `hasOwnProperty` to handle edge cases where the value is `0` or other falsy values.
</details>

<details>
<summary>Hint 5</summary>
To select a random element in O(1), use `Math.random()` to generate a random index between `0` and the array length minus 1, and return the element at that index in the array.
</details>

## Edge Cases

1. **Insert Duplicate Values:**  
   Input: `randomizedSet.insert(1); randomizedSet.insert(1);`  
   Output: `true, false`.

2. **Remove Non-existent Values:**  
   Input: `randomizedSet.remove(5);`  
   Output: `false`.

3. **Single Element:**  
   Input: `randomizedSet.insert(10); randomizedSet.getRandom();`  
   Output: `true, 10`.

4. **Large Dataset:**  
   Input: Large sequences of `insert`, `remove`, and `getRandom`.  
   Ensure the operations maintain O(1) performance.

## Approach

To achieve **O(1)** time complexity for `insert`, `remove`, and `getRandom`, we use the following data structures:

1. **Hash Map (Object in JavaScript):**

   - Maps each value to its index in the array.
   - This allows O(1) lookup for the presence of a value and its index.

2. **Dynamic Array (List):**
   - Stores the actual elements.
   - This allows O(1) access to elements for the `getRandom` operation.
   - Supports O(1) removal by swapping the element to be removed with the last element and popping it.

### Steps

#### Insert Operation:

1. Check if the value exists in the hash map.
   - If it exists, return `false`.
   - Otherwise, add the value to the end of the array and record its index in the hash map.
2. Return `true`.

#### Remove Operation:

1. Check if the value exists in the hash map.
   - If it doesn’t exist, return `false`.
2. If it exists:
   - Swap the element to be removed with the last element in the array.
   - Update the hash map for the last element.
   - Remove the last element from the array and delete it from the hash map.
3. Return `true`.

#### GetRandom Operation:

1. Randomly select an index from the array.
2. Return the element at the randomly selected index.

## Algorithm Complexity

### Time Complexity:

1. **`insert`:** O(1) (object lookup and array push).
2. **`remove`:** O(1) (object lookup, swap, and pop).
3. **`getRandom`:** O(1) (random index lookup in the array).

### Space Complexity:

- **O(n):** For the array and hash map, where `n` is the number of elements in the set.

## Why is this Solution Optimal?

1. **Hash Map (Object) for Constant Time Lookup:**  
   Ensures `insert` and `remove` operations are O(1) on average.

2. **Array for Random Access:**  
   Ensures `getRandom` operates in O(1) time by directly accessing an index.

3. **Efficient Removal:**  
   Uses a **swap-and-pop technique** to maintain O(1) time complexity for removal.

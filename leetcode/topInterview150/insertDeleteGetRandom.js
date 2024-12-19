const RandomizedSet = function () {
  this.map = {}; // To store value -> index mapping
  this.list = []; // To store the elements
};

/**
 * @param {number} val
 * @return {boolean}
 */
// Insert method
RandomizedSet.prototype.insert = function (val) {
  if (this.map.hasOwnProperty(val)) return false; // Check if val exists in the map

  this.map[val] = this.list.length; // Map value to its index in the array
  this.list.push(val); // Add value to the end of the array

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
// Remove method
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.hasOwnProperty(val)) return false; // Value does not exist

  // Get the index of the value to be removed
  const idx = this.map[val];
  const lastElement = this.list[this.list.length - 1];

  // Swap the value to be removed with the last element
  this.list[idx] = lastElement; // Replace the element at idx with the last element
  this.map[lastElement] = idx; // Update the map for the last element

  // Remove the last element
  this.list.pop();
  delete this.map[val]; // Remove the value from the map

  return true;
};

/**
 * @return {number}
 */
// GetRandom method
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.list.length); // Get a random index
  return this.list[randomIdx]; // Return the element at that index
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * const obj = new RandomizedSet()
 * const param_1 = obj.insert(val)
 * const param_2 = obj.remove(val)
 * const param_3 = obj.getRandom()
 */

const randomizedSet = new RandomizedSet();

// Test 1: Basic Operations
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2
console.log(randomizedSet.remove(1)); // true
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2

// Test 2: Single Element
// const singleElementSet = new RandomizedSet();
// console.log(singleElementSet.insert(10)); // true
// console.log(singleElementSet.getRandom()); // 10
// console.log(singleElementSet.remove(10)); // true

// Test 3: Handling 0
// const zeroSet = new RandomizedSet();
// console.log(zeroSet.insert(0)); // true
// console.log(zeroSet.getRandom()); // 0
// console.log(zeroSet.remove(0)); // true

// Test 4: Large Dataset
// const largeSet = new RandomizedSet();
// for (let i = 1; i <= 100000; i++) {
//   largeSet.insert(i);
// }
// for (let i = 1; i <= 50000; i++) {
//   largeSet.remove(i);
// }
// console.log(largeSet.getRandom()); // Random number between 50001 and 100000

# Gas Station

Link: [Gas Station](https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

There are `n` gas stations along a circular route, where the amount of gas at the `i-th` station is `gas[i]`.

You have a car with an unlimited gas tank, and it costs `cost[i]` of gas to travel from the `i-th` station to its next `(i + 1)-th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the **starting gas station's index** if you can travel around the circuit once in the clockwise direction, otherwise return `-1`.  
If there exists a solution, it is **guaranteed to be unique**.

## Examples

### Example 1

```javascript
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 units of gas. Your tank = 0 + 4 = 4.
Travel to station 4. Your tank = 4 - 1 + 5 = 8.
Travel to station 0. Your tank = 8 - 2 + 1 = 7.
Travel to station 1. Your tank = 7 - 3 + 2 = 6.
Travel to station 2. Your tank = 6 - 4 + 3 = 5.
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return `3` as the starting index.
```

### Example 2

```javascript
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Starting at station 2:
- Fill up with 4 units of gas. Your tank = 0 + 4 = 4.
- Travel to station 0. Your tank = 4 - 3 + 2 = 3.
- Travel to station 1. Your tank = 3 - 3 + 3 = 3.
You cannot travel back to station 2, as it requires 4 units of gas, but you only have 3.
Therefore, you cannot travel around the circuit once. Return `-1`.
```

## Setup

```javascript
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> If the total gas available is less than the total cost, it is impossible to complete the circuit. Use this observation as a starting filter. </details> <details> <summary>Hint 2</summary> If the total gas is sufficient, the solution is guaranteed to exist. Try to find the station where you can begin the journey without ever going negative in gas during the trip. </details> <details> <summary>Hint 3</summary> Keep track of the gas tank balance as you traverse the stations. If the tank goes negative at any point, reset your starting station to the next index and start recalculating from there. </details>

## Approach

### Key Observations:

1. If the **total gas** available is less than the **total cost**, you cannot complete the circuit.
   - **Formula:** If `sum(gas) < sum(cost)`, return `-1`.
2. If the **total gas** is greater than or equal to the **total cost**, a solution is guaranteed.
   - Use a **greedy approach** to identify the starting station.

### Steps:

#### Initialize Variables:

1. `totalTank` to track the overall gas balance across all stations.
2. `currentTank` to track the gas balance while traversing from the current starting station.
3. `startStation` to store the candidate starting station.

#### Traverse All Stations:

1. Update `totalTank` and `currentTank` as:
   - `totalTank += gas[i] - cost[i]`
   - `currentTank += gas[i] - cost[i]`
2. If `currentTank` becomes negative:
   - Reset `startStation` to `i + 1` (the next station).
   - Reset `currentTank` to `0` because the journey from the current `startStation` is invalid.

#### After the Loop:

1. Check if `totalTank >= 0`:
   - If **yes**, return `startStation`.
   - Otherwise, return `-1`.

## Algorithm Complexity

### Time Complexity:

- **O(n):** Single pass through the stations to compute `totalTank` and determine the starting station.

### Space Complexity:

- **O(1):** Uses only constant extra space for variables like `totalTank`, `currentTank`, and `startStation`.

## Example Walkthrough

### Input: `gas = [1,2,3,4,5]`, `cost = [3,4,5,1,2]`

#### Initialization:

- `totalTank = 0`, `currentTank = 0`, `startStation = 0`.

#### Iteration:

1. **At `i = 0`:**

   - `Balance = gas[0] - cost[0] = 1 - 3 = -2`.
   - `totalTank = -2`, `currentTank = -2`.
   - **Reset:** `currentTank = 0`, `startStation = 1`.

2. **At `i = 1`:**

   - `Balance = gas[1] - cost[1] = 2 - 4 = -2`.
   - `totalTank = -4`, `currentTank = -2`.
   - **Reset:** `currentTank = 0`, `startStation = 2`.

3. **At `i = 2`:**

   - `Balance = gas[2] - cost[2] = 3 - 5 = -2`.
   - `totalTank = -6`, `currentTank = -2`.
   - **Reset:** `currentTank = 0`, `startStation = 3`.

4. **At `i = 3`:**

   - `Balance = gas[3] - cost[3] = 4 - 1 = 3`.
   - `totalTank = -3`, `currentTank = 3`.

5. **At `i = 4`:**
   - `Balance = gas[4] - cost[4] = 5 - 2 = 3`.
   - `totalTank = 0`, `currentTank = 6`.

#### Result:

- `totalTank >= 0` → Return `startStation = 3`.

### Output: `3`

## Why is this Solution Optimal?

1. **Single Pass:**  
   The greedy approach only requires one traversal of the arrays, ensuring O(n) time complexity.

2. **Space Efficiency:**  
   Uses only constant space for tracking variables.

3. **Guaranteed Solution:**  
   Ensures correctness by leveraging the mathematical guarantees of the problem (i.e., a solution exists if total gas is sufficient).

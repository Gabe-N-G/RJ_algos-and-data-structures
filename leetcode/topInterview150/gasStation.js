/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  let totalTank = 0; // Overall gas balance
  let currentTank = 0; // Gas balance for the current journey
  let startStation = 0; // Candidate starting station

  for (let i = 0; i < gas.length; i++) {
    const balance = gas[i] - cost[i];
    totalTank += balance;
    currentTank += balance;

    // If currentTank goes negative, reset the starting station
    if (currentTank < 0) {
      startStation = i + 1; // Move start to the next station
      currentTank = 0; // Reset current tank balance
    }
  }

  // Check if completing the circuit is possible
  return totalTank >= 0 ? startStation : -1;
};

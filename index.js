// Questions
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  
// Explanation: nums[0] + nums[1] = 2 + 7 = 9


function twoSum(nums, target) {
    const map = new Map(); // To store the number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices of the two numbers
        }

        map.set(nums[i], i); // Store the current number with its index
    }

    return []; // Return empty if no solution found
}

// Test Case
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

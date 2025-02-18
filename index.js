// Questions - 1
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  
// Explanation: nums[0] + nums[1] = 2 + 7 = 9


// function twoSum(nums, target) {
//     const map = new Map(); // To store the number and its index

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i]; // Return indices of the two numbers
//         }

//         map.set(nums[i], i); // Store the current number with its index
//     }

//     return []; // Return empty if no solution found
// }

// // Test Case
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]


// Questions - 2

Input: nums = [1, 2, 3, 4, 6], target = 5
  
// Output: [1, 3]  
// Because nums[1] + nums[3] = 2 + 3 = 5
function twoSumSorted(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [left + 1, right + 1]; // 1-based index
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // Won't happen (problem guarantees a solution)
}

// Example usage:
console.log(twoSumSorted([1, 2, 3, 4, 6], 5)); // Output: [1, 3]

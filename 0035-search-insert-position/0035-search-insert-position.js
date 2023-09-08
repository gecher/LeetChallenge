/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = nums[mid];

        if (midValue === target) {
            return mid; // Target found, return the index.
        } else if (midValue < target) {
            left = mid + 1; // Adjust the left boundary.
        } else {
            right = mid - 1; // Adjust the right boundary.
        }
    }

    return left; // Target not found, return the index where it should be inserted.
}


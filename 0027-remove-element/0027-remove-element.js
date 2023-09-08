/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    // Initialize two pointers, one for iterating and one for updating non-equal elements
    let i = 0;

    // Iterate through the array
    for (let j = 0; j < nums.length; j++) {
        // If the current element is not equal to val, update nums[i] and increment i
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    // The first i elements of nums contain the elements not equal to val
    return i;
}


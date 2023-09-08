class Solution(object):
 
 def removeDuplicates(self, nums):
    # Check if the input list is empty
    if not nums:
        return 0

    # Initialize two pointers, one for iterating and one for updating unique elements
    i = 0

    # Iterate through the list starting from the second element
    for j in range(1, len(nums)):
        # If the current element is different from the previous element, update nums[i+1]
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]

    # Return the number of unique elements (i+1)
    return i + 1
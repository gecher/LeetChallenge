/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""; // If the input array is empty, there's no common prefix
    }
    
    // Initialize the common prefix as the first string in the array
    let commonPrefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        const currentStr = strs[i];
        let j = 0;

        // Compare characters of the current string with the common prefix
        while (j < commonPrefix.length && j < currentStr.length && commonPrefix[j] === currentStr[j]) {
            j++;
        }

        // Update the common prefix based on the comparison
        commonPrefix = commonPrefix.slice(0, j);
        
        // If the common prefix becomes an empty string, there's no need to continue
        if (commonPrefix === "") {
            break;
        }
    }
    
    return commonPrefix;
}
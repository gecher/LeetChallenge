/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    // Split the string by spaces to get an array of words
    const words = s.trim().split(' ');

    // Check if the array is empty
    if (words.length === 0) {
        return 0;
    }

    // Get the last word and return its length
    return words[words.length - 1].length;
}


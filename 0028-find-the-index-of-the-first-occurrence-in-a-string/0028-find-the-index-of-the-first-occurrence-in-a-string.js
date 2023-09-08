/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    if (needleLength === 0) {
        return 0; // Empty needle is always present at index 0.
    }

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }

    return -1; // Needle not found in haystack.
}


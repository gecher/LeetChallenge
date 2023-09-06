/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (brackets[char]) {
            // If it's an open bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return false; // Mismatched or extra closing bracket
            }
        }
    }

    return stack.length === 0; // True if the stack is empty (all brackets matched)
}



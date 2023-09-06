/**
 * @param {string} s
 * @return {number}
 */


function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const currentValue = romanValues[currentSymbol];

        // Check if the next symbol exists and has a greater value
        if (i + 1 < s.length) {
            const nextSymbol = s[i + 1];
            const nextValue = romanValues[nextSymbol];

            if (currentValue < nextValue) {
                // Subtract the current value
                result -= currentValue;
            } else {
                // Add the current value
                result += currentValue;
            }
        } else {
            // Last symbol, always add its value
            result += currentValue;
        }
    }

    return result;
}
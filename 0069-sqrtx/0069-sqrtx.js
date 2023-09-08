/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    if (x <= 1) {
        return x;
    }

    let left = 0;
    let right = x;
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
            result = mid; // Update the result to the current mid (rounded down)
        } else {
            right = mid - 1;
        }
    }

    return result;
}



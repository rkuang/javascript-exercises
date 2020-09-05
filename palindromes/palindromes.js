const a_ASCII = 97;
const z_ASCII = 122;

const palindromes = function(string) {
    let s = string.toLowerCase()
    let left_pointer = 0;
    let right_pointer = s.length-1
    let result = true;
    while (left_pointer < right_pointer) {
        let left_char = s.charCodeAt(left_pointer);
        if (!is_between_a_z(left_char)) {
            left_pointer++;
            continue;
        }
        let right_char = s.charCodeAt(right_pointer);
        if (!is_between_a_z(right_char)) {
            right_pointer--;
            continue;
        }
        if (left_char === right_char) {
            left_pointer++;
            right_pointer--;
            continue;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

function is_between_a_z(char) {
    return char >= a_ASCII && char <= z_ASCII;
}

module.exports = palindromes

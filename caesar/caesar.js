const A_ASCII = 65;
const Z_ASCII = 90;
const a_ASCII = 97;
const z_ASCII = 122;

const caesar = function(string, shift) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        result += shiftChar(element, shift);
    }
    return result;
}

function isAlpha(charCode) {
    return (charCode >= A_ASCII && charCode <= Z_ASCII) ||
        (charCode >= a_ASCII && charCode <= z_ASCII);
}

function codeSet(charCode) {
    return charCode < a_ASCII ? A_ASCII : a_ASCII;
}

function shiftChar(char, shift) {
    let charCode = char.charCodeAt(0);
    if (!isAlpha(charCode)) return char;

    let baseCode = codeSet(charCode);
    return String.fromCharCode(
        ((charCode + shift - baseCode) % 26 + 26) % 26 + baseCode
    )
}

console.log(caesar('Mjqqt, Btwqi!', -5))

module.exports = caesar

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalLetterTab = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetterTab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberTab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialTab = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "?", "/"];
/**
 * Generate a password with the parameters
 * @param {boolean} number - If the password must contain numbers
 * @param {boolean} special - If the password must contain special characters
 * @param {number} length - The length of the password
 * @param {boolean} capitalLetter - If the password must contain capital letters
 * @returns {string} The password generated
 */
function genPassword(number, special, length, capitalLetter) {
    let password = "";
    let tab = [];
    if (capitalLetter) {
        tab = tab.concat(capitalLetterTab);
    }
    tab = tab.concat(smallLetterTab);
    if (number) {
        tab = tab.concat(numberTab);
    }
    if (special) {
        tab = tab.concat(specialTab);
    }
    for (let i = 0; i < length; i++) {
        password += tab[Math.floor(Math.random() * tab.length)];
    }
    return password;
}
console.log(genPassword(true, true, 10, true));
exports.default = genPassword;

/**
 * Generate a password with the parameters
 * @param {boolean} number - If the password must contain numbers
 * @param {boolean} special - If the password must contain special characters
 * @param {number} length - The length of the password
 * @param {boolean} capitalLetter - If the password must contain capital letters
 * @returns {string} The password generated
 */
declare function genPassword(number: boolean, special: boolean, length: number, capitalLetter: boolean): string;
export default genPassword;

function convertToRoman(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanNumeral = '';
    let i = 0;
    while (num > 0) {
        while (num >= val[i]) {
            romanNumeral += sym[i];
            num -= val[i];
        }
        i++;
    }
    return romanNumeral;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

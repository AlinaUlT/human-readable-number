module.exports = function toReadable (num) {
    const digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const decims = ["","", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety"];

   let res = '';

   let str = num.toString();
    if (str.length === 3) {

        res = `${digits[+str[0]]} hundred` ; 
        if (+str[1] === 1) {
            res += " " + tens[+str[2]];
        } else {
            res = `${res}${decims[+str[1]]} ${ digits[+str[2]]}` ; 
        }
    } else if (str.length === 2) {
        if (+str[0] === 1) {
            res += tens[+str[1]];
        } else {
            res = `${decims[+str[0]]} ${digits[+str[1]]}`;
        }
    } else if(str.length === 1) {
        res = `${+str[0] === 0 ? "zero" : digits[+str[0]]}`;
    }

    return res.trim();
}

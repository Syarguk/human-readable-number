module.exports = function toReadable (num) {

    let res = '';
    let lastNum
    const num_0_20 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const num_21_100 = ["","","","","","","","","","","","","","","","","","","","","twenty","","","","","","","","","","thirty","","","","","","","","","","forty","","","","","","","","","","fifty","","","","","","","","","","sixty","","","","","","","","","","seventy","","","","","","","","","","eighty","","","","","","","","","","ninety"];
    
    if(num == 0) res = "zero";
    if(num >= 100 && num <1000) {
        res = num_0_20[Math.floor(num / 100)] + " hundred ";
        num = Number(String(num).slice(1));
    };
    if(num >= 1 && num < 20) res += num_0_20[num];
    if(num >= 20 && num < 100) {
        res += num_21_100[Math.floor(num / 10) * 10];
        lastNum = Number(String(num)[1]);
        res += " " + num_0_20[lastNum];
    };
    return res.trim();
}

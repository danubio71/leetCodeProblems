/*
PROBLEM 01
==========
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 

// number has to be > 0
// read the final numbers and compare them
 var isPalindrome = function(x){
    //x < 0 ? false : true
    if (x < 0) {
        return false
    } else {
        //Transform int into an arry and make the reverse
        let myFunc = num => Number(num);
        const intArr = (Array.from(String(x), myFunc)).reverse();
        const newArr = Array.from(String(x), myFunc);

        // Change the arrays into strings
        let arrToString = intArr.toString();
        let revArrToString = newArr.toString();

        // replaces all matches of the ,s in the string with this reg ex and parse them into numbers
        let numArr = Number(arrToString.replace(/,/g, ""))
        let revArr = Number(revArrToString.replace(/,/g, ""))

        return numArr === revArr ? true : false
    }
    //return conclusion;

 }

console.log(isPalindrome(0));
Success
Details 
Runtime: 362 ms, faster than 14.38% of JavaScript online submissions for Palindrome Number.

*/

// ********************************************************************************************************

/*
PROBLEM 02
==========

13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

// Make an array with int numbers 
/*
var arr = [1, 5, 10, 50, 100, 500, 1000]
var num = 27
var romanNum = '';

const getRomanNumber = (num) => {
    switch(num) {    
        case 5: return "V";
        break;
        case 10: return "X";
        break;
        case 50: return "L";
        break;
        case 100: return "C";
        break;
        case 500: return "D";
        break;
        case 1000: return "M";
        break;
        default: return "I"
        break;
    }
}

console.log(getRomanNumber(num));


while (num > 0) {
    // Get the numbers that are lower than the given number
    var numsToTest = arr.filter(function(mayores){
        return mayores <= num;
        });
    console.log(numsToTest);

    // Get the biggest number from the array
    biggest = Math.max(...numsToTest)
    console.log(biggest);
    // Rest original number less max num in array
    num = num - biggest
    console.log(num);
    //Get the roman number for max number and concatenate it to romanNum
    romanNum = romanNum + getRomanNumber(biggest)

}
*/
const getNumber = (letter) => {
    switch(letter) {    
        case "V": return 5;
        break;
        case "X": return 10;
        break;
        case "L": return 50;
        break;
        case "C": return 100;
        break;
        case "D": return 500;
        break;
        case "M": return 1000;
        break;
        default: return 1
        break;
    }
}
//var romanNumber = "MCMXCIV";

//var letter = "D"
//console.log(getNumber(letter));

var romanToInt = function(s) {
    let finalNumber = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let charPlusOne = s.charAt(i + 1);
        let twoLetters = char + charPlusOne;
        if (twoLetters === "IV" || twoLetters === "IX" || twoLetters === "XL" || twoLetters === "XC" || twoLetters === "CD" || twoLetters === "CM") {
            finalNumber = finalNumber + (getNumber(charPlusOne) - getNumber(char))
            //console.log(finalNumber);
            i = i + 1
        } else {
            finalNumber = finalNumber + getNumber(char);
            //console.log(finalNumber);
            
        }
    }
    return finalNumber
};


console.log(romanToInt("LVIII"));

/*
Success
Details 
Runtime: 176 ms, faster than 55.77% of JavaScript online submissions for Roman to Integer.
Memory Usage: 47.2 MB, less than 60.62% of JavaScript online submissions for Roman to Integer.
Show off your acceptance:
Time Submitted      Status      Runtime Memory  Language
05/02/2022 13:24	Accepted	176 ms	47.2 MB	javascript
*/



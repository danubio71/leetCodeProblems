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




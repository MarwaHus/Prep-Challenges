'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
    const arr = [];
    const rec = (num) => {
      if (num < 0) {
        arr.push(num);
        return;
      }
      arr.push(num);
      rec(num - int2);
      arr.push(num);
    };
    rec(int1);
    return arr;
  };
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    const pattern = /href="https?:\/\/(.*?)\.(com|org|net)"/; 
  const match = pattern.exec(str);

  if (match) {
    return match[1] + "." + match[2]; 
  } else {
    return null; 
  }
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    const regex = /[^a-z0-9]/gi;
    str = str.toLowerCase().replace(regex, ''); 
    const reversedStr = str.split('').reverse().join(''); 
    return str === reversedStr; 
  };
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
    if (str.length !== arr.length) {
        return false;
      }
      const pattern = {};
      const usedWords = {};
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const word = arr[i];
        if (!pattern[char]) {
          if (usedWords[word]) {
            return false;
          }
          pattern[char] = word;
          usedWords[word] = true;
        } else if (pattern[char] !== word) {
          return false;
        }
      }
      return true;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };
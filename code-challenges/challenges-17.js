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

let recursionArr = [];
const recursionPattern = (int1, int2) => {
    // write your code here

    if( int1 < 0){
        recursionArr = [];
        return recursionArr.push(int1);        
    }
      
    else
    {
        recursionPattern(int1-int2,int2)
        recursionArr.push(int1);
        recursionArr.unshift(int1);
      return recursionArr;
    } 

}
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
    let regex = /www/g;
    let regex1 = /com/g;
    let regex2 = /org/g;
    let regex3 = /net/g;

  if (str.match(regex) == 'www'){
    if(str.match(regex1) =='com'){

    let index1 = str.indexOf('www');
    let index2 = (str.indexOf('com'))+3;
    let newStr = str.slice(index1,index2) ;
    // return newStr;
    return newStr;

  }
  else if ( str.match(regex2) == 'org'){

    let index1 = str.indexOf('www');
    let index2 = (str.indexOf('org'))+3;
    let newStr = str.slice(index1,index2) ;
    return newStr;
    
  }
  else   if ( str.match(regex3) == 'net'){

    let index1 = str.indexOf('www');
    let index2 = (str.indexOf('net'))+3;
    let newStr = str.slice(index1,index2) ;
    return newStr;
    
  }
  }
    
}
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

str = str.toLowerCase();
let regex =/[^a-z]/g
str = str.replace(regex,'');
str =str.split('');



for (let i=0;i < str.length;i++){
  if(str[i] != str[str.length-i-1]){
    return false;
  }
}

return true;
}
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
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };
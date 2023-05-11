"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
  // write your code here
  str = str.split(" ");
  console.log(str);
  if (str.length == 1) {
    let middleArr = str[0].split("");
    return middleArr.length;
  } else if (str.length % 2 != 0) {
    let idx = Math.ceil(str.length / 2);
    let middleArr = str[idx - 1].split("");
    return middleArr.length;
  } else {
    let idx = 1 + str.length / 2;
    let middleArr = str[idx - 1].split("");
    return middleArr.length;
  }
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  // write your code here
  str1 = str1.split("");
  str2 = str2.split("");
  let count = 0;

  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    count = 0;

    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        count++;
      }
    }
    if (count == 0) {
      return false;
    }
  }

  return true;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
  // write your code here

  let idx = arr.indexOf(int);

  if (idx != -1) {
    return idx;
  } else if (int < arr[0]) {
    return 0;
  } else if (arr[arr.length - 1] < int) {
    return arr.length;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < int && arr[i + 1] > int) {
        return i+1;
      }
    }
  }
};
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };

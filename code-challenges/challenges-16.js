'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...

    let charArr = string.split('');
    let reverseArr =[];
    for (let i=charArr.length-1 ; i>=0 ; i--){
        reverseArr.push(charArr[i]);
    }

    let reverse = reverseArr.join('');
    return reverse;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let outputArr = [];

    for (let i=0; i<arr.length ; i++){
        let innerArr = arr[i].split('');
        for(let j=0 ; j<innerArr.length ; j++){
            if (innerArr[j] == '^'){
                if (innerArr[j+1] == '_'){
                    if (innerArr[j+2] == '^'){
                        outputArr.push(arr[i]);
                        break;
                    }
                }
            }
        }
    }

    return outputArr;

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let outputArr = [];
    let arr = str.split('');
    for (let i=0; i<arr.length ; i+=2){
        outputArr.push(arr[i]);
    }

    let newStr = outputArr.join('');

    return newStr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...

    let arr1
    let regex = /chicken*/g;
    let outputArr = [];
    for (let i=0 ; i<arr.length ; i++){
      arr1=[];
      
        for (let j=0 ; j<arr[i].length ; j++){

            if (arr[i][j].match(regex) == 'chicken'){
                arr1.push(arr[i][j]);
            }
        }
                      outputArr.push(arr1);

    }

    return outputArr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };


// 6 kyu - Array.diff 
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//Solution is:

function arrayDiff(a, b) {
    let result = [];
 
     for (let n of a) {
        if (!b.includes(n)) {
          result.push(n);
        }
     }
     return result
 }


 // 8 kyu - Opposites Attract

// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each.
// If one of the flowers has an even number of petals
// and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true
// if they are in love and false if they aren't.
 
//Solution is:

function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 !==0){
     return true;
    }
    else if (flower2 % 2 == 0 && flower1 % 2 !==0){
      return true;
    }
    else {
      return false;
    }
  }


 // 7 kyu - Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c.
// The function should return trueif a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

//Solution is:

function isTriangle(a,b,c)
{
  let sides = [a, b, c];
  let max = Math.max(...sides);
  let sum = sides.reduce((a, b) => a + b, 0);
  return sum - max > max;
}

// 8 kyu - Even or Odd triangles

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Solution is:

function even_or_odd(number) {
    if (number % 2 == 0){
      return "Even";
    }
    else {
      return "Odd"
    }
}

//6 kyu
// Arrays Similar

//Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
//
// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]
//
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

//Solution is:


function arraysSimilar(arr1, arr2) {

    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())

//   if (arr1.length !== arr2.length) return false
//   arr1.sort()
//   arr2.sort()

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false
//   }
//   return true
}

//7 kyu
// Sum ALL the arrays!
//You are given an array of values.
//
// Sum every number value in the array, and any nested arrays (to any depth).
//
// Ignore all other types of values.

//Solution is:

function arraySum(arr) {

    let splittedArr = arr.toString().split(',')

    let sum = 0

    for(let i = 0; i < splittedArr.length; i++){
        sum += Number.isNaN(+splittedArr[i]) ? 0 : +splittedArr[i]
    }
    return sum
}

// 8 kyu
// Remove duplicates from list
//Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

function distinct(a) {

//   let item = {}
//   let result = []

//   for(let i = 0; i < a.length; i++) {
//     if(!item[a[i]]) {
//       result.push(a[i])
//       item[a[i]] = true
//     }
//   }
//   return result;

    return [...new Set(a)]
}

// 7 kyu
// Write shortest function to calculate Average number of Array

// Given an array of integers, calculate the Average of these numbers.
//
// Main challenge is to write shortest and compact function for it.
//  For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

const avg = a => a.reduce((a, b) => a + b) / a.length


// 5 kyu
// Valid Parentheses
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
    const open = ['(', '{', '[']
    const close = [')', '}', ']']

    let stack = []


    for(let i = 0; i < parens.length; i++){
        if(open.includes(parens[i])){
            stack.push(parens[i])
        } else {
            if(close.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1]) ){
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0;
}

// 7 kyu
// sPoNgEbOb MeMe

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
//
//     Examples:
//
// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'
function spongeMeme(sentence) {
    let result = ''
    for (let i = 0; i < sentence.length; i++) {
        result += (i % 2) ? sentence[i].toLowerCase() : sentence[i].toUpperCase()
    }
    return result
}

// 8 kyu
// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {


    let result = []

    for(let i = 0; i < array.length; i++){
        array[i] = array[i] * (-1)
        result = array
    }

    return result;
}
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

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
        return true;
    } else if (flower2 % 2 == 0 && flower1 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}


// 7 kyu - Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c.
// The function should return trueif a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

//Solution is:

function isTriangle(a, b, c) {
    let sides = [a, b, c];
    let max = Math.max(...sides);
    let sum = sides.reduce((a, b) => a + b, 0);
    return sum - max > max;
}

// 8 kyu - Even or Odd triangles

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Solution is:

function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
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

    for (let i = 0; i < splittedArr.length; i++) {
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


    for (let i = 0; i < parens.length; i++) {
        if (open.includes(parens[i])) {
            stack.push(parens[i])
        } else {
            if (close.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1])) {
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

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * (-1)
        result = array
    }

    return result;
}

// 8 kyu
// Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
//     Examples:
//
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
//     * With `name` not given
// or `name` = ""        => return "Hello, World!"

function hello(name = '') {

    if (!name.trim()) return 'Hello, World!'

    return 'Hello, ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!'
}

// 8 kyu
// Grasshopper - Personalized Message
//
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//     Use conditionals to return the proper message:
//
//     case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}

// 7 kyu
// Round to nearest 0 or 5
//
// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.
//
// For example:
//
//     roundToFive([34.5, 56.2, 11, 13]);
// should return
//
// [35, 55, 10, 15]

// return the list with all numbers rounded to nearest 0 or 5
function roundToFive(numbers) {

    return numbers.map(m => (m % 5 >= 2.5) ? m += 5 - m % 5 : m -= m % 5)

//   for(let i = 0; i < numbers.length; i++){
//     let remain = numbers[i] % 5
//     if(remain >= 2.5){
//       numbers[i] = numbers[i] + (5 - remain)
//     } else {
//       numbers[i] = numbers[i] - remain
//     }
//   }

//   return numbers
}

//### Уникальность всех символов в строке
//
// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
//
// **Input**: String
//
// **Output**: Boolean

//function isUnique(string) {
// 	 // for (let i = 0; i < str.length; i++) {
//   //   if (str.lastIndexOf(str[i]) !== i) {
//   //     return false
//   //   }
//   // }
//   // return true
//   // const chars = new Set()
//   //
//   // for (let i = 0; i < str.length; i++) {
//   //   const current = str[i]
//   //
//   //   if (chars.has(current)) {
//   //     return false
//   //   }
//   //
//   //   chars.add(current)
//   // }
//   // return true
//     return new Set(str).size === str.length
// }
//
// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

//### Плоский массив
//
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.
//
// **Input**: Array
//
// **Output**: Array

// function flatten(array) {
//     // if we know the depth of array:
//     //return array.flat(3)
//     let res = []
//
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             const depthFlat = flatten(array[i])
//             for (let k = 0; k < depthFlat.length; k++) {
//                 res.push(depthFlat[k])
//             }
//         } else {
//             res.push(array[i])
//         }
//     }
//     return res
// }
//
// console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]

// ### Удаление всех повторяющихся значений в строке
//
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
//
// **Input**: String
//
// **Output**: String

// function removeDupes(str) {
//     // return Array.from(new Set(str)).join('')
//     //return [...new Set(str)].join('')
//     const item = {}
//     const res = []
//
//     for (let i = 0; i < str.length; i++) {
//         if (!item[str[i]]) {
//             item[str[i]] = true
//             res.push(str[i])
//         }
//     }
//
//     return res.join('')
// }
//
//
// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'


// Реализовать функцию superSum, которая принимает число в качестве аргумента, которое указывает на количество
// слагаемых и что бы корректно работали следующие вызовы:

//  superSum(0)
//  superSum(3)(2, 5, 3)
//  superSum(3)(2, 5) (3)
//  superSum(3)(2, 5) (3, 9)
function superSum(num) {
    if (num <= 0) return 0;
    if (num === 1) return (n) => n;
    let _args = []

    function helper (...args) {
        _args = [...args, ...args]
        if(_args.length >= num) {
            _args.length = num;
            return _args.reduce((acc, num) => acc + num)
        } else {
            return helper
        }
    }

    return helper

}

console.log(superSum(3)(2, 5, 3))
console.log(superSum(3)(2, 5) (3))
console.log(superSum(3)(2, 5) (3, 9))
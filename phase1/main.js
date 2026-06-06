/*
Phase 1 - JS Fundamentals

This phase introduces the core building blocks of JavaScript through hands-on practice.
It covers how to declare and manage variables with let, const, and var, understand common
data types and operators, and control program flow with conditionals such as if and switch.

It also explores repetition with for, while, and for...of loops, how to create and use
functions, and the key ideas behind scope and hoisting.
*/
console.log("Start");
/*
1.Write a function that prints numbers from 1 to 100.

Rules:

If the number is divisible by 3, print "Fizz"
If divisible by 5, print "Buzz"
If divisible by both 3 and 5, print "FizzBuzz"
Otherwise print the number itself
*/
const checkNumber = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
checkNumber();

/*
2.
Requirement:
Write a function that receives an array of numbers and returns both the largest and smallest values.

Input Example:

[12, 45, 2, 89, 34, 1]

Expected Output:

{
  max: 89,
  min: 1
}

Bonus:
Do not use Math.max() or Math.min().
*/
const findMinMax = function (arr) {
  if (arr.length === 0) {
    return null;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  const result = { max, min };
  console.log(result);
  return result;
};
const arr = [12, 45, 2, 89, 34, 1];
findMinMax(arr);
/*
3.
Requirement:
Write a function that reverses a string.

Input Example:

"javascript"

Expected Output:

"tpircsavaj"
*/
const reverseString = function (str) {
  if (typeof str !== "string") return null;
  let outputRe = "";
  for (let i = str.length - 1; i >= 0; i--) {
    outputRe += str[i];
  }
  console.log(outputRe);
  return outputRe;
};
const str = "javascript";
reverseString(str);
/*
4.
Requirement:
Write a function that counts how many vowels exist in a string.

Vowels:

a, e, i, o, u

Ignore uppercase/lowercase differences.

Input Example:

"Hello World"

Expected Output:

*/
const countVowels = function (str) {
  if (typeof str !== "string") return null;
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const strLow = str.toLowerCase();
  for (let i = 0; i < strLow.length; i++) {
    if (vowels.includes(strLow[i])) {
      count += 1;
    }
  }
  console.log("CountVowels:", count);
  return count;
};

const stringVowels = "Hello World";
countVowels(stringVowels);
/*
5.
Write a function that checks whether a word or sentence is a palindrome.

Rules:

Ignore spaces
Ignore uppercase/lowercase

Input Example:

"Race car"

Expected Output:

true

Input Example:

"JavaScript"

Expected Output:

false
*/
const checkPalindrome = function (str) {
  let strClear = str.toLowerCase().replaceAll(/\s/g, "");
  let first = 0;
  let last = strClear.length - 1;
  while (first < last) {
    if (strClear[first] !== strClear[last]) {
      return false;
    }
    first++;
    last--;
  }

  return true;
};
const stringCheckPalindrome = "Race   cari";
console.log(checkPalindrome(stringCheckPalindrome));
/*
6.
Create a function that calculates the total of all numbers in an array.

Input:

[1,2,3,4,5]

Output:

15
*/
const calculatesSum = function (arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
const calculatesSumArr = [1, 2, 3, 4, 5];
console.log(calculatesSum(calculatesSumArr));
/*
Write a function that prints the multiplication table for a given number.

Input:

5

Output:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/
const multiplicationTable = function (number) {
  if (typeof number !== "number" || Number.isNaN(number)) return null;
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
multiplicationTable(5);
/*
Write a function that finds duplicate values inside an array.

Input:

[1,2,3,2,4,5,1]

Output:

[1,2]
*/
const checkDupicate = function (arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return null;
  let seen = new Set();
  let duplicate = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicate.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  console.log(duplicate);
  return duplicate;
};
const checkDupicateArr = [1, 2, 3, 2, 4, 5, 1];

checkDupicate(checkDupicateArr);
/*
Create a calculator function using switch.

Supported operations:

Addition
Subtraction
Multiplication
Division

Example:

calculator(10,5,"+")

Output:

15
*/
const calculator = function (a, b, op) {
  if (typeof a !== "number" || typeof b !== "number") return null;

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return null;
      return a / b;
    default:
      return null;
  }
};

// Examples
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2

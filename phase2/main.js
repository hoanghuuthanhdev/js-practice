/*
Phase 2 - Arrays and Objects

This phase focuses on working with collections and structured data in JavaScript.
You will learn and practice essential array methods such as map, filter, reduce,
find, some, and every, and apply them to transform and analyze lists of values.

In addition, the phase covers object manipulation techniques — including
destructuring and the spread operator — that make it easier to read, copy,
and update complex data structures.

Exercises are centered on real-world collection tasks: removing duplicates
from arrays, grouping objects by category, finding the most frequent element,
and flattening nested arrays.
*/

console.log("Phase 2 Starting");

/*
1.
Requirement:
Write a function that removes duplicate values from an array.

Input Example:

[3, 7, 2, 3, 9, 7, 5, 2, 8]

Expected Output:

[3, 7, 2, 9, 5, 8]

Rules:
- Keep the original order
- Return a new array
- Do not modify the original array

Bonus:
Do not use Set()
*/
//Solution 1
// const removeDuplicates = function (arr) {
//   let notDuplicate = [];
//   for (const element of arr) {
//     if (!notDuplicate.includes(element)) {
//       notDuplicate.push(element);
//     }
//   }
//   return notDuplicate;
// };
//Solution 2
const removeDuplicates = function (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

console.log(removeDuplicates([3, 7, 2, 3, 9, 7, 5, 2, 8]));

const testadd = function (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

console.log(testadd([3, 7, 2, 3, 9, 7, 5, 2, 8]));
/*
2.
Requirement:
Write a function that groups objects by category.

Input Example:

[
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Apple", category: "Food" }
]

Expected Output:

{
  Electronics: [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" }
  ],
  Clothing: [
    { name: "Shirt", category: "Clothing" }
  ],
  Food: [
    { name: "Apple", category: "Food" }
  ]
}

Bonus:
Return only product names
*/

const groupByCategory = function (products) {
  const groupsProduct = products.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
  return groupsProduct;
};

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Apple", category: "Food" },
];
console.log(groupByCategory(products));

/*
3.
Requirement:
Write a function that finds the most frequent element in an array.

Input Example:

["a", "b", "c", "a", "d", "b", "a", "c", "a"]

Expected Output:

{
  value: "a",
  count: 4
}

Bonus:
If multiple values have the same count,
return all of them.
*/
// solution 1: use reduce() then find max()

function findMostFrequent(arr) {
  const frequency = arr.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item]++;
    }

    return acc;
  }, {});

  let maxValue = null;
  let maxCount = 0;

  for (const key in frequency) {
    if (frequency[key] > maxCount) {
      maxCount = frequency[key];
      maxValue = key;
    }
  }

  return {
    value: maxValue,
    count: maxCount
  };
}

console.log(
  findMostFrequent(["a", "b", "c", "a", "d", "b", "a", "c", "a", "b", "b"]),
);

/*
4.
Requirement:
Write a function that flattens a nested array
into a single array.

Input Example:

[1, 2, [3, 4], [5, 6], 7]

Expected Output:

[1,2,3,4,5,6,7]

Bonus:
Do not use flat()
*/

const flattenArray = function (arr) {};

console.log(flattenArray([1, 2, [3, 4], [5, 6], 7]));

/*
5.
Requirement:
Write a function that returns only users
whose age is greater than or equal to 18.

Input Example:

[
 {name:"John",age:25},
 {name:"Mike",age:15},
 {name:"Sarah",age:30}
]

Expected Output:

[
 {name:"John",age:25},
 {name:"Sarah",age:30}
]

Bonus:
Return only the names.
*/

const filterAdults = function (users) {};

console.log(filterAdults(users));

/*
6.
Requirement:
Write a function that checks whether all
students passed.

Rules:
- Passing score >= 50

Input Example:

[
 {name:"John",score:70},
 {name:"Mike",score:80},
 {name:"Sarah",score:45}
]

Expected Output:

false

Bonus:
Also return the failed students.
*/

const checkPass = function (students) {};

console.log(checkPass(students));

/*
7.
Requirement:
Write a function that checks whether at least
one product is out of stock.

Input Example:

[
 {name:"Laptop", stock:10},
 {name:"Phone", stock:0},
 {name:"Mouse", stock:5}
]

Expected Output:

true

Bonus:
Return the product name(s).
*/

const checkStock = function (products) {};

console.log(checkStock(products));

/*
8.
Requirement:
Write a function that calculates the total price
of all products.

Input Example:

[
 {name:"Laptop",price:500},
 {name:"Phone",price:300},
 {name:"Mouse",price:50}
]

Expected Output:

850

Bonus:
Apply a 10% discount before calculating.
*/

const calculateTotal = function (products) {};

console.log(calculateTotal(products));

/*
9.
Requirement:
Write a function that extracts data using
destructuring.

Input Example:

const student = {
  id:101,
  name:"David",
  scores:{
    math:88,
    english:92
  }
}

Expected Output:

{
  name:"David",
  average:90
}

Bonus:
Use spread operator.
*/

const getStudentInfo = function (student) {};

console.log(getStudentInfo(student));

/*
10.
Requirement:
Write a function that groups orders and
calculates total price for each category.

Input Example:

[
 {category:"Food",price:20},
 {category:"Electronics",price:150},
 {category:"Food",price:15},
 {category:"Clothing",price:40}
]

Expected Output:

{
 Food:35,
 Electronics:150,
 Clothing:40
}

Bonus:
Use reduce() only.
*/

const calculateCategoryTotals = function (orders) {};

console.log(calculateCategoryTotals(orders));

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

const groupByCategory = function (products, returnNamesOnly = false) {
  const groupsProduct = products.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(returnNamesOnly ? item.name : item);
    return acc;
  }, {});
  return groupsProduct;
};

const categorizedProducts = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Apple", category: "Food" },
];
console.log(groupByCategory(categorizedProducts));

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
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // find the maximum count
  let maxCount = 0;
  for (const key in frequency) {
    if (frequency[key] > maxCount) maxCount = frequency[key];
  }

  // collect all values that have the maximum count
  const winners = Object.keys(frequency).filter(
    (k) => frequency[k] === maxCount,
  );

  return {
    value: winners.length === 1 ? winners[0] : winners,
    count: maxCount,
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

const flattenArray = function (arr) {
  const result = [];
  const helper = (input) => {
    for (const item of input) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  };
  helper(arr);
  return result;
};

console.log(flattenArray([1, 2, [3, 4], [5, 6], 7]));

const users = [
  { name: "John", age: 25 },
  { name: "Mike", age: 15 },
  { name: "Sarah", age: 30 },
];

const students = [
  { name: "John", score: 70 },
  { name: "Mike", score: 80 },
  { name: "Sarah", score: 45 },
];

const stockProducts = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
  { name: "Mouse", stock: 5 },
];

const pricedProducts = [
  { name: "Laptop", price: 500 },
  { name: "Phone", price: 300 },
  { name: "Mouse", price: 50 },
];

const student = {
  id: 101,
  name: "David",
  scores: {
    math: 88,
    english: 92,
  },
};

const orders = [
  { category: "Food", price: 20 },
  { category: "Electronics", price: 150 },
  { category: "Food", price: 15 },
  { category: "Clothing", price: 40 },
];

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

const filterAdults = function (users, returnNamesOnly = false) {
  const adults = users.filter((user) => user.age >= 18);
  return returnNamesOnly ? adults.map((user) => user.name) : adults;
};

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

const checkPass = function (students, includeFailed = false) {
  const failedStudents = students.filter((student) => student.score < 50);
  const allPassed = failedStudents.length === 0;

  if (includeFailed) {
    return {
      allPassed,
      failedStudents,
    };
  }

  return allPassed;
};

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

const checkStock = function (products, returnNamesOnly = false) {
  const outOfStockProducts = products.filter((product) => product.stock === 0);

  if (returnNamesOnly) {
    return outOfStockProducts.map((product) => product.name);
  }

  return outOfStockProducts.length > 0;
};

console.log(checkStock(stockProducts));

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

const calculateTotal = function (products, discountRate = 0) {
  return products.reduce((total, product) => {
    return total + product.price * (1 - discountRate);
  }, 0);
};

console.log(calculateTotal(pricedProducts));

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

const getStudentInfo = function (student) {
  const { name, scores: { math = 0, english = 0 } = {} } = student;

  const average = (math + english) / 2;

  return {
    ...{ name, average },
  };
};

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

const calculateCategoryTotals = function (orders) {
  return orders.reduce((acc, order) => {
    acc[order.category] = (acc[order.category] || 0) + order.price;
    return acc;
  }, {});
};

console.log(calculateCategoryTotals(orders));

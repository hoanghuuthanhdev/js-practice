console.log("Hello");
/*
Phase 3 - Scope, Closures, this, Prototype and Classes

This phase focuses on understanding how JavaScript works internally.

You will learn:

- Global Scope
- Function Scope
- Block Scope
- Hoisting
- Temporal Dead Zone (TDZ)
- Closures
- Lexical Scope
- this Keyword
- Prototype Chain
- Constructor Functions
- Classes and Inheritance

Exercises are centered on predicting behavior,
creating closures, understanding object context,
and building reusable objects using prototypes and classes.
*/

console.log("Phase 3 Starting");

/*
1.
Requirement:
Write a function that creates a greeting function.

Input Example:

const greet = createGreeting("Hello");

greet("John");

Expected Output:

Hello John

Rules:
- Use closures
- greeting should remain available
  after createGreeting finishes

Bonus:
Allow custom punctuation
*/




/*
2.
Requirement:
Write a function that creates a private counter.

Input Example:

const counter = createCounter();

counter();
counter();
counter();

Expected Output:

1
2
3

Rules:
- count must not be accessible directly
- Use closures

Bonus:
Add a reset() method
*/




/*
3.
Requirement:
Write a function that creates a bank account.

Input Example:

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

account.getBalance();

Expected Output:

1300

Rules:
- Balance must be private
- Cannot access balance directly

Bonus:
Prevent negative balances
*/




/*
4.
Requirement:
Write a function that remembers previous values.

Input Example:

const remember = createMemory();

remember("A");
remember("B");
remember("C");

Expected Output:

["A"]
["A","B"]
["A","B","C"]

Rules:
- Use closures

Bonus:
Add clear() method
*/




/*
5.
Requirement:
Predict the output before running.

console.log(a);

var a = 10;

Expected Output:

???

Questions:
- Why?
- What happens during hoisting?
*/




/*
6.
Requirement:
Predict the output before running.

console.log(b);

let b = 20;

Expected Output:

???

Questions:
- Why does this happen?
- Explain TDZ
*/




/*
7.
Requirement:
Fix the code.

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

Current Output:

3
3
3

Expected Output:

0
1
2

Rules:
- Explain why the bug occurs

Bonus:
Solve without changing var
*/




/*
8.
Requirement:
Write a function that returns another function.

Input Example:

const multiplyBy2 = multiplier(2);

multiplyBy2(5);

Expected Output:

10

Rules:
- Use closures

Bonus:
Create multiplyBy3 and multiplyBy10
*/




/*
9.
Requirement:
Write a function that tracks how many times
it has been called.

Input Example:

const tracker = createCallTracker();

tracker();
tracker();
tracker();

Expected Output:

Function called 1 time(s)
Function called 2 time(s)
Function called 3 time(s)

Rules:
- Use closures

Bonus:
Add getCount()
*/




/*
10.
Requirement:
Predict the output.

const person = {
  name: "John",

  sayName() {
    console.log(this.name);
  }
};

person.sayName();

Expected Output:

???

Questions:
- What does this refer to?
*/




/*
11.
Requirement:
Predict the output.

const person = {
  name: "John",

  sayName() {
    console.log(this.name);
  }
};

const fn = person.sayName;

fn();

Expected Output:

???

Questions:
- Why is the result different?
- What does this refer to?
*/




/*
12.
Requirement:
Fix the code.

const person = {
  name: "John",

  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

person.greet();

Expected Output:

John

Rules:
- Use arrow function

Bonus:
Solve with bind()
*/




/*
13.
Requirement:
Create a constructor function Person.

Input Example:

const p1 = new Person("John");

Expected Output:

p1.name === "John"

Rules:
- Use constructor function syntax

Bonus:
Add age property
*/




/*
14.
Requirement:
Add a method using prototype.

Input Example:

const p1 = new Person("John");

p1.sayHello();

Expected Output:

Hello John

Rules:
- Method must exist on prototype

Bonus:
Verify with hasOwnProperty()
*/




/*
15.
Requirement:
Create a constructor function Car.

Input Example:

const car = new Car("Toyota");

car.getBrand();

Expected Output:

Toyota

Rules:
- Store brand in constructor
- Method on prototype

Bonus:
Add year property
*/




/*
16.
Requirement:
Investigate the prototype chain.

Input Example:

const arr = [];

Questions:

1. Where does push() come from?
2. Where does map() come from?
3. Where does toString() come from?
4. What is the end of the prototype chain?

Bonus:
Draw the prototype chain
*/




/*
17.
Requirement:
Rewrite Person constructor using class syntax.

Input Example:

const p1 = new Person("John");

p1.sayHello();

Expected Output:

Hello John

Rules:
- Use class
- Use constructor()

Bonus:
Add age property
*/




/*
18.
Requirement:
Create an Animal class.

Properties:

name

Method:

speak()

Expected Output:

Animal sound

Bonus:
Return the animal name too
*/




/*
19.
Requirement:
Create a Dog class that extends Animal.

Input Example:

const dog = new Dog("Buddy");

dog.speak();

Expected Output:

Woof!

Rules:
- Use inheritance
- Override speak()

Bonus:
Call parent constructor using super()
*/




/*
20.
Requirement:
Create a UserManager class.

Methods:

addUser(name)

removeUser(name)

getUsers()

Input Example:

manager.addUser("John");
manager.addUser("Mike");

manager.getUsers();

Expected Output:

["John", "Mike"]

Rules:
- Store users inside the class

Bonus:
Use private fields (#users)
*/
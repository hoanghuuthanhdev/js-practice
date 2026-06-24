/*
Phase 4 - Asynchronous JavaScript and the Event Loop

In this phase, you will learn how JavaScript handles
asynchronous tasks and manages execution behind the scenes.

Topics:

- Synchronous vs. Asynchronous Code
- Call Stack
- Web APIs
- Callback Queue
- Event Loop
- Timers
- Callbacks
- Promises
- Promise Chaining
- async/await
- Error Handling
- Fetch API
- Microtasks vs. Macrotasks

Exercises are designed to help you:

- Predict execution order
- Understand the event loop
- Create asynchronous workflows
- Handle API requests
- Master Promises and async/await
*//*
Phase 4 - Asynchronous JavaScript and Event Loop

This phase focuses on understanding how JavaScript
handles asynchronous operations.

You will learn:

- Synchronous vs Asynchronous Code
- Call Stack
- Web APIs
- Callback Queue
- Event Loop
- setTimeout
- setInterval
- Callbacks
- Callback Hell
- Promises
- Promise Chaining
- Promise Utilities
- async / await
- Error Handling
- Fetch API
- Microtasks vs Macrotasks

Exercises are centered on predicting execution order,
building asynchronous flows,
handling API requests,
and understanding how the JavaScript runtime works.
*/


// =====================================================
// SECTION 1 - SYNCHRONOUS VS ASYNCHRONOUS
// =====================================================

/*
Exercise 1
Create a program that prints:

Start
Middle
End
*/

/*
Exercise 2
Print:

Start
End
Timeout

using setTimeout().
*/

/*
Exercise 3
Predict the output.

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
*/

/*
Exercise 4
Predict the output.

console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);
*/


// =====================================================
// SECTION 2 - TIMERS
// =====================================================

/*
Exercise 5
Print:

Hello after 2 seconds

using setTimeout().
*/

/*
Exercise 6
Print:

Tick

every second using setInterval().
*/

/*
Exercise 7
Stop an interval after 5 executions.
*/

/*
Exercise 8
Build a countdown:

5
4
3
2
1
Done
*/


// =====================================================
// SECTION 3 - CALLBACK FUNCTIONS
// =====================================================

/*
Exercise 9
Create:

execute(callback)

that executes the callback.
*/

/*
Exercise 10
Create:

greet(name, callback)

Example:

greet("John", callback)

Output:

Hello John
Have a nice day!
*/

/*
Exercise 11
Create:

calculate(a, b, callback)

Use callback for:
- addition
- subtraction
- multiplication
- division
*/

/*
Exercise 12
Execute a callback after 3 seconds.
*/


// =====================================================
// SECTION 4 - CALLBACK HELL
// =====================================================

/*
Exercise 13
Simulate:

Loading user...
User loaded

using callbacks.
*/

/*
Exercise 14
After user loads:

Loading posts...
Posts loaded

using nested callbacks.
*/

/*
Exercise 15
Create:

getUser()
getPosts()
getComments()

using nested callbacks.
*/

/*
Exercise 16
Rewrite this callback hell using Promises.

getUser(() => {
    getPosts(() => {
        getComments(() => {
            getLikes(() => {
                console.log("Done");
            });
        });
    });
});
*/


// =====================================================
// SECTION 5 - PROMISES
// =====================================================

/*
Exercise 17
Create a Promise that resolves immediately.
*/

/*
Exercise 18
Create a Promise that resolves after 2 seconds.
*/

/*
Exercise 19
Create a Promise that rejects after 2 seconds.
*/

/*
Exercise 20
Handle Promise success using .then().
*/

/*
Exercise 21
Handle Promise failure using .catch().
*/

/*
Exercise 22
Predict the output.

const promise = Promise.resolve("Hello");

promise.then(data => {
    console.log(data);
});
*/

/*
Exercise 23
Predict the output.

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
*/


// =====================================================
// SECTION 6 - PROMISE CHAINING
// =====================================================

/*
Exercise 24
Chain Promises to output:

1
2
3
*/

/*
Exercise 25
Double a number through Promise chains.

2 -> 4 -> 8 -> 16
*/

/*
Exercise 26
Create:

login()
    .then(getProfile)
    .then(getPosts)
*/

/*
Exercise 27
Pass values between .then() calls.
*/

/*
Exercise 28
Throw an error inside a Promise chain and catch it.
*/


// =====================================================
// SECTION 7 - PROMISE UTILITIES
// =====================================================

/*
Exercise 29
Use Promise.all() with 3 Promises.
*/

/*
Exercise 30
Use Promise.race() to determine
which Promise finishes first.
*/

/*
Exercise 31
Use Promise.allSettled()
with successful and failed Promises.
*/

/*
Exercise 32
Use Promise.any().
*/


// =====================================================
// SECTION 8 - ASYNC / AWAIT
// =====================================================

/*
Exercise 33
Convert Promise code into async/await.
*/

/*
Exercise 34
Create:

async function delay(ms)

that waits for the specified time.
*/

/*
Exercise 35
Wait 3 seconds and print:

Done
*/

/*
Exercise 36
Call three async functions sequentially.
*/

/*
Exercise 37
Call three async functions in parallel.
*/

/*
Exercise 38
Predict the output.

async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
*/


// =====================================================
// SECTION 9 - ERROR HANDLING
// =====================================================

/*
Exercise 39
Use try/catch inside an async function.
*/

/*
Exercise 40
Handle a rejected Promise using async/await.
*/

/*
Exercise 41
Create:

getData()

that randomly succeeds or fails.
*/

/*
Exercise 42
Create custom error messages.
*/


// =====================================================
// SECTION 10 - FETCH API
// =====================================================

/*
Exercise 43
Fetch users from:

https://jsonplaceholder.typicode.com/users
*/

/*
Exercise 44
Print only user names.
*/

/*
Exercise 45
Print:

Name
Email

for every user.
*/

/*
Exercise 46
Fetch posts.
*/

/*
Exercise 47
Fetch comments.
*/

/*
Exercise 48
Handle fetch errors properly.
*/


// =====================================================
// SECTION 11 - EVENT LOOP
// =====================================================

/*
Exercise 49
Predict the output.

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
*/

/*
Exercise 50
Predict the output.

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
*/

/*
Exercise 51
Predict the output.

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
*/

/*
Exercise 52
Predict the output.

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
*/

/*
Exercise 53
Explain how:

- Call Stack
- Web APIs
- Callback Queue
- Microtask Queue
- Event Loop

work together in Exercise 52.
*/


// =====================================================
// SECTION 12 - MINI PROJECTS
// =====================================================

/*
Exercise 54
Build a fake login system using Promises.
*/

/*
Exercise 55
Build a fake API request simulator.
*/

/*
Exercise 56
Build a task manager using async/await.
*/

/*
Exercise 57
Build a countdown timer.
*/

/*
Exercise 58
Build a weather application using fetch().
*/

/*
Exercise 59
Build a chat simulator with delayed messages.
*/

/*
Exercise 60
Create a loading spinner that disappears
after an asynchronous operation completes.
*/
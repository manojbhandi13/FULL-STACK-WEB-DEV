//Promise in JS is for "eventual" completion of task
//Promise is an object in JS
//It is a solution to callback hell

//let promise = new Promise((resolve, reject) => {...});
//Function with two handlers (callbacks)

//resolve & reject are callbacks provided by JS

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
});

console.log(promise);

// Promises
//
//----//PromiseState
//---------
//---------//Pending
//---------
//---------//fulfilled (resolved)
//---------
//---------//rejected

//Prototype, PromiseState, PromiseResult

let promise1 = new Promise((resolve, reject) => {
  console.log("I am promise one");
  resolve("success");
  //   resolve();
});

console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
  console.log("I am promise two");
  reject("rejected");
  //   reject();
});

console.log(promise2);

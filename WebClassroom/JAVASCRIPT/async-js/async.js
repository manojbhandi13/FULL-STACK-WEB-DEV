// async/await >>> promise-chains >>> promises >>> callback hell >>> callbacks

// function hello() {
//   console.log("hello");
// }

// setTimeout(hello, 2000); //timeout

console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("three");
console.log("four");

//This itself is asynchronous programming
//The "three" & "four" didn't wait for "hello"

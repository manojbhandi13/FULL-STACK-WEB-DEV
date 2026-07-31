// Write a function delayedHello(name) that prints "Hello, <name>!"
//  after 2 seconds using setTimeout.

const delayedHello = (name) => {
  console.log(`Hello ${name}`);
};

setTimeout(() => {
  delayedHello("manoj");
}, 2000);

setTimeout(() => delayedHello("manoj"), 2000);

setTimeout(delayedHello, 2000, "manoj");

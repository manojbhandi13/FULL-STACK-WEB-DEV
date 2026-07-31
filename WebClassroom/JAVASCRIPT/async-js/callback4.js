// Write a countdown(n) function that prints n, n-1, n-2 ... 1, "Go!"
// with 1 second between each number.
// (Hint: use a recursive callback with setTimeout.)

const countDown = (n) => {
  if (n === 0) {
    console.log("Go!");
    return;
  }
  console.log(n);
  setTimeout(() => countDown(n - 1), 1000);
};

countDown(20);

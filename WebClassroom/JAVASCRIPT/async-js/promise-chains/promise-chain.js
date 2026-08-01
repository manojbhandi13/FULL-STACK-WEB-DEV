function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success with data1");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success with data2");
    }, 4000);
  });
}

let p1 = asyncFunc1();
console.log("fetching...");
p1.then(() => {
  setTimeout(() => console.log("fetching..."), 2000);
  return asyncFunc2();
});

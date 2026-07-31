//A callback is a function passed as an argument to another function

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

calculator(1, 2, sum);

const hello = () => {
  console.log("hello");
};

setTimeout(hello, 3000);

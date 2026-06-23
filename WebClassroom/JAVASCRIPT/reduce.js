//Performs some operations & reduces the array to a single value.
//It returns that single value.

let array = [1, 2, 3, 4];
const resultNum = array.reduce((prevNum, currentNum) => prevNum + currentNum);
console.log(resultNum);

//find the greatest
let array1 = [23, 10, 55, 43];
const greatestNum = array1.reduce((prev, curr) => (prev > curr ? prev : curr));
console.log(greatestNum);

//sum
const number = [10, 20, 30, 40, 50];
const sum = number.reduce((previous, current) => previous + current, 0);
console.log(sum);

//Final Balance
const transactions = [200, -50, 500, -100, 300, -75];
const finalBalance = transactions.reduce(
  (initial, final) => initial + final,
  0,
);
console.log(finalBalance);

//Find the total inventory value
const products = [
  { name: "laptop", price: 50000, quantity: 2 },
  { name: "phone", price: 20000, quantity: 3 },
  { name: "tablet", price: 30000, quantity: 1 },
  { name: "watch", price: 10000, quantity: 4 },
];
const inventoryValue = products.reduce(
  (accumulator, current) => accumulator + current.price * current.quantity,
  0,
);
console.log(`Total Inventory Value: ₹${inventoryValue}`);
const iV = products
  .map((element) => element.price * element.quantity)
  .reduce((acc, curr) => acc + curr, 0);
console.log(iV);

const words = ["apple", "banana", "kiwi", "strawberry", "fig", "mango"];
const longestWord = words.reduce(
  (a, c) => (a.length > c.length ? a : c),
  words[0],
);
console.log(longestWord);

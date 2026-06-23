let marks = [97, 64, 32, 49, 99, 96, 86];
let ninetyPlus = marks.filter((score) => score >= 90);
console.log(ninetyPlus);

let n = prompt("Enter array size(n):");
// let array = new Array(n);
let array = [n];
for (let i = 0; i < n; i++) {
  array[i] = i + 1;
}
console.log("Number from 1 to n is:", array);

arraySum = array.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers from 1 to n is:", arraySum);

arrayProduct = array.reduce((acc, curr) => acc * curr, arr[0]);
console.log("Product of numbers from 1 to n is:", arrayProduct);

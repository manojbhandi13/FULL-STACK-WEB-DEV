//An in-built method for arrays

//arr.forEach(callBackFunction);
//callBackFunction: Here, it's a function to execute for each element in the array
// *A callback is a function passed as an argument to another function

let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printValue(val) {
//   //Value at each index
//   console.log(val);
// });

arr.forEach((val) => {
  console.log(val);
});

let arr1 = ["hello", "world", "hie", "welcome"];

// arr1.forEach(function printStr(str) {
//   console.log(str);
// });

arr1.forEach((str) => {
  console.log(str);
});

arr1.forEach((len) => {
  console.log(len.length);
});

arr1.forEach((upper) => {
  console.log(upper.toUpperCase());
});

// Parameters for the forEach method
arr1.forEach((element, index, arr1) => {
  console.log(element, index, arr1);
});

//What are higher order functions?
//Those functions that take functions as parameters and/or return functions.
// Ex:- forEach() method.

const prices = [120, 450, 89, 670, 234];

prices.forEach((value) => {
  console.log(`₹${value}`);
});

// print only the names that have more than 5 characters.
const students = ["manoja", "rahul", "priya", "arjun", "snehaa"];

students.forEach((stdnt) => {
  if (stdnt.length > 5) {
    console.log(stdnt);
  }
});

const numbers = [3, 7, 2, 9, 4, 6, 1, 8, 5];

let greatest = numbers[0];
let sum = 0;
numbers.forEach((num) => {
  sum = sum + num;
  if (greatest < num) {
    greatest = num;
  }
});
console.log(sum);
console.log(greatest);

//map() method in Arrays
//Creates a new array with the results of some operation.
//The value its callback returns are used to form new array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let array1 = array.map((res) => {
  return res * 2;
});

console.log(array1);

//Capitalize only the first letter of each name
const names = ["manoj", "rahul", "priya", "arjun", "sneha"];

const nameS = names.map((name) => {
  return name.charAt(0).toUpperCase().concat(name.slice(1));
});

console.log(nameS);

//Convert to Fahrenheit
const celsius = [0, 20, 37, 100, -40];

const fahrenheit = celsius.map((temp) => {
  return temp * (9 / 5) + 32;
});

console.log(fahrenheit);

const products = [
  { name: "laptop", price: 50000 },
  { name: "phone", price: 20000 },
  { name: "tablet", price: 30000 },
  { name: "watch", price: 10000 },
];

const inVoice = products.map((element) => {
  return `${element.name} costs ₹${element.price}`;
});

console.log(inVoice);

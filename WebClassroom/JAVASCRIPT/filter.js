let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let evenArray = array.filter((element) => {
  return element % 2 === 0;
});
console.log(evenArray);

const numbers = [12, 7, 23, 45, 8, 3, 67, 14, 9, 56];
const moreThanTwenty = numbers.filter((result) => result > 20);
// const moreThanTwenty = numbers.filter((result) => {
//   return result > 20;
// });
console.log(moreThanTwenty);

const words = ["apple", "cat", "elephant", "dog", "umbrella", "ant", "mango"];
const vowelStart = words.filter((word) => {
  return "aeiou".includes(word[0]);
});
// const vowelStart = words.filter((word) => {
//   return (
//     word[0] === "a" ||
//     word[0] === "e" ||
//     word[0] === "i" ||
//     word[0] === "o" ||
//     word[0] === "u"
//   );
// });
console.log(vowelStart);

const students = [
  { name: "Manoj", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Priya", marks: 91 },
  { name: "Arjun", marks: 55 },
  { name: "Sneha", marks: 38 },
  { name: "Kiran", marks: 73 },
];

// Using filter(), create a new array containing only students who have passed —
// marks greater than or equal to 60. Then using map() on the filtered result,
// return an array of only their names.

const moreThanSixtyName = students
  .filter((candidate) => candidate.marks >= 60)
  .map((final) => final.name);

console.log(moreThanSixtyName);
// const moreThanSixty = students.filter((candidate) => {
//   return candidate.marks >= 60;
// });
// console.log(moreThanSixty);
// const moreThanSixtyName = moreThanSixty.map((final) => {
//   return final.name;
// });
// console.log(moreThanSixtyName);

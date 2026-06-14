let marks = [97, 82, 78, 84, 65];
console.log(marks);
console.log(`Length of array is ${marks.length}.`); //property
console.log(`The typeof array is ${typeof marks}.`); //object

//Array is a special type of object in JavaScript
//Indices exist in arrays instead of keys as in objects 

console.log(`Value at the index 3 inside the array marks, is ${marks[3]}.`); //Array Indices

//Replacing Elements in Arrays
//Not possible in Strings because they are immutable. Arrays are mutable
marks[4] = 100;
console.log(marks);

//Looping over an Array

//Prints Elements
for (let element of marks) {
    console.log(element);
}

//Prints Indices
for (let index in marks) {
    console.log(index);
}

for (let index in marks) {
    console.log(index,"=",marks[index]);
}
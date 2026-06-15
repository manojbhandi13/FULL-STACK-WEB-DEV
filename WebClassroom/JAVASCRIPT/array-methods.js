let marks = [97, 82, 78, 84, 65];

//push() 
//Add to end
console.log(marks.push(100));  //Returns updated array length
console.log(marks);

let marks1 = [29, 56, 69, 43, 98];

//pop() 
//Delete from end & return the deleted element
marks1.pop();
console.log(marks1);
console.log(marks1.pop()); //43

//toString()
//converts array to string
//No changes in the original array
let nums = [97, 82, 78, 84, 65];
console.log(nums);
console.log(nums.toString());

let keyWords = ["let", "console", "log", "const", "typeof"];
console.log(keyWords);
console.log(keyWords.toString());

//concat() 
//Joins multiple arrays & returns result
let arrayOne = [10, 20, 30 , 40, 50];
let arrayTwo = [60, 70, 80, 90, 100];
let arrayConcat = arrayOne.concat(arrayTwo);
console.log(arrayConcat);
arrayThree = [110, 120, 130, 140, 150];
let arrayConcat1 = arrayOne.concat(arrayTwo).concat(arrayThree);
// let arrayConcat1 = arrayOne.concat(arrayTwo, arrayThree);
console.log(arrayConcat1);

//unshift() 
//Add to start
let arr = [20, 30, 40 , 50];
console.log(arr.unshift(10)); //Returns updated array length
console.log(arr);

//shift()
//Delete  from start & return
let arr1 = [25, 10 , 20 , 30 , 40 , 50];
console.log(arr1.shift()); //25
console.log(arr1);

//slice()
//Returns a peice of the array
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(1, 4)); //[1, 2, 3];

//splice()
//Add
//Delete
//Replace
//Change original array (add, remove, replace)

// splice(startIndex, deleteCount, newNum1, newNum2......, newNumn);

let a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

a.splice(3, 0, 12); //Add 12 at index 3
console.log(a);
// [5, 10, 15, 12, 20, 25, 30, 35, 40, 45, 50]

a.splice(5, 1); //Delete element at index 5. 25 is deleted
console.log(a);
// [5, 10, 15, 12, 20, 30, 35, 40, 45, 50]

a.splice(7, 1, 100); //Replaces 40 by 100
console.log(a);
// [5, 10, 15, 12, 20, 30, 35, 100, 45, 50]

a.splice(4, 4, 31, 41, 51, 61); // Replaces 4 elements
console.log(a);
// [5, 10, 15, 12, 31, 41, 51, 61, 45, 50]

a.splice(4, 4); // Deletes 4 elements
console.log(a);
// [5, 10, 15, 12, 45, 50]

a.splice(3);
console.log(a); //[5, 10, 15] 









let costPrice = [250, 645, 300, 900, 50];
let discount = 10;
console.log("Prices before the discount is applied:",costPrice);

//Array Literal Notation
// let myArray = [];

//Array Constructor
// let myArray = new Array(); 

//With specific size
// let myArray = new Array(5); // Creates an array of length 5 filled with empty slots

//Only variable name
// let myArray; // Value is currently undefined

let sellingPrice = [];
for (let index in costPrice) {
    sellingPrice[index] = costPrice[index] - (costPrice[index])/discount;
}
console.log("Prices after the discount is applied:",sellingPrice);
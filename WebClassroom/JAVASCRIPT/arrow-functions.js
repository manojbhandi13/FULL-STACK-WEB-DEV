//Compact way of writing a function

/* const functionName = (p1, p2,..., pn) => {
    //code
   } */

function sum(a, b) {
    console.log(a + b);
}

const arrowSum = (a, b) => {
    console.log(a + b);
}

// console.log(arrowSum(10, 20));
arrowSum(10, 20);

function product(a, b) {
    console.log(a * b);
}

const arrowProduct = (a, b) => {
    console.log(a * b);
}

arrowProduct(125, 5);

const arrowMul = (a, b) => {
    return a * b;
}

console.log(arrowMul)
// (a, b) => {
//     return a * b;
// }

console.log(arrowMul(3, 4)); //12


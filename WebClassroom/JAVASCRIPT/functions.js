//Block of code that performs a specific task. Can be invoked whenever needed
//Minimizes Redundancy

function myFunction() {
    console.log("Welcome to the learning journey!");
    console.log("We are learning JavaScript ;)");
}

myFunction();

function sum(x, y) {
    // local variables -> scope
    console.log("Sum is computed.");
    s = x + y;
    return s;
}
//Parameters of the functions are the local variables of the function. They have block scope.

let res = sum(5, 4);
console.log(res);
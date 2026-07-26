//Class is a program-code template for creating objects
//Those objects will have some state(variables) & some behaviour(methods) inside it

class Car {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

console.log(Car); //class Car

//Syntax
// let myObj = new MyClass();

let fortuner = new Car();
let lexus = new Car();

console.log(fortuner); // Car{}
console.log(typeof fortuner); // object

fortuner.start();
fortuner.setBrand("fortuner");
lexus.start();
lexus.setBrand("lexus");

//The super keyword is used to call the constructor
//of its parent class to access the parent
//properties & methods

class Person {
  constructor() {
    // console.log("enter parent constructor");
    this.species = "homo sapiens";
  }

  eat() {
    console.log("eating...");
  }
}

class Engineer extends Person {
  constructor(branch) {
    // console.log("entered child constructor");
    super(); //to invoke parent class constructor
    this.branch = branch;
    // super(); //to invoke parent class constructor
    // console.log("exit child constructor");
  }

  work() {
    console.log("solving problems, building things...");
  }
}

let engObj = new Engineer("chemical engineering");

console.log(engObj.branch);
console.log(engObj.species);

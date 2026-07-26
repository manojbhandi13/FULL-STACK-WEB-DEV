class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }

  eat() {
    console.log("eating...");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);
  }

  work() {
    // this.eat();
    super.eat();
    console.log("solving problems, building things...");
  }
}

let engObj = new Engineer("manoj");

// console.log(engObj.name);

engObj.work();

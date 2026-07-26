//Inheritance is passing down properties & methods
// from parent class to child class

//If child & parent have same method, child's
//method will be used (Method overriding)

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let childObj = new Child();

// childObj.hello();

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eating...");
  }

  sleep() {
    console.log("sleeping...");
  }

  work() {
    console.log("do nothing...");
  }
}

class Engineer extends Person {
  work() {
    console.log("solving problems, building things...");
  }
}

class Doctor extends Person {
  work() {
    console.log("treating patients...");
  }
}

let manojEng = new Engineer();
let manojDoc = new Doctor();

// manojEng.work();
// manojEng.eat();
// manojEng.sleep();

manojDoc.eat();
manojDoc.sleep();
manojDoc.work();

console.log(manojEng.species);
console.log(manojDoc.species);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

let manoj = new Person("manoj", 20);
let manu = new Person("manu", 21);

manoj.introduce();
manu.introduce();

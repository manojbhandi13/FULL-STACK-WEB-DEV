const animal = {
  breathes: true,
  eat() {
    console.log("Eating...");
  },
};

const dog = {
  name: "Bruno",
  bark() {
    console.log("Woof!");
  },
};

dog.__proto__ = animal;

dog.eat(); // Eating...
console.log(dog.breathes); // true

//Fix
dog.eat = function () {
  console.log("Bruno is eating bones");
};
dog.eat(); //Bruno is eating bones

console.log(dog.eat);
// ƒ eat() {
//     console.log("Bruno is eating bones");
//   }
console.log(dog);
// The priority goes to the eat() that is in the dog object only.
// Not the one that is in the dog's prototype animal.
//Becauses dog object takes the priority than the set prototype

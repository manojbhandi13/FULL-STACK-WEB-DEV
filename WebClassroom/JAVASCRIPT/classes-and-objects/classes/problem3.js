class Vehicle {
  constructor() {
    this.brand = "Ferrari";
    this.speed = 300;
  }

  describe() {
    console.log(`Brand: ${this.brand}, Speed: ${this.speed}km/h\n`);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.wheels = 4;
  }

  describe() {
    console.log(
      `Brand: ${this.brand}, Speed: ${this.speed}km/h, Wheels: ${this.wheels}\n`,
    );
  }

  describeFromParent() {
    super.describe();
  }
}

class Bike extends Vehicle {
  constructor() {
    super();
    this.brand = "Yamaha";
    this.speed = 150;
    this.wheels = 2;
  }

  describe() {
    console.log(
      `Brand: ${this.brand}, Speed: ${this.speed}km/h, Wheels: ${this.wheels}\n`,
    );
  }
}

let car = new Car();
let bike = new Bike();

car.describe();
bike.describe();

car.describeFromParent();
//The methods in the parent class, that are overriden by the child classes cannot be
//accessed by the child objects. This is not allowed outside of the class. This can be
//achieved using the super keyword. The overriden method is accessed inside the child
//class using the super key word inside another method and that specific method can be
//called

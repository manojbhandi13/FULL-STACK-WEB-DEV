//Constructor() method is:
// - automatically invoked by new
// - initializes objects

//constructor is a special method inside class

class Car {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new Car("fortuner", 12);
console.log(fortuner);
let lexus = new Car(undefined, 10);
console.log(lexus);

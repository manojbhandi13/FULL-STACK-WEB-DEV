const vehicle = {
  hasEngine: true,
  start() {
    console.log("Vehicle starting...");
  },
};

const car = {
  wheels: 4,
};

const sportsCar = {
  brand: "Ferrari",
  topSpeed: 300,
};

car.__proto__ = vehicle;
sportsCar.__proto__ = car;

console.log(sportsCar.hasEngine); // true
console.log(sportsCar.wheels); // 4
sportsCar.start(); // Vehicle starting...

//
car.start = function () {
  console.log("Car starting...");
};

sportsCar.start(); // Car starting...

console.log("vehicle -> car -> sportsCar");
//Logging sportsCar.hasEngine, checks is sportsCar object has the
// hasEngine property. No. So it moves to its prototype, i.e, car.
//It checks whether car has the property hasEngine. No. So, it moves
//to the car's prototype, vehicle and finds the hasEngine property.
// This is a pattern that follows for all cases; if the property or
//method is found at any object level, it stops right there.

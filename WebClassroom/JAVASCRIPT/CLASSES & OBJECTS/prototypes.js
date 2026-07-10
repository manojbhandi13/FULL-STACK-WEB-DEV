const student = {
  fullName: "manojbhandi", //property; also called states
  marks: 94.4, //property; also called states
  printMarks: function () {
    console.log(this.marks); //student.marks
  }, //method; also called behaviour
};

//prototype

//internally, the typeof array in JS is 'object'

//If object & prototype have same method,
// object's method will be used
const employee = {
  calcTax() {
    console.log("Tax rate is 10%.");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 20%.");
  },
};

const karan = {
  salary: 60000,
};

karanArjun.__proto__ = employee;
karan.__proto__ = employee;

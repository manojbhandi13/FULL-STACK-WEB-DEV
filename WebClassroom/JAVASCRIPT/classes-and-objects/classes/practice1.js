let data = "some information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`data: ${data}`);
  }
}

class Admin extends User {
  editData() {
    data = "some new information (edited)";
    console.log(`edit data: ${data}`);
  }
}

let student1 = new User("manoj", "manoj@email.com");
let student2 = new User("manu", "manu@email.com");

student1.viewData();
student2.viewData();

let teacher1 = new User("dean", "dean@college.com");

teacher1.viewData();

let admin1 = new Admin("principal1", "p1@principal.college.com");

admin1.editData();

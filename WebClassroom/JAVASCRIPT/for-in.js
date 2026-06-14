const student = {
    name : "Manoj Bhandi",
    age : 20,
    cgpa : 7.5,
    isPass : true
};

for (let key in student) {
    // console.log(key);
    // console.log(student[key]);
    console.log(key,"=",student[key]);
}
const student={
    fullName : "Manoj Bhandi",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student["fullName"]);
console.log(student.fullName);
console.log(student["age"]);
console.log(student.age);
console.log(student["cgpa"]);
console.log(student.cgpa);
console.log(student["isPass"]);
console.log(student.isPass);
console.log(!student.isPass);

student["age"] = student["age"] + 1;
console.log(student["age"]);

student.age = student.age + 1;
console.log(student.age);

student["fullName"] = "Manoj M Bhandi";
console.log(student["fullName"]);

student.fullName = "M M Bhandi";
console.log(student.fullName);


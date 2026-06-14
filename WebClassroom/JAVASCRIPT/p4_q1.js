let fullName = prompt("Enter your Full Name:");
let atTheRate = `@`;
let userName = atTheRate.concat(fullName.toLowerCase()).concat(fullName.length);
console.log(`Your username is: ${userName}`);

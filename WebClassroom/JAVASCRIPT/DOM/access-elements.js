//Selecting By Id

let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);

//Selecting By Class Name
let headings = document.getElementsByClassName("heading-class");
console.log(headings);
console.dir(headings);
//Returns HTML Collection

//Selecting By Tag Name
let elements = document.getElementsByTagName("p");
console.log(elements);
console.dir(elements);
//Returns HTML Collection

//Query Selector
let firstElement = document.querySelector("myId/myClass/tags"); //Returns first element
let allElements = document.querySelectorAll("myClass/tags"); //Returns NodeList

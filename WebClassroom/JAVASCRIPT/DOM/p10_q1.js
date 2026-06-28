//Append a text to the existing text using JS
let heading = document.querySelector("h2");
heading.innerText += " from Manoj";

//Create 3 divs with common class name - "box".
// Access them & add some unique text to each of them.
let boxList = document.querySelectorAll(".box");
boxList[0].innerText += " to Web Dev!";
boxList[1].innerText += " to Web Development!";
boxList[2].innerText += " to Web Development once again!";

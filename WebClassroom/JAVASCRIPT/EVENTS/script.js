// Event Handling in JS
// Node.event = () => {
//     //handle here
// }
let buttonOne = document.querySelector("#button1");
buttonOne.onclick = () => {
  console.log("buttonOne was clicked!");
  alert("Hello JS!");
  let a = 25;
  a++;
  console.log(a); //26
};

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("mouse went inside div");
};

//JS Event Handling gets more priority than Inline Event Handling

//The Event Object
let button = document.querySelector("#btn");
button.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let divSecond = document.querySelector("#sec-div");
divSecond.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

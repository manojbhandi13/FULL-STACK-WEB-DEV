// Node.addEventListener(event, callback)
// Node.removeEventListener(event, callback)
// *Note: The callback reference should be same to remove

let btn1 = document.querySelector("#btn1");

//Multiple Event Listeners can be added
btn1.addEventListener("click", (e) => {
  console.log("btn1 was clicked - handler1");
});

btn1.addEventListener("click", (e) => {
  console.log("btn1 was clicked - handler2");
});

const handler3 = (e) => {
  console.log("btn1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (e) => {
  console.log("btn1 was clicked - handle4");
});

btn1.removeEventListener("click", handler3);

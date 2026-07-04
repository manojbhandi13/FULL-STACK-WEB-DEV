let status = document.querySelector("#status");
let box = document.querySelector("#box");
let removeButton = document.querySelector("#remove-btn");

// Add a mouseenter listener to the box — changes h2 text to "Mouse entered!"
// and box background to tomato

const mouseEnterBox = (e) => {
  status.innerText = "Mouse entered!";
  box.style.backgroundColor = "tomato";
};

box.addEventListener("mouseenter", mouseEnterBox);

// Add a mouseleave listener to the box — changes h2 text to "Mouse left!"
// and box background back to dodgerblue

box.addEventListener("mouseleave", (e) => {
  status.innerText = "Mouse left!";
  box.style.backgroundColor = "dodgerblue";
  console.log("Mouse Left!");
});

// When remove-btn is clicked — remove the mouseenter listener only
removeButton.addEventListener("click", () => {
  box.removeEventListener("mouseenter", mouseEnterBox);
  status.innerText = "Waiting...";
});
// After removal, hovering should no longer trigger the enter effect but leaving
// should still work

//After removal, on hovering, ofcourse the enter effect isn't working.
//The leaving still works, it appears to be working only once, as there is no change in the status text after the leaving.
// This can be confirmed by the log message in the mouseleave EventListener

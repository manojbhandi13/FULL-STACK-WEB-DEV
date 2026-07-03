// When the mouse enters the box — change h2 text to "Mouse is inside!"
// and box background to tomato
let h2 = document.querySelector("#message");
let box = document.querySelector("#box");
box.onmouseenter = () => {
  h2.innerText = "Mouse is inside!";
  box.style.backgroundColor = "tomato";
};

// When the mouse leaves the box — change h2 text back to "Hover over the box"
// and box background back to dodgerblue
box.onmouseleave = () => {
  h2.innerText = "Hover over the box";
  box.style.backgroundColor = "dodgerblue";
};

// When the box is clicked — log the mouse coordinates clientX and clientY
// from the event object
box.onclick = (event) => {
  console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
};

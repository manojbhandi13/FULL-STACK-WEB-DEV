// Each box gets two listeners:

let log = document.querySelector("#log");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let reset_listeners = document.querySelector("#reset-listeners");

// - click — toggles active class and updates h2 to "Clicked: <box id>"

const clickBox1 = (e) => {
  box1.classList.toggle("active");
  log.innerText = `Clicked: ${e.target.getAttribute("id")}`;
};

box1.addEventListener("click", clickBox1);

const clickBox2 = (e) => {
  box2.classList.toggle("active");
  log.innerText = `Clicked: ${e.target.getAttribute("id")}`;
};

box2.addEventListener("click", clickBox2);

// - mouseenter — updates h2 to "Hovering: <box id>" using evt.target.getAttribute("id")

const enterBox1 = (e) => {
  log.innerText = `Hovering: ${e.target.getAttribute("id")}`;
};

box1.addEventListener("mouseenter", enterBox1);

const enterBox2 = (e) => {
  log.innerText = `Hovering: ${e.target.getAttribute("id")}`;
};

box2.addEventListener("mouseenter", enterBox2);

// reset-listeners button removes ALL listeners from both boxes when clicked — after reset, clicking and hovering on boxes does nothing

const resetAll = () => {
  box1.removeEventListener("click", clickBox1);
  box2.removeEventListener("click", clickBox2);
  box1.removeEventListener("mouseenter", enterBox1);
  box2.removeEventListener("mouseenter", enterBox2);
  box1.classList.remove("active");
  box2.classList.remove("active");
  // After reset, update h2 to "All listeners removed"
  log.innerText = "All listeners removed";
  // The reset-listeners button itself should only work once — remove its own listener after it fires once using removeEventListener
  reset_listeners.removeEventListener("click", resetAll);
};

reset_listeners.addEventListener("click", resetAll);

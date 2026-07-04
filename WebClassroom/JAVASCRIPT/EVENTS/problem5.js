// Add a click listener to btn — increments count and updates display

let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let toggleButton = document.querySelector("#toggle-btn");

let count = 0;

const increment = () => {
  count++;
  display.innerText = `Click count: ${count}`;
};

btn.addEventListener("click", increment);

// Add a second click listener to btn — logs "Handler 2 fired" and the current count to the console

btn.addEventListener("click", () => {
  console.log("Handler 2 fired");
  console.log(count);
});

// toggle-btn should toggle the first listener on and off:

let isClicked = false;
toggleButton.addEventListener("click", () => {
  isClicked = !isClicked;
  // - First click on toggle-btn — removes the increment listener, updates toggle button text to "Enable Listener"
  if (isClicked) {
    btn.removeEventListener("click", increment);
    toggleButton.innerText = "Enable Listener";
  }
  // - Second click on toggle-btn — adds the increment listener back, updates toggle button text to "Disable Listener"
  else {
    btn.addEventListener("click", increment);
    toggleButton.innerText = "Disable Listener";
  }
});

// Second listener should always remain active regardless of toggle
//Second listener is kept independent of toggle. It remains intact.

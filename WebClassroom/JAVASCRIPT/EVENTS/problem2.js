// Clicking increment increases the count by 1 and updates the display
let counterDisplay = document.querySelector("#counter-display");
let count = 0;
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");

// Log the event type and target element for every button click using the event object
const logEvent = (e) => {
  console.log(e.type);
  console.log(e.target);
};

increment.onclick = (e) => {
  count++;
  counterDisplay.innerText = `Count: ${count}`;
  // Log the event type and target element for every button click using the event object
  logEvent(e);
};

// Clicking decrement decreases the count by 1 and updates the display
decrement.onclick = (e) => {
  // Count should never go below 0 — if it's already 0, decrement does nothing
  if (count > 0) {
    count--;
    counterDisplay.innerText = `Count: ${count}`;
    // Log the event type and target element for every button click using the event object
    logEvent(e);
  }
};

// Clicking reset sets the count back to 0 and updates the display
reset.onclick = (e) => {
  count = 0;
  counterDisplay.innerText = `Count: ${count}`;
  // Log the event type and target element for every button click using the event object
  logEvent(e);
};

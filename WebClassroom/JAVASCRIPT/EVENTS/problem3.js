// Clicking any card adds the active class to it and removes it from all others — only one card active at a time
let h2Text = document.querySelector("#status");
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");

const cardSelected = (e) => {
  h2Text.innerText = `Selected: ${e.target.innerText}`;
};

card1.onclick = (e) => {
  card1.classList.add("active");
  card2.classList.remove("active");
  card3.classList.remove("active");
  // Update the h2 text to "Selected: <card text>" when a card is clicked —
  // use evt.target to get the card text
  cardSelected(e);
};

card2.onclick = (e) => {
  card2.classList.add("active");
  card1.classList.remove("active");
  card3.classList.remove("active");
  // Update the h2 text to "Selected: <card text>" when a card is clicked —
  // use evt.target to get the card text
  cardSelected(e);
};

card3.onclick = (e) => {
  card3.classList.add("active");
  card1.classList.remove("active");
  card2.classList.remove("active");
  // Update the h2 text to "Selected: <card text>" when a card is clicked —
  // use evt.target to get the card text
  cardSelected(e);
};

// When mouse enters a card — log its id attribute from the event object
// using evt.target.getAttribute("id")

const mouseEnter = (e) => {
  console.log(e.target.getAttribute("id"));
};
card1.onmouseenter = (e) => {
  mouseEnter(e);
};

card2.onmouseenter = (e) => {
  mouseEnter(e);
};

card3.onmouseenter = (e) => {
  mouseEnter(e);
};

// When mouse leaves a card — log "Left: <card id>"

const mouseLeave = (e) => {
  console.log(`Left: ${e.target.getAttribute("id")}`);
};

card1.onmouseleave = (e) => {
  mouseLeave(e);
};

card2.onmouseleave = (e) => {
  mouseLeave(e);
};

card3.onmouseleave = (e) => {
  mouseLeave(e);
};

// Double clicking any card resets everything — removes active from all cards
// and sets h2 back to "No card selected"

const resetH2 = () => {
  card1.classList.remove("active");
  card2.classList.remove("active");
  card3.classList.remove("active");
  h2Text.innerText = "No card selected";
};

card1.ondblclick = (e) => {
  resetH2();
};

card2.ondblclick = (e) => {
  resetH2();
};

card3.ondblclick = (e) => {
  resetH2();
};

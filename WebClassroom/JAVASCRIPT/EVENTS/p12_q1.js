let themeBtn = document.querySelector("#theme-btn");
let body = document.querySelector("body");

const toggle = () => {
  body.classList.toggle("dark-mode");
};

themeBtn.addEventListener("click", toggle);

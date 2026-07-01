//Task One - getAttribute & setAttribute
//Get and log the id attribute of the h1 element
let h1 = document.querySelector("h1");
console.log(h1.getAttribute("id"));

// Add a new attribute data-level with value "beginner" to the h1 element
h1.setAttribute("data-level", "beginner");

// Confirm it was added by logging it with getAttribute
console.log(h1.getAttribute("data-level"));

//Task Two -  style property
// Change the h1 element's text color to dodgerblue using the style property
h1.style.color = "dodgerblue";

//Change the p element's font size to 20px using the style property
let p = document.querySelector("p");
p.style.fontSize = "20px";

//Task Three - classList
// Add classes highlight and bold to the p element with id status
p.classList.add("highlight", "bold");
// p.setAttribute("id", "status"); It's already set

// Check if highlight class exists on it and log the result
console.log(p.classList);
console.log(p.classList.contains("highlight"));

// Remove the highlight class from it
p.classList.remove("highlight");

// Toggle the active class on the p element twice and log whether it exists after each toggle
p.classList.toggle("active");
console.log(p.classList.contains("active")); //true
p.classList.toggle("active");
console.log(p.classList.contains("active")); //false

//Task Four - Node Insertion
// Create a new li element with text "React" and append it to the end of skill-list
let newLi = document.createElement("li");
let skill_list = document.querySelector("#skill-list");
newLi.innerText = "React";
skill_list.append(newLi);

// Create a new li element with text "Git" and prepend it to the beginning of skill-list
let newLi_1 = document.createElement("li");
newLi_1.innerText = "Git";
skill_list.prepend(newLi_1);

// Create a new h3 element with text "Technologies I'm Learning" and insert it before the ul inside container
let containerDiv = document.querySelector("#container");
let newH3 = document.createElement("h3");
newH3.innerText = "Technologies I'm Learning";
containerDiv.prepend(newH3);

//Task Five - Node Removal
// Remove the p element with id status from the DOM
p.remove();

//Task Six - Chaining it all together
// Create a new div element
let div = document.createElement("div");

// Set its id attribute to "footer" using setAttribute
div.setAttribute("id", "footer");

// Add class highlight to it using classList
div.classList.add("highlight");

// Set its innerText to "Built with HTML, CSS & JS"
div.innerText = "Built with HTML, CSS & JS";

// Set its style padding to "10px"
div.style.padding = "10px";

// Append it to document.body
document.body.append(div);

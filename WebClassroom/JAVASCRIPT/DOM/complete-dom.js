//Task One - DOM Traversal
// Log the tagName of the first child element of skill-list
let skill_list = document.querySelector("#skill-list");
console.log(skill_list.firstElementChild.tagName);

// Log the tagName of the last child element of task-list
let task_list = document.querySelector("#task-list");
console.log(task_list.lastElementChild.tagName);

// Log the total number of children in skill-list using children
console.log(skill_list.children.length);

// Log the total number of childNodes in task-list and explain in a comment why it differs from children count
console.log(task_list.childNodes.length);
//childNodes considers the textNodes & commentNodes as well
// (textNodes, the newlines as whitespaces in this case).
// But children considers only the elementNodes

//Task Two - Element Properties
// Log the innerHTML of skills-section
let skills_section = document.querySelector("#skills-section");
console.log(skills_section.innerHTML);

// Log the innerText of profile
let profile = document.querySelector("#profile");
console.log(profile.innerText);

// Change the innerText of username to your actual name
let userName = document.querySelector("#username");
userName.innerText = "Manoj Bhandi";

// Change the innerHTML of bio to "<b>Full Stack Developer</b> in progress"
let bio = document.querySelector("#bio");
bio.innerHTML = "<b>Full Stack Developer</b> in progress";

//Task Three - getAttribute & setAttribute
// Log the current value of data-user attribute on the profile div
console.log(profile.getAttribute("data-user"));

// Update data-user attribute value from "guest" to your actual name
profile.setAttribute("data-user", "manojbhandi");

// Add a brand new attribute data-joined with value "2024" to profile
profile.setAttribute("data-joined", "2024");

// Confirm both attributes exist by logging them
console.log(profile.getAttribute("data-user"));
console.log(profile.getAttribute("data-joined"));

//Task Four - Style Property
// Change the dashboard-title color to dodgerblue
let dashboard_title = document.querySelector("#dashboard-title");
dashboard_title.style.color = "dodgerblue";

// Change the dashboard-title font size to 36px
dashboard_title.style.fontSize = "36px";

// Change the profile div background color to "#f0f4f8"
profile.style.backgroundColor = "#f0f4f8";

// Change the stats-section padding to "10px"
let stats_section = document.querySelector("#stats-section");
stats_section.style.padding = "10px";

//Task Five - classList
// Add classes highlight and bold to dashboard-title
dashboard_title.classList.add("highlight", "bold");

// Check if highlight exists on it and log the result
console.log(dashboard_title.classList.contains("highlight")); //true

// Remove highlight from it
dashboard_title.classList.remove("highlight");

// Toggle active on username three times — log whether it exists after each toggle
userName.classList.toggle("active");
console.log(userName.classList.contains("active")); //true
userName.classList.toggle("active");
console.log(userName.classList.contains("active")); //false
userName.classList.toggle("active");
console.log(userName.classList.contains("active")); //true

// Replace class bold with urgent on dashboard-title
dashboard_title.classList.replace("bold", "urgent");
//Previously dashboard-title color is set to dodgerblue using
// CSSStyleDeclaration Object properties. Therefore, .urgent is
//not getting applicable

//Task Six - Node Insertion
// Create a new li with text "React" and append it to skill-list
let newLi1 = document.createElement("li");
newLi1.innerText = "React";
skill_list.append(newLi1);

// Create a new li with text "Node.js" and append it to skill-list
let newLi2 = document.createElement("li");
newLi2.innerText = "Node.js";
skill_list.append(newLi2);

// Create a new li with text "Git" and prepend it to skill-list
let newLi3 = document.createElement("li");
newLi3.innerText = "Git";
skill_list.prepend(newLi3);

// Create a new task li with text "Learn Events in JS" and id "task-4" — append it to task-list
let newLi4 = document.createElement("li");
newLi4.innerText = "Learn Events in JS";
newLi4.setAttribute("id", "task-4");
task_list.append(newLi4);

// Create a new h3 with text "Tools I Use" and insert it before skill-list inside skills-section
let newH3 = document.createElement("h3");
newH3.innerText = "Tools I Use";
skill_list.before(newH3);

// Create a new ul with id "tools-list" and insert it after skill-list inside skills-section
let newUl1 = document.createElement("ul");
newUl1.setAttribute("id", "tools-list");
skill_list.after(newUl1);

// Add three li items — "VS Code", "Git", "GitHub" — to tools-list
let newLi5 = document.createElement("li");
newLi5.innerText = "VS Code";
newUl1.append(newLi5);
let newLi6 = document.createElement("li");
newLi6.innerText = "Git";
newUl1.append(newLi6);
let newLi7 = document.createElement("li");
newLi7.innerText = "GitHub";
newUl1.append(newLi7);

//Task Seven - Node Removal
// Remove task-1 from task-list using remove()
let task_1 = document.querySelector("#task-1");
task_1.remove();

// Remove the first child element of skill-list using removeChild()
skill_list.removeChild(skill_list.firstElementChild);

//Task Eight - Stats Update

// After all insertions and removals are done:

// Count the remaining items in skill-list and set the innerText of skill-count to "Skills: X"
// where X is the actual count
let skill_count = document.querySelector("#skill-count");
skill_count.innerText = "Skills: " + skill_list.children.length;

// Count the remaining items in task-list and set the innerText of task-count to "Tasks: X"
// where X is the actual count
let task_count = document.querySelector("#task-count");
task_count.innerText = "Tasks: " + task_list.children.length;

//Task Nine - Chaining it all together
// Create a div element
let newDiv = document.createElement("div");

// Set its id to "footer" using setAttribute
newDiv.setAttribute("id", "footer");

// Set a data-version attribute to "1.0"
newDiv.setAttribute("data-version", "1.0");

// Add classes highlight and bold using a single classList.add() call
newDiv.classList.add("highlight", "bold");

// Set its innerText to "Dashboard built by <your name> | Full Stack Journey"
newDiv.innerText = "Dashboard built by Manoj | Full Stack Journey";

// Set its style — padding: "10px", marginTop: "20px", backgroundColor: "#f0f4f8"
let accessor = newDiv.style;
accessor.padding = "10px";
accessor.marginTop = "20px";
accessor.backgroundColor = "#f0f4f8";

// Append it to document.body
document.body.append(newDiv);

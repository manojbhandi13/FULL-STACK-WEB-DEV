//Adding new element is 2 step process
//Element needs to be created 1st before adding
//node.append(element);
let newButton = document.createElement("button");
console.log(newButton);
console.dir(newButton);
newButton.innerText = "Click Me!";
div = document.querySelector("#box");
div.append(newButton); //adds at the end of the node (inside)
div.prepend(newButton); //adds at the start of the node (inside)
div.before(newButton); // adds before the node (outside)
div.after(newButton); // adds after the node (outside)

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am New Heading!</i>";

document.body.prepend(newHeading);
// document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove(); //removes the node
// document.querySelector("p").remove();

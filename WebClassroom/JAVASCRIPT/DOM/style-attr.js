let id = document.querySelector("#box");
id.style.backgroundColor = "green";
id.style.backgroundColor = "purple";
id.style.fontSize = "26px";
let accessor = id.style;
// accessor.innerText = "Hello";
// Only the properties present in the CSSStyleDeclaration object work
accessor.backgroundColor = "pink";
console.log(id.style); //CSSStyleDeclaration object
console.dir(id.style);
accessor.width = "300px";
accessor.height = "200px";
accessor.border = "3px dashed red";
accessor.borderWidth = "5px";

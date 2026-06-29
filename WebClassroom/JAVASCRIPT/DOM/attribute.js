//Get Attribute Value
let div = document.querySelector("div");
console.log(div);
console.dir(div);

let id = div.getAttribute("id");
console.dir(`Id for div is ${id}`);

let name = div.getAttribute("name");
console.dir(`Name for div is ${name}`);

let p = document.querySelector("p");
let para = p.getAttribute("class");
console.dir(`Class for p is ${para}`);

//Set Attribute Value
let paraSecond = document.querySelector(".para1");
paraSecond.setAttribute("class", "newPara");
console.dir(paraSecond.getAttribute("class"));

//Task 1
let taskOne = document.querySelector("#container");
console.dir(taskOne.tagName);

//Task 2
let taskTwo = document.querySelector("#title");
console.dir(taskTwo.innerText);
console.dir(taskTwo.textContent);
//If style="visibility:hidden" is set for title, the innerText property
//would show nothing. But textContent shows the text. The textContent property
//actually parses the style implementation.

//Task Three
console.dir(taskOne.innerHTML);

//Task Four
let taskFour = document.querySelector("#lang-list");
//3 children
console.log("\n");
console.dir(taskFour.children);
//7 childNodes
console.log("\n");
console.dir(taskFour.childNodes);
//childNodes property counts all the nodes, the text nodes(newline as white text in this case),
//the comment nodes and the element nodes.
//children property counts only the element nodes, which are the HTML tag elements.

//Task Five
console.dir(taskFour.firstChild); // newline
console.dir(taskFour.firstChild.nodeType); // text node
console.dir(taskFour.firstElementChild); // li
console.dir(taskFour.firstElementChild.nodeType); // element node
console.dir(taskFour.lastElementChild); // li
console.dir(taskFour.lastChild); // newline
console.dir(taskFour.lastElementChild.innerText);

//Task Six
let langListParent = taskFour.parentElement;
console.dir(langListParent);
console.dir(langListParent.tagName);
console.dir(langListParent.parentElement);
console.dir(langListParent.parentElement.tagName);

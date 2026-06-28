const list = document.getElementById("list");

// All nodes including whitespace text nodes
console.log(list.childNodes);
// NodeList [text, li, text, li, text, li, text]

// Element nodes only
console.log(list.children);
// HTMLCollection [li, li, li]

// First node — whitespace text node
console.log(list.firstChild);
// #text

// First element node — what you actually want
console.log(list.firstElementChild);
// <li>HTML</li>

// Last element node
console.log(list.lastElementChild);
// <li>JavaScript</li>

// Node types
console.log(list.firstElementChild.nodeType); // 1 — Element
console.log(list.firstChild.nodeType); // 3 — Text

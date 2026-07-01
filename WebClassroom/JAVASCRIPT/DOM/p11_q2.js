let para = document.querySelector("p");
console.dir(para.classList); //DOMTokenList
para.classList.add("newClass");
console.dir(para.classList);
para.classList.add("newClass1", "newClass2"); //Can add multiple classes
//classes are ignored if they already exist
console.dir(para.classList);
para.classList.remove("newClass1");

// .toggle() Adds the class if it's missing, removes it if it's present
// .contains() Checks if a class exists. Returns true or false.
// .replace() Swaps one class for another in a single call.

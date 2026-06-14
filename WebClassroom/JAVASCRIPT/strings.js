//String Interpolation
//A way to have embedded expressions in strings
let obj = {
    item : "pen",
    cost : 10
}
console.log("The cost of", obj.item, "is", obj.cost, "rupees.");
console.log(`The cost of ${obj.item} is ${obj.cost} rupees.`); //Template Literal
console.log(`This is a template literal. And expression embedded is ${1 + 2 + 3}.`);

//Escape sequence
console.log("Manoj\nBhandi"); //Next line
console.log("Manoj\tBhandi"); //Tab Space

let str = "Manoj\tBhandi";
console.log(str.length); //12

//String Methods in JS
//Strings are Immutable in JS

let str1 = "Manoj Bhandi";
console.log(`Upper case of str is ${str1.toUpperCase()}.`); //toUpperCase()
console.log(`Lower case of str is ${str1.toLowerCase()}.`); //toLowerCase()

//trim()
let str2 = "  Manoj Bhandi"
console.log(`Untrimmed version of str is ${str2}.`);
console.log(`Trimmed version of str is ${str1.trim()}.`); //Removes white spaces from starting & end

//trim()
let str3 = "This is     ";
let str4 = "JavaScript.";
console.log(`Untrimmed version is ${str3 + str4}.`);
console.log(`Trimmed version is ${str3.trim()} ${str4}.`);


//slice()
let msg = "abcdefg";
console.log(`Sliced part is ${msg.slice(2, 6)}.`);
console.log(`Sliced part is ${msg.slice(2)}.`);

//concat()
let msg1 = "Java";
let msg2 = "Script";
console.log(`Concatinated form is ${msg1.concat(msg2)}.`);

//replace()
let sentence = "This is a small sentence";
console.log(sentence.replace("small", "big"));
let word = "helololo";
console.log(`Replaces 1st appearrance: ${word.replace("ol", "p")}.`); //helpolo
console.log(`Replace all the appearances: ${word.replaceAll("ol", "p")}.`); //helppo

//charAT()
let note = "This is a special note.";
console.log(`Character at the index ${3} is ${note.charAt(6)}.`);


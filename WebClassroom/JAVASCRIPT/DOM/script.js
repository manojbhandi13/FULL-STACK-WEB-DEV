console.log(window.document); //Actual HTML Code
console.dir(window.document); //DOM Structure
console.log(typeof document); //object
document.body.style.background = "green";
document.body.childNodes[1].innerText = "DOM DEMO";

//Why do we write the script tag at the end of the body tag,
//and why not along with the link tag in head?

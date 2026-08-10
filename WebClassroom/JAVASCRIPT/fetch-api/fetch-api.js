// The Fetch API provides an interface for fetching (sending/receiving) resources

// It uses Request & Response objects

// The fetch() is used to fetch a resource (data)

// let promise = fetch(URL, [options]);

let URL = "https://meowfacts.herokuapp.com/?count=20";
const factParah = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response); // JSON format
  //   console.log(response.status);
  let facts = await response.json();
  factParah.innerText = facts.data[0];
};

// const getFacts = () => {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((facts) => (factParah.innerText = facts.data[0]));
// };

btn.addEventListener("click", getFacts);

// UNDERSTANDING TERMS
// AJAX - is Asynchronous JS & XML
// JSON - JavaSript Object Notation
// AJAJ

// json() method: (an async method like fetch)
// It returns a second promise that resolves with the result of parsing the response
//body text as JSON. (Input is JSON, output is JS object).

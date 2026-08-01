// Create a promise that:

// Resolves with "Data loaded successfully" after 2 seconds using setTimeout
// Use .then() to log the resolved value
// Use .catch() to log any rejection

// Then create another promise that:

// Rejects with "Failed to load data" after 2 seconds
// Handle it with .catch()

let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 2000);
});

promiseOne.then((res) => console.log(res)).catch((err) => console.log(err));

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed to load data");
  }, 2000);
});

promiseTwo.catch((err) => console.log(err));

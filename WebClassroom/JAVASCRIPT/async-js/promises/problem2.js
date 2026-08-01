// Create a function fetchUser(id) that:

// Returns a promise
// After 2 seconds, if id is valid (greater than 0) — resolves with "User <id> fetched"
// If id is invalid (0 or negative) — rejects with "Invalid user id"
// Chain .then() to log the result
// Chain .catch() to log the error

const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve(`User ${id} fetched`);
      else reject("Invalid user id");
    }, 2000);
  });
};

fetchUser(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

fetchUser(-1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

fetchUser(0)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

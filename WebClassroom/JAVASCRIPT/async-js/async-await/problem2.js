// The promise only waits as long as resolve() is delayed.
// If resolve() is called immediately —
// the promise resolves immediately regardless of any setTimeout inside.

function printStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Checking credentials...");
      resolve();
    }, 1000);
  });
}

function fireWall(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (username !== "manoj" || password !== "1234") {
          throw new Error("Invalid credentials");
        }
        console.log("Login successful. Welcome Manoj!");
      } catch (err) {
        console.log(err.message);
      }
      resolve();
    }, 1000);
  });
}

async function loginUser(username, password) {
  await printStatus();
  await fireWall(username, password);
}

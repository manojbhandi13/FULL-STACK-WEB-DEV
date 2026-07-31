// Write a function wait(ms, callback) that calls the callback after ms milliseconds.

const wait = (ms, callBack) => {
  setTimeout(callBack, ms);
};

wait(2000, () => console.log("2 seconds passed"));

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject("not success");
  });
};

let promise = getPromise();

promise.then((res) => console.log("promise fulfilled", res));
promise.catch((err) => console.log(err));

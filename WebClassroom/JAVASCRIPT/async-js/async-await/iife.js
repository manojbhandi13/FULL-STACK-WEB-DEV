// IIFE: Immediately Invoked Function Expression

// IIFE is a function that is called immediately as soon as it is defined

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data: ${dataId}`);
      resolve("success");
    }, 2000);
  });
}

(async () => {
  setTimeout(() => console.log("getting data1..."), 1000);
  await getData(1);
  setTimeout(() => console.log("getting data2..."), 1000);
  await getData(2);
  setTimeout(() => console.log("getting data3..."), 1000);
  await getData(3);
  setTimeout(() => console.log("getting data4..."), 1000);
  await getData(4);
  setTimeout(() => console.log("getting data5..."), 1000);
  await getData(5);
})();

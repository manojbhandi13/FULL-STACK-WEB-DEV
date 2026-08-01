// APIs return promises

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data: ${dataId}`);
      resolve("done");
      //   reject("refused");
    }, 10000);
  });
}

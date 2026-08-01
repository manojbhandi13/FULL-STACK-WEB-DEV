function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}
console.log("getting data1...");
getData(1)
  .then(() => {
    setTimeout(() => {
      console.log("getting data2...");
    }, 1000);
    return getData(2);
  })
  .then(() => {
    setTimeout(() => {
      console.log("getting data3...");
    }, 1000);
    return getData(3);
  })
  .then(() => {
    setTimeout(() => {
      console.log("getting data4...");
    }, 1000);
    return getData(4);
  })
  .then(() => {
    setTimeout(() => {
      console.log("getting data5...");
    }, 1000);
    return getData(5);
  })
  .then((res) => console.log(res));

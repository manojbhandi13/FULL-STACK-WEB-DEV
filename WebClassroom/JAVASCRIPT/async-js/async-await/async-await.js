// async function always returns a promise

// async function myFunc () {...}

// await pauses the execution of its surrounding async function
//until the promise is settled

// await keyword is only used inside the async functions

async function hello() {
  console.log("hello");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  //   await api(); //1st call
  //   await api(); //2nd call
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data: ${dataId}`);
      resolve("success");
    }, 2000);
  });
}

async function getDataOneByOne() {
  setTimeout(() => console.log("getting data1..."), 1000);
  await getData(1);
  setTimeout(() => console.log("getting data2..."), 1000);
  await getData(2);
  setTimeout(() => console.log("getting data3..."), 1000);
  await getData(3);
  setTimeout(() => console.log("getting data4..."), 1000);
  await getData(4);
  setTimeout(() => console.log("getting data5..."), 1000);
  getData(5);
}

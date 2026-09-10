const URL = "https://jsonplaceholder.typicode.com/posts";

const postObj = {
  title: "My first POST",
  body: "I understand HTTP requests now.",
  userId: 7,
};

const requestObj = new Request(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postObj),
});

// (async () => {
//   console.log(requestObj.body);
//   const body = await requestObj.clone().json();
//   console.log(body);
// })();

const sendRequest = async () => {
  const response = await fetch(requestObj);
  const data = await response.json();
  console.log(data);
  console.log(response);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.ok);
  console.log(response.headers);
};

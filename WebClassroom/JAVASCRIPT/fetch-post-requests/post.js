const URL = "https://jsonplaceholder.typicode.com/posts";

const postObj = {
  title: "My first POST",
  body: "I understand HTTP requests now.",
  userId: 7,
};

const postFunc = async () => {
  console.log("posting...");

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  });

  console.log(response.status);
  console.log("Parsing the response....");
  const data = await response.json();
  console.log(data);
};

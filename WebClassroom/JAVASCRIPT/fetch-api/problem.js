let URL = "https://jsonplaceholder.typicode.com/posts/1";

(async () => {
  let response = await fetch(URL);
  if (!response.ok) {
    console.error("Request failed. Response status is: ", response.status);
    return;
  }
  let responseObj = await response.json();
  console.log(responseObj.title);
})();

const URL1 = "https://jsonplaceholder.typicode.com/users";

const uList = document.createElement("ul");
document.body.append(uList);

(async () => {
  let response = await fetch(URL1);
  let users = await response.json();
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    uList.append(li);
  });
})();

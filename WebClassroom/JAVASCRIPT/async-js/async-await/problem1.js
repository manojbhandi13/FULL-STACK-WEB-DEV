function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, ms);
  });
}

async function greetUser(name) {
  await delay(2000);
  console.log(`Hello, ${name}! Welcome aboard.`);
}

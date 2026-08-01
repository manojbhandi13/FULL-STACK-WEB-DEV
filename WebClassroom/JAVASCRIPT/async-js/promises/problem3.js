//Flat chaining...
//Not nesting...

const getOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order received");
    }, 1000);
  });
};

const processPayment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Payment processed");
      reject("Payment failed");
    }, 2000);
  });
};

const sendConfirmation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("confirmation sent");
    }, 1000);
  });
};

getOrder()
  .then((res) => {
    console.log(res);
    return processPayment();
  })
  .then((res) => {
    console.log(res);
    return sendConfirmation();
  })
  .then((res) => {
    console.log(res);
    console.log("All steps complete");
  })
  .catch((err) => console.log(err));

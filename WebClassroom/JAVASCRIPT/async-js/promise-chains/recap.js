const acceptOrder = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Order accepted"), 1000),
  );
};

const prepareFood = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Food prepared"), 2000),
  );
};

const deliverFood = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Delivery failed - driver unavailable"), 1000),
  );
};

acceptOrder()
  .then((res) => {
    console.log(res);
    return prepareFood();
  })
  .then((res) => {
    console.log(res);
    return deliverFood();
  })
  .catch((err) => console.log(err));

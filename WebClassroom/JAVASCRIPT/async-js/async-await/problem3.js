function checkInventory(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${item} is in stock`);
    }, 1000);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`Payment of ₹${amount} processed`);
      reject("Payment declined");
    }, 2000);
  });
}

function shipOrder(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${item} shipped successfully`);
    }, 1000);
  });
}

(async function () {
  const checked = await checkInventory("laptop");
  console.log(checked);
  const payment = await processPayment(50000);
  console.log(payment);
  const shipment = await shipOrder("laptop");
  console.log(shipment);
})();

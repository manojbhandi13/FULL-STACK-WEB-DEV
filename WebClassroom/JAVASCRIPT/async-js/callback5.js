//CALLBACK HELL SIMULATION

// Simulate this sequence using nested callbacks
// with setTimeout (each step takes 1 second):

// Fetch user (print "User fetched")
// Then fetch their orders (print "Orders fetched")
// Then fetch order details (print "Details fetched")
// Then print "Done!"

// This last one is intentionally painful — it'll make you appreciate Promises.

const callBackHell = () => {
  console.log("User fetched");
  setTimeout(() => {
    console.log("Orders fetched");
    setTimeout(() => {
      console.log("Details fetched");
      setTimeout(() => {
        console.log("Done!");
      }, 1000);
    }, 1000);
  }, 1000);
};

callBackHell();

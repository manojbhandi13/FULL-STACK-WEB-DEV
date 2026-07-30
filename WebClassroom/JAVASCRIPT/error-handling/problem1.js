const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("cannot divide by zero");
    }
    console.log(a / b);
  } catch (err) {
    console.log(err.message);
  }
};

divide(6, 0);
divide(10, 2);

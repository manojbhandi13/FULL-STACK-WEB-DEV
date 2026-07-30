const processOrder = (order) => {
  try {
    if (order === null || order === undefined) {
      //order == null works. because == doesn't do type check
      //when compared to ===. Therefore null & undefined
      //appears to be equal.
      throw new Error("Order does not exist");
    }
    if (Array.isArray(order.items) && order.items.length === 0) {
      throw new Error("Order has no items");
    }
    if (order.total < 0) {
      throw new Error("Order total cannot be negative");
    }
    console.log("Order processed successfully");
  } catch (err) {
    console.log(err.message);
  }
};

processOrder(null);
processOrder({ items: [], total: 100 });
processOrder({ items: ["laptop"], total: -500 });
processOrder({ items: ["laptop"], total: 50000 });

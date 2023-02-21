const order = {
  items: [
    {
      name: "Hair Growth Potion",
      amount: 25,
      quantity: 1,
      weight: 2,
    },
    {
      name: "Wakey Time Potion",
      amount: 9,
      quantity: 2,
      weight: 3,
    },
    {
      name: "Shipping",
      amount: 5,
      shipping: true,
    },
    {
      name: "First Time Customer Discount",
      amount: 4,
      discount: true,
    },
  ],
};

function orderSubtotal(order) {
  console.log(order.items.reduce);

  // let subtotal = 0;
  // for (i = 0; i < order.items.length; i++) {
  //   subtotal += order.items[i].price;
  // }
  // return subtotal;

  // let subtotal = 0;
  // order.items.forEach((item) => {
  //   subtotal += item.price;
  // });
  // return subtotal;

  // return order.items.reduce((subtotal, item) => {
  //   return item.price + subtotal;
  // }, 0);
}

// console.log(orderSubtotal(order)); //expect 28
const orderFunctions = {
  orderSubtotal,
  order,
};
module.exports = orderFunctions;

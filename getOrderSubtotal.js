function getOrderSubtotal(order) {
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

// console.log(getOrderSubtotal(order)); //expect 28
const orderFunctions = {
  getOrderSubtotal,
};
module.exports = orderFunctions;

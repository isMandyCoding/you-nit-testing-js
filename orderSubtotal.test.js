const orderFunctions = require("./orderSubtotal");

describe("orderSubtotal", () => {
  it("should return correct total when passed an order with items", () => {
    expect(orderFunctions.orderSubtotal(orderFunctions.order)).toBe(27);
  });
  it.todo("should return zero when there are no items");
  it.todo("should throw error if ");
});

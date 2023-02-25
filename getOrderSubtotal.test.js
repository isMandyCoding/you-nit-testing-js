const orderFunctions = require("./getOrderSubtotal");

describe("orderSubtotal", () => {
  let order;

  beforeEach(() => {
    order = {
      items: [
        {
          name: "Eye of Newt",
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
  });

  it("should return correct total when passed an valid order with items", () => {
    // Arrange
    const testOrder = {
      items: [
        {
          name: "Eye of Newt",
          amount: 25,
        },
        {
          name: "Wakey Time Potion",
          amount: 9,
        },
      ],
    };

    // Act
    const actual = orderFunctions.getOrderSubtotal(testOrder);

    // Assert
    expect(actual).toBe(27);
  });

  // it.todo("should return zero when there are no items");
  // it.todo("should throw error if ");
});

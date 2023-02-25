# YOU-NIT TESTS IN JAVASCRIPT

![image](https://user-images.githubusercontent.com/35410313/220239783-0f56222b-09f1-45a6-ac3d-98dc983c9816.png)

This is a repo to accompany the Unit Tests demo for the [Phoenix Javascript Meetup](https://www.meetup.com/phoenix-javascript/events/291064279/) on 3/15/2023. Today, we'll be covering the basics of unit testing in Javascript. We'll discuss why to write tests, briefly go over types of tests, and do a demo on writing unit tests in Javascript using [Jest](https://jestjs.io). For this demo, we're going to imagine we're writing code for a small ticket for a magic potion shop app.

## Why write tests?

Writing tests may seem like a time-wasting hastle, but I'd argue that it winds up saving you a lot of time in the long run. #WritingTestsIsSelfCare Some benefits of testing include:

1. Gives you confidence your app works and helps you know when a new commit breaks something **before** you deploy to production.
2. Makes you write cleaner code. Clean code tends to be easier to test.
3. Helps you slow down, plan ahead, and consider edge-cases you might not have otherwise considered.

## Types of tests

There are different kinds of tests and sometimes the lines feel blurred on what test may qualify as which type, but we'll do our best to define them here. This borrows heavily from [this Atlassian article](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing) on the subject which is definitely worth a read.

- **Unit**
  - Test small units of code like functions or components. Very low level.
- **Integration**
  - Check various pieces of your app work well together. (i.e. React component which uses hook to get data from a database. We might test that the component able to get the data it needs using a hook dependency for the UI.)
- **End-to-end (E2E)**
  - Emulate user flows (i.e. login, payment) and make sure things work as expected

### Other Types of Tests

- **Acceptance**
  - Make sure app satisfieds business reqs. May reject changes if reqs aren't met.
- **Systems**
  - Tests that everything works on actual servers or hardware
- **Smoke/Sanity**
  - Very basic tests that check key functionality.

## Setting Up for Our Example

Before we get to our example, complete the following steps to get set up.

1. Run `npm i -D jest` to install jest. This is shorthand for `npm install --save-dev jest`. You'll notice this adds Jest to the devDependencies in package.json.
2. While we're setting up, let's add the jest to our scripts so we can run `npm test` like so

```
  "scripts": {
    // other scripts
    "test": "jest --watchAll --verbose"
  },
```

3. Run `npm test` to confirm the script is set up. You should see Jest error out because we haven't written any tests yet.

## Jest Basics

Before we get into our example, let's write some functions and tests to get down some Jest fundamentals.

1. First, create a file to put the function we're going to test in. Let's call it functions.js.

2. Now let's think create an empty object in the functions.js file and export it so we can import it for testing later. We'll add functions to this object as we go.

3. Then, let's create a corresponding test file. Jest looks for files with \*.test.js, so let's name it functions.test.js so it's easy to tell what we're testing and Jest can find it.

4. Now we can start our first test stub, we can use the `it` method, which is the same thing as the `test` method.
   > You might've noticed there's code hints. To make things easier on ourselves, let's download jest types and add the necessary config.
   > Run `npm i -D @types/jest` to install jest types. Then create a jsconfig.json file. In that file, we can add the following json

```
    {
      "typeAcquisition": {
          "include": [
              "jest"
          ]
      }
    }
```

5. As you can see if you installed types, `it` takes a string typically used to describe expected behavior as the first argument.

6. Let's write a function called add that takes two inputs and returns their sum

7. Let's white a test to check it works as expected.

```
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
```

## Our Example

For our example today, I thought it would be useful to take a simple scenario with some basic requirements described and write the unit tests for the function before implementing.

For our scenario, we work at a magical potion shop that has an ecommerce website. We've been asked to write a function that calculates the order total for our magic shop. Basically, we want a function that takes an order and adds the price of each item in the order and returns that total amount.

So if we had an order object looked like so:

```
order = {
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
```

We would expect out function to return 34.

## Writing test stubs

Let's translate our requirements into test stubs. We won't worry about implementing the tests just yet. For our example, we're going to use Jest.

1. First, create a file to put the function we're going to test in. We might call it call it getOrderSubtotal.js.

2. Now let's think create an empty function in the getOrderSubtotal.js file and export it so we can import it for testing later.

3. Then, let's create a corresponding test file. Jest looks for files with \*.test.js, so let's name it getOrderSubtotal.test.js so it's easy to tell what we're testing and Jest can find it.

4. Now we can start our first test stub. If we're not ready to write the test itself yet, Jest comes with a handy `todo` method you can chain to the `test` and `it` methods, and when you run `npm test`, you'll see that you have tests marked todo in the output.

5. As discussed above, `it` takes a string typically used to describe expected behavior as the first argument. I like to use the "it should \_\_" syntax. For our example, I used `"should return correct total when passed an valid order with items"`.

6. The next argument is a callback where we will put our test logic. A common useful way to write tests is using the Arrange, Act, Assert pattern.

First we can arrange what we need by creating a test order object we'll pass to our function.

```
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
```

Then we will act by calling the function with the input we arranged.

```
    // Act
    const actual = orderFunctions.getOrderSubtotal(testOrder);
```

Then we make our assertion. We pass Jest's `expect` function pass the result of acting (in this case the `actual` variable where we stored the result of calling our function), then chain a matcher function. Jest has a robust selection of matchers we can use. For this test, we can use `toBe` and pass in the value we're expecting.

```
// Assert
expect(actual).toBe(27);

```

7. Run `npm test`. You should see that the test is currently failing. Don't worry, we'll get to making them pass soon.
8. Can you think of some other things we should test? Let's write tests for that.

9. Now we're going to write code so the tests actually pass! Congratulatinons, we've just practiced something called Test Driven Development. In test driven development, we:
   1. Write failing test(s)
   2. Write just enough code to make it pass
   3. Refactor to improve code

## Additional Requirements

So now our tests our passing, great! But now product has come back to us with additional requirements.

1. Now, our function should add the price of each item multiplied by the quantity to include in the total. Let's repeat the above process to write/edit tests and update the code to pass!

   > At this point, you may have noticed we're repeating ourselves a lot with the arrange step. That's where Jest's `beforeEach`/`beforeAll` and `afterEach`/`afterAll` functions come in handy!

2. Now we have even more requirements: If the item price total is less than 100, it should include the price of shipping.

3. If all items can be transported by broomstick and there is a shipping cost, the shipping should be 50% off. An item can be transported by broomstick if its weight is less than 5 (magical weight units)

   > As we add more requirements, hopefully you start to see the utility of our unit tests. The function may have started simple, but as business needs change, it gets more complicated, and as we add new changes, we can be sure we're not breaking existing funcitonality.

4. For a stretch challenge, add a function that calculates the total tax and adds it to the total, returning that new total amount.

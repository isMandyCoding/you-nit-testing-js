# YOU-NIT TESTS IN JAVASCRIPT

This is a repo to accompany the Unit Tests demo for the [Phoenix Javascript Meetup](https://www.meetup.com/phoenix-javascript/events/291064279/) on 3/15/2023. Today, we'll be covering the basics of unit testing in Javascript. We'll discuss why to write tests, briefly go over types of tests, and do a demo on writing unit tests in Javascript using [Jest](https://jestjs.io). For this demo, we're going to imagine we're writing code for a small ticket for a restaurant app.

## Why write tests?

Writing tests may seem like a time-wasting hastle, but I'd argue that it winds up saving you a lot of time in the long run. #WritingTestsIsSelfCare Some benefits of testing include:

1. Gives you confidence your app works and helps you know when a new commit breaks something **before** you deploy to production.
2. Makes you write cleaner code. Clean code tends to be easier to test.
3. Helps you slow down, plan ahead, and consider edge-cases you might not have otherwise considered.

## Types of tests

There are different kinds of tests and sometimes the lines feel blurred on what test may qualify as which type, but we'll do our best to define them here. This borrows heavily from [this Atlassian article](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing) on the subject which is definitely worth a read.

- Unit
  - Test small units of code like functions or components. Very low level.
- Integration
  - Check various pieces of your app work well together.
- Functional
  - Similar to Integration, but are more concerned with output based on business requirements such as expected database values while Integration might just test the database was queried.
- End-to-end
  - Emulate user flows (i.e. login, payment) and make sure things work as expected
- Acceptance
  - Make sure app satisfieds business reqs. May reject changes if reqs aren't met.
- Performance
  - Check how your app handles certain workloads
- Smoke
  - Very basic tests that check key functionality.

## Setting Up for Our Example

Before we get to our example, complete the following steps to get set up.

1. Run `npm install` to install jest
2. Run `npm test` to confirm the basic test is running and passing.

## Our Example

For our example today, I thought it would be useful to take a simple scenario with some basic requirements described and write the unit tests for the function before implementing.

We've been asked to write a function that finds the order subtotal for a restaurant app. The function receives an array of item prices in US currency format (i.e. [5.00, 4.50, 2.00]), and should return the total dollar amount for all the item prices in the array.

For example, if passed the array [5.00, 4.50, 2.00], the function should return 11.50.

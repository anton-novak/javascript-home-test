# Fluidly home and pairing test

## The challenge

The aim of this exercise is to demonstrate your problem solving and understanding of JavaScript by implementing something found in every unit testing tool - an "assertEquals" method.

### To do at home

- Fill in the "assertEquals" function provided such that it will correctly compare the "expected" and "actual" parameters.
- The parameters could be of any conceivable JavaScript type, but we only expect you to handle primitive data types (e.g. strings and numbers) and simple arrays
- You can work with the code we've given you, or rewrite parts of it if that works best for you. You may add extra functions and files as you see fit.
- Credit will be given for approach, correctness, clean code, and testing.
- The set of tests provided isn't exhaustive - there are many cases not covered here. We expect you to add additional tests, and to amend ours as you see fit.
- We don't expect you to progress to dealing with more complex data types than those shown here.
- We respect your time, and - assuming you are already familiar with JavaScript - we do not expect you to spend more than an hour doing this exercise.

### Additional terms

- Please do not use external libraries (except for a testing library)
- You may of course use any resources you like to assist you with specific techniques, syntax etc - but please do not just copy code.
- Please don't share this exercise with anyone else :)
- We've written some initial tests for you using Jest, which is our testing library of choice. You may use a different library if you wish.

### Example inputs and outputs

| Expected        |     Actual      |                                                                 Result |
| --------------- | :-------------: | ---------------------------------------------------------------------: |
| "abc"           |      "abc"      |                                                             _No error_ |
| "abcef"         |      "abc"      |           Throws error with message 'Expected "abcef" but found "abc"' |
| 1               |        1        |                                                             _No error_ |
| 1               |        2        |                     Throws error with message 'Expected 1 but found 2' |
| 1               |       '1'       | Throws error with message 'Expected type number but found type string' |
| ['a', 'b', 'c'] | ['a', 'b', 'c'] |                                                             _No error_ |
| ['a', 'b']      | ['a', 'b', 'c'] |        Throws error with message 'Expected array length 2 but found 3' |
| ['a', 'b']      |   ['a', 'd']    |                 Throws error with message 'Expected "b" but found "d"' |

### Instructions for running the tests

With yarn:

- Run `yarn` to install dependencies
- Run `yarn test` to run the tests

With npm:

- Run `npm install`
- Run `npm test`

## What to expect from the pairing exercise

- The pairing exercise will be conducted remotely via Google Meet.
- You'll meet two of our fullstack engineers. As well as pairing, it will be an informal opportunity to get to know them and ask questions about working at Fluidly.
- You'll share your screen with us. You'll talk us through the code you've written so far. Then we'll work together to add new functionality.
- We will insist on practising test driven development with you.
- As well as assessing your JavaScript and TDD skills, we'll be looking for excellent communication skills, initiative, willingness to learn, and ability to cope under pressure.
- You can ask us questions at any time during the test.
- We know that it's difficult to write perfect code with two people you don't know watching, so we'll do our best to make the experience as comfortable for you as possible. Please let us know if you'd like us to make any adjustments.

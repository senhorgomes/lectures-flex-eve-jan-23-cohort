# How to approach a problem
- What do I have, what do I need, what tools I have, how can I use these tools to bring the output
- Understand the question first
- console.log each step 
- Quality of prospective
- pseudo code
- Reverse engineering
- Checking the output
- Logical flowchart

# Coding problems

- Create a skeleton, using pseudo code


### Create a function that takes in an array, and adds two to each element in that array.

- Break down the problem
    - Create a function
        - Input/Output
    - Input
        - Array of numbers, cannot be anything else
    - Output
        - Array of the same length, but with modified elements
```javascript
// create a function
const modifyArray = (array) => {
    //We need to add two to each element in that array
    // loop through the array, and target each element
}

```







When to use TDD?
 - Is my function being used for a larger application?

- Edge Cases - > Extremes
    - Happy cases
        - User inputs an array with numbers, and the function return a modified array
    - Sad cases (EVERYTHING BROKE)
        - What if we inputted strings instead of numbers. Check for only integers
            The main factor of what should be outputted, is how the rest of the application works
            - Convert the strings into numbers, and convert them if possible
            - Concatenate with a 2 after each number
            - Return an error "Hey, this array doesn't only have numbers"
        - What happens if you input an empty array
            - Write down your expected return
        - What if the numbers have spaces
        - What if someone passes in an objects

- Test Cases
- Possible Solutions
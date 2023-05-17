//What happens if we want to use a function that has an unlimited amount of argument?

// function restOperatorSumNums(arg1, arg2){
//     return arg1 + arg2;
// }





function restOperatorSumNums (...args) {
    let sum = 0;
    for (const arg of args) {
        sum+= Number(arg);
    }
    return sum;
}

console.log(
    // Rest operator allows us to take IN unlim. arguments.
    restOperatorSumNums(45, 8, 5, 4, 8, 54, 54, 84, 654, 8, 84, 84, 84, 62, 354, 87, 54, 54, 4)
);
const myVals = [1, 2, 3, 4, 5];
const aCopyOfAnArray = [...myVals];
aCopyOfAnArray.pop() // [1,2,3,4]
// console.log(myVals, aCopyOfAnArray)
const copyMyVals = [0,...myVals,6,7,8]
console.log(copyMyVals)
// const anotherACopyMyVals = [0,1,2,3,4,5,6,7,8]
// // console.log(myVals.pop())
// console.log(copyMyVals, myVals);

// function sumEightNums(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
//     return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;
// }

// console.log(
//     // We're passing in an array (only num1 arg), it expects the indiv. nums.
//     sumEightNums(copyMyVals)
// );
// console.log(
//     // We're passing in an array (only num1 arg), it expects the indiv. nums.
//     //sumEightNums(0,1,2,3,4,5,6,7,8)
//     sumEightNums(...copyMyVals)
// );
// // console.log(
// //     // We're passing in 9 SEPARATE VALUES now.
// //     sumEightNums(...newArr)
// // );
//Impure function

const addNumbersTogether = (number1, number2) => {
    return number1 + number2;
}

console.log(addNumbersTogether(4,7)) //impure

const randomNumber = 3;

const addNumbersTogetherImpure = (number1) => {
    return number1 + randomNumber;
}
console.log(addNumbersTogetherImpure(6));
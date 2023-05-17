
/* Create an Object */
const myObj = {
    keyOfObject: "Value of keyOfObject",
    nameOfPerson: "Bob"
}

// console.log(myObj.keyOfObject);
// console.log(myObj.keyOfObject);

// const name = myObj.name
// const keyOfObject = myObj.keyOfObject
// console.log(keyOfObject)
/* Destructuring: Assign a var with a matching property name! */

const { keyOfObject } = myObj
console.log(keyOfObject);

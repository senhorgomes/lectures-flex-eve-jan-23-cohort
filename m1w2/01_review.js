//Primitive Data Types?
//Integers/Number = 0
//Booleans = false
//String = ""
//Undefined,null

//NaN

//Symbol
//BigInt

//Data structures
//Arrays = []
//Objects = {}

let newVariable = true
// Arrays are used to store multiple items
// const dogArray = [dogObj,dogObj2,dogObj3];
//Objects are used to describe a single item
const dogObj = {
  name: "Charlie",
  breed: "German Sheppard",
  age: 2,
  arrays: ["hello","hey","goodbye"],
  objects: {}
};
const dogObj2 = {
  name: "Bob",
  breed: "German Sheppard",
  age: 2,
  arrays: ["hello","hey","goodbye"],
  objects: {}
};

dogObj["name"]
function compare(object1, object2) {
  if(object1 === object2) {
    console.log("THIS IS TRUE")
  } else {
    console.log("THIS IS FALSE")
  }
}

compare([], [])
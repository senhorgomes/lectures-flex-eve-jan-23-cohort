//Two ways to look up values in objects
//dot notation - object.key
//bracket or square bracket notation - object["key"]

//What can be assigned as a key value?
const carOneObject = {
  wheels: 4,
  color: "red",
  transmission: "automatic",
  doors: 4,
}
const carTwoObject = {
  wheels: 4,
  color: "red",
  transmission: "automatic",
  doors: 4,
  hybrid: true
}
//Grab the key first, and reassign the value
// carTwoObject.color = "blue"
// console.log(carTwoObject)
//Asign new key value pairs
// carOneObject.hybrid = ["first", "two", "three"]
// console.log(carOneObject)

// const garage = function(car){
//   car.color = "orange"
//   return car;
// }
// console.log(garage(carOneObject));

const carThreeObject = {...carOneObject};
console.log(carThreeObject);
carThreeObject.color = "orange"
console.log(carThreeObject);
console.log(carOneObject);

array[1]

//Find a car that has a hybrid key, and return it
// const findHybridCar= function(car){
//   if(car.hybrid){
//     return car
//   } else {
//     return "Nope, it isn't a hybrid"
//   }
// }
// console.log(findHybridCar(carTwoObject))

// const color = "color"
// console.log(carOneObject.color)
//We are trying to access key "red", but it isn't assigned a value
//Key-value pair
// console.log(carOneObject["red"])

// console.log(carOneObject.doors)


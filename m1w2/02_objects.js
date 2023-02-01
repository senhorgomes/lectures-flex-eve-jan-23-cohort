//Why objects?
//Access things out of order, or by key
//Manipulate the data stored in an object

//Car

const carOne = [4, "red", "automatic", 4]
const carTwo = [4, "green", "automatic", 4]
const carThree = ["green", 2, "automatic", 4]

// console.log(carThree[0])
//Objects are for describing a specific item
const carOneObject = {
  wheels: 4,
  color: "red",
  transmission: "automatic",
  doors: 4
}
const carTwoObject = {
  wheels: 4,
  color: "green",
  transmission: "automatic",
  doors: 4
}
//List of cars
//Objects, or arrays?
//Dot notation
// console.log(carOneObject.color)
//Bracket notation
//If we do not use "", it'll think we are referencing a variable
const someKey = "doors"
// console.log(carOneObject[someKey])
//For..of is only meant for Arrays
// for(let key in carThreeObject){
  //   console.log(carThreeObject[key])
  //   //What if I want change the color of the car?
  //   //I would have to loop through the keys, see which one is the color key, and then change that
  // }

  const carThreeObject = {
    wheels: 4,
    color: "green",
    transmission: "automatic",
    doors: 2
  }
  //Yes, but I dont know how
  //No THIS IS THE BEST FUNCTION EVER MADDDEEEE!!!!
  //Objects in functions, is if we know what key we want to manipulate or utilize, we don't have to loop through the object
const carPainter = function(carObject, color){
  //What if our carPainter could only paint cars purple and blue
  if(color === "purple" || color === "blue"){
    carObject["color"] = color;
    console.log(carObject)
  } else {
    console.log("Sorry, we can only paint your car purple or blue")
  }

  // for(let key in carObject){
    //I want to compare the key in the loop, and see if it matches to "color"
    // if(key === "color"){
      // Once we find the key, we want to edit the key value. Change the "color" to purple
      // carObject[key] = "purple";
      //Theres no way of us confirming this. But we can by console.logging the object right after the change
      // console.log(key)
    // }
    // console.log(key)
  // }
}
carPainter(carThreeObject, "purple")
carPainter(carOneObject, "blue")
carPainter(carOneObject, "red")
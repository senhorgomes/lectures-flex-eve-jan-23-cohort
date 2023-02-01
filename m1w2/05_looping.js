//How can we iterate(or loop) through objects?
//Arrays?
//for..of
//for..each
//c style loop
//for..in
const cakeOne = {
  flavor: "vanilla",
  frosting: "chocolate",
  size: "L",
  layers: "4",
  sprinkles: true,
  shape: "circle",
  calories: "OVER9000",
  price: 200,
  objectInCake:{
    key1: "value1",
    key2: "value2"
  }
  // cutSlice: function(pieces, size){
  //   console.log(`Cutting ${pieces} ${size} slice(s). Here is your slice(s), enjoy!`)
  // }
}
//Create an array of keys
console.log(Object.keys(cakeOne))
//Create an array of values
console.log(Object.values(cakeOne))
// for(const key in cakeOne){
//   // objectInCake
//   if(typeof cakeOne[key] === "object"){
//     for(const key1 in cakeOne[key]){
//       console.log(cakeOne[key][key1])
//     }
//   }
// }
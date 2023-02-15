// A= 5 minutes B= 5 seconds C= 1 minute

//Asynchronous?
// Fast food restaurant
//A
//B
//C

//Synchronous
// Going to a restaurant, a sitdown
//A -> B -> C

console.log("First")
setTimeout(()=> console.log("Second"), 0)
console.log("Third")
console.log("Fourth")

//First, Second, Third, Fourth

//setTimeout allows us to execute a function after a certain amount of time
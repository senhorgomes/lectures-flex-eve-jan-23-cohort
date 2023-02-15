//Functions
function anonFunction(){

}
const functionExpression = function(){

}
const arrowFunctions = () => {

}
//Callbacks?
// Functions that get passed into other functions
const consoleLogsSomething = function(){
    console.log("Something!")
}
// consoleLogsSomething()

//Higher order functions?
// A function that takes in other functions, as a callback
const higherOrderFunction = function(callback){
    console.log("First")
    //invoking/calling
    callback()
}
higherOrderFunction(consoleLogsSomething)
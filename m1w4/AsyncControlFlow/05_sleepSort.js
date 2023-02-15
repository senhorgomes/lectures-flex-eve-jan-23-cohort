const numbers = [900, -500, 52, 603, 59, 81, 1, -50];

//Loop through this array.
//Console log each number, in order
for(let element of numbers){
    setTimeout(()=>console.log(element), element)
}

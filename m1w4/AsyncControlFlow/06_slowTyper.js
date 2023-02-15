//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
//Loop through this string, and console.log each letter
let delayInMs = 500;
const slowTyper = (string) => {
    setInterval(()=>{
        for(const letter of string){
        setTimeout(()=>process.stdout.write(letter), delayInMs)
        delayInMs += 500;
    }
}, 10000)
}
//H -> 500
//e -> 1000
//l -> 1500
//l -> 2000
//o -> 2500
slowTyper(stringExample)
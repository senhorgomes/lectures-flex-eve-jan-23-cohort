// setTimeout(()=>{
//   console.log("TIME'S UP AGAIN!")
// }, 6000)

// setTimeout(()=>{
//   console.log("TIME'S UP!")
// }, 5000)

const intervalId = setInterval(()=>{
  console.log("setInterval")
}, 2000)
//0001
//We are calling clearInterval after 6.3 seconds
//This will stop the setInterval with an id of intervalId after that amount of time
setTimeout(()=>{
  clearInterval(intervalId)
}, 2000)
//0000
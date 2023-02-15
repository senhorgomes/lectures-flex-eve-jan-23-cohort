const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");//Second
  setTimeout(() => {
    data.initials = "YAV";
    console.log(data.initials);
    callback();//console.log("INSIDE CALLBACK");
  });

  console.log("AFTER TIMEOUT CALL");//Third
};

console.log("BEFORE MAIN CALL");//First
const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});

// const resultAgain = higherOrderFunc

console.log("AFTER MAIN CALL");//Fourth

//Before main call
//Before Timeout call - Before timeout call
//After main call - YAV
//Inside Callback
// - After timeout call
//Yav - After Main call
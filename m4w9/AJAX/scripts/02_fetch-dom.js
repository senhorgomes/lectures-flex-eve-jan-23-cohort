// Query the button
const buttonInHTML = document.querySelector("button");
// Add an event listener to the button
buttonInHTML.addEventListener("click",()=>{
    // console.log("IT WORKS!")
    // buttonInHTML.disabled = true;
    document.querySelector("ul").replaceChildren();
    // Make a fetch to // https://api.tvmaze.com/search/shows?q=big%20bang
    fetch('https://api.tvmaze.com/search/shows?q=big%20bang')
    .then((response)=>{return response.json()})
    // implicit return
    //   .then((response) => response.json())
    .then((data) =>{
        // console.log(data)

        //Loop through the data
        for(const entry of data){
            console.log(entry.show.name)
            //Create an li element
            const element = document.createElement("li");
            //Create a text node
            const textNode = document.createTextNode(entry.show.name)
            //Append the li element to the text node
            element.append(textNode)
            //Append the ul element to the li element
            document.querySelector("ul").append(element)
        }
        //For each element in the array, we want to grab the name and add it to an li
    })
})
// Convert to JSON
//Then add it to our DOM in the form of a list
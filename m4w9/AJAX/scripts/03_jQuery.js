// Query the button
$(document).ready(() => {
    // const buttonInHTML = document.querySelector("button");
    const buttonInHTML = $('button');
    buttonInHTML.on("click", () => {
        // https://api.tvmaze.com/search/shows?q=big%20bang
        // $.ajax({
        //     url: "https://api.tvmaze.com/search/shows?q=big%20bang",
            // success: (response) => {
            //     for (const entry of response) {
            //         // console.log(entry.show.name)
            //         //Create an li element
            //         // const element = document.createElement("li");
            //         //Create a text node
            //         // const textNode = document.createTextNode(entry.show.name)
            //         //Append the li element to the text node
            //         // element.append(textNode)
            //         const element = $(`<li>${entry.show.name}</li>`)
            //         //Append the ul element to the li element
            //         // document.querySelector("ul").append(element)
            //         $('ul').append(element);
            //     }
            // }
        // })
        $.get("https://api.tvmaze.com/search/shows?q=big%20bang")
        .then((data)=>{
                for (const entry of data) {
                    // console.log(entry.show.name)
                    //Create an li element
                    // const element = document.createElement("li");
                    //Create a text node
                    // const textNode = document.createTextNode(entry.show.name)
                    //Append the li element to the text node
                    // element.append(textNode)
                    const element = $(`<li>${entry.show.name}</li>`)
                    //Append the ul element to the li element
                    // document.querySelector("ul").append(element)
                    $('ul').append(element);
                }
            }
        )
    })
})
// Add an event listener to the button

// Convert to JSON
//Then add it to our DOM in the form of a list
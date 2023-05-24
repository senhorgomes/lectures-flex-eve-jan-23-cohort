import { useEffect, useState } from "react";
import axios from 'axios';
function NinjaBookStore() {
    // we need to fetch information from out api
    // we need to then store that information into a state
    // Then we need to display that information into our component
    const [listOfBooks, setListOfBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("Lord%20Of");
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then((response) => {
                const mappedResponse = response.data.items.map((element) => {
                    return {
                        title: element.volumeInfo.title,
                        // image: element.volumeInfo.imageLinks.thumbnail
                    }
                })
                setListOfBooks(mappedResponse)
            })
            .then(() => setLoading(false))
    }
        , [searchTerm]
    )
    return (
        <div className="darkmode">
            <h1>Welcome to the Ninja Book Store!</h1>
            <h3>No pirates allowed!</h3>
            <p>Please enter your search term:</p>
            <input value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}></input>
            {loading ? <p>Loading, please wait...</p> :
                <ul>
                    {listOfBooks.map((book, index) => {
                        return (
                            <li key={index}>
                                <p>{book.title}</p>
                            </li>
                        );
                    })}
                </ul>
            }
            
        </div>
    );
}

export default NinjaBookStore;
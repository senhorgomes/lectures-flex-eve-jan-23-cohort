const express = require("express");
const morgan = require("morgan")
const app = express()
const port = 3001;//3000, 8000
const heroes = require("./routes/heroes")
// 
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// localhost:8080/
///GET ROUTES Router
app.use("/heroes", heroes);


app.listen(port, () => console.log(`Server is running on port ${port}!`))
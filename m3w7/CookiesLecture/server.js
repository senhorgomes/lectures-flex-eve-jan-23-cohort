const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const app = express();

//Users database

const users = {
    1: {
        id: 1,
        email: "joel@gmail.com",
        password: "lastofus"
    },
    2: {
        id: 2,
        email: "heisenberg@gmail.com",
        password: "saymyname"
    },
    3: {
        id: 3,
        email: "burns@gmail.com",
        password: "excellent"
    }
}
//Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

//View engine
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res)=>{
    // res.json("Hello String")
    //If the user is logged in, then a cookie will be set and user will be defined
    //Else it will render it as falsy
    console.log(req.cookies.userInfo)
    res.render("index", {user: req.cookies.userInfo});
});

app.get("/login", (req, res)=>{
    res.render("login");
});
app.post("/logout", (req, res)=>{
    res.clearCookie("userInfo")
    res.redirect("/");
});

app.post("/login", (req, res)=>{
    const inputtedEmail = req.body.email;
    const inputtedPassword = req.body.password;
    for(let id in users){
        //Check if email exists in database
        if(users[id].email === inputtedEmail){
            //If it does, check password and see if it matches
            if(users[id].password === inputtedPassword){
                console.log(req)
                // res.cookie("cookie", "oatmeal")
                res.cookie("userInfo", users[id].email)
                // res.cookie("userInfo1", users[id].email)
                // res.cookie("userInfo2", users[id].email)
                // res.cookie("userInfo3", users[id].email)
                // res.cookie("userInfo4", users[id].email)
                console.log(req.cookies)
                res.redirect('/')
                return
            }
        }
    }
    res.json("You are not registered or you have inputted incorrect information!")
});

//Checks if the server is listening
app.listen(3000, ()=> {
    console.log("Hey, this is working!")
})
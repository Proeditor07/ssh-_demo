const express = require("express")
const hbs = require("hbs")
const app = express();
const path = require("path")
const port = process.env.PORT || 80;

// Public static path
// app.use(express.static('public'));
// app.use('/images', express.static(__dirname + '/Images'));

const static_path =  path.join(__dirname,"../public");
const template_path =  path.join(__dirname,"templates/views");
const partial_path = path.join(__dirname,"templates/partials");

app.set('view engine','hbs');
app.use(express.static(static_path));

//Template static path
app.set("views",template_path);

// Accessing partials
hbs.registerPartials(partial_path);

// Routing
app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about") 
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
        erroMsg : "Oops you are on wrong page"
    })
})

app.listen(port,()=>{
    console.log(`Opening at the port ${port}`)
})
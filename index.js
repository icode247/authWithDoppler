const express = require('express');
const ejs = require("ejs");
const path = require('path');

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("signin.ejs")
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))

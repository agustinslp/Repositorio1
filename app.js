const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));

app.get("/login.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.get("/register.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.listen(3200, () => console.log("Servidor corriendo"));
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})



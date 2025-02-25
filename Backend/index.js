const express = require('express')
// app.get("/",req,res)=
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1> this is backend for websites </h1>")
})
const PORT = 3001

app.listen(PORT,()=>console.log("server started successfully"))
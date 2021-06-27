const express = require("express")
const app = express()
const userroutes = require("./Routes/userRoutes.routes")
require("./db/conn")
app.use(userroutes)

app.get("/",(req,res)=>{
    res.send("<H1> home page</H1>")
})


module.exports =app
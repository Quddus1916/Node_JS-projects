
require("dotenv").config()
const app = require("./app");


const PORT = process.env.PORT;
//const PORT = 7777

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    
})
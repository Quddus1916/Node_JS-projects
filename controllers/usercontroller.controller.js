const reg = (req,res)=>{
    res.sendFile("register-v2.html",{root:"./views/user"})

}

module.exports = reg
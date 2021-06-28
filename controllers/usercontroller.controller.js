const getreg = (req,res)=>{
    res.sendFile("register-v2.html",{root:"./views/user"})

}

const getlog = (req,res)=>{
    res.sendFile("login-v2.html",{root:"./views/user"})

}

const getdash = (req,res)=>{
    res.send("dashboard")

}


const reg_log = (req,res)=>{
    res.redirect("/dashboard")

}
module.exports = {getreg,getdash,reg_log,getlog}
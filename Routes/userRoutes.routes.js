const express = require("express")
const router = express.Router();
const bodyparser = require("body-parser")

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())

router.get("/login",(req,res)=>{
    res.sendFile("login-v2.html",{root:"./views/user"})
});

router.get("/register",(req,res)=>{
    res.sendFile("register-v2.html",{root:"./views/user"})
});


router.post("/register",(req,res)=>{
    const fullname = req.body.username ;
    const email = req.body.email;
    const password= req.body.password;
    const rpassword= req.body.rpassword;
    res.send( `name -${fullname},${email}},${password},${rpassword}`)
    //res.sendFile("register-v2.html",{root:"./views/user"})
});


module.exports = router;
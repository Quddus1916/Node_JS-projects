const express = require("express")
const router = express.Router();
const bodyparser = require("body-parser")
const signup = require('../middlewares/Registration.middleware')
const log_in = require('../middlewares/LogIn.middleware')
const flag =0;

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())



router.get("/login",(req,res)=>{
    res.sendFile("login-v2.html",{root:"./views/user"})
});

router.get("/register",(req,res)=>{
    res.sendFile("register-v2.html",{root:"./views/user"})
});

router.get("/dashboard",(req,res)=>{
    
    res.send("dashboard")
});


router.post("/register",signup,(req,res)=>{
    
    
    res.redirect("/dashboard")
    
});
router.post("/login",log_in,(req,res)=>{
    
    res.redirect("/dashboard")
});

module.exports = router;
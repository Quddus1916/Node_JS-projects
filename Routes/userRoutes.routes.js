const express = require("express")
const router = express.Router();
const bodyparser = require("body-parser")
const signup = require('../middlewares/Registration.middleware')
const log_in = require('../middlewares/LogIn.middleware')
const {getreg,getdash,reg_log,getlog} = require('../controllers/usercontroller.controller')

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())



router.get("/login",getlog);
router.get("/register",getreg);
router.get("/dashboard",getdash);
router.post("/register",signup,reg_log);
router.post("/login",log_in,reg_log);




module.exports = router;
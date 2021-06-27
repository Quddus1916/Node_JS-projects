const con= require('../db/conn');
const log_in =(req,res,next)=>{
    
    const email = req.body.email;
    const password= req.body.password;
    
}

module.exports = signup
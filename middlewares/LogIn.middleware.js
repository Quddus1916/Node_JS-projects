const con= require('../db/conn');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const log_in =(req,res,next)=>{
    
    const email = req.body.email;
    const password= req.body.password;
    con.query(`SELECT Password FROM register where email='${email}'`, function (err, result, fields) {
                 if (err) throw err;
              const retrieved_pass =JSON.parse(JSON.stringify(result))[0].Password
              bcrypt.compare(password, retrieved_pass, function(err, result) {
                if(result == true)
                {
                    next();
                }
                else{
                    res.send("invalid password");
                }
               
    
});



})}

module.exports = log_in
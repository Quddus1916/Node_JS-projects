
const con= require('../db/conn');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const signup =(req,res,next)=>{
    const fullname = req.body.username ;
    const email = req.body.email;
    const password= req.body.password;
    const variable = password.length; 
    const rpassword= req.body.rpassword;
    if(variable>=6 && password === rpassword)
    {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            var sql = `INSERT INTO register(Full_Name,Email,Password) VALUES ('${fullname}', '${email}','${hash}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              }); 
        });
        
        
        next();
    }
    else{
        res.send("invalid password");
    }
}

module.exports = signup
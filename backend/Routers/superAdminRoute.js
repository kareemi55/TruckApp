const express = require('express')
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const pool = require('../db');


router.post('/register',(req, res) => {
         const {user_name, user_password} = req.body;
    
         let register = `insert into superadmin( user_name, user_password) 
                            values( '${user_name}', '${user_password}')`
    
                            pool.query(register, (err, result)=>{
                             if(!err){
                                 res.send('Insertion was successful')
                         }
                             else{ console.log(err.message) }
                         })
                         register.end;
     });

     router.post('/login', (req, res) => {
         const {user_name, user_password} = req.body;
         let login = `select * from superadmin where user_name = user_name AND user_password = user_Password`
         pool.query(login, (err, result) => {
             if(!err) {
                 res.send('login success');
             }
             else {
                 console.log(err.message);
             }
             login.end;
         })
     })
     module.exports = router;


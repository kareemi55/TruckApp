const express = require('express');
const pool = require('../db');
const DesignationRouter = express.Router();

DesignationRouter.post('/designation', (req, res) => {
    const {design_title, design_responsibility} = req.body;
    
         let register = `insert into designation( design_title, design_responsibility) 
                            values( '${design_title}', '${design_responsibility}')`
    
                            pool.query(register, (err, result)=>{
                             if(!err){
                                 res.send('Insertion in successfull')
                         }
                             else{ console.log(err.message) }
                         })
                         register.end;
});
module.exports = DesignationRouter;
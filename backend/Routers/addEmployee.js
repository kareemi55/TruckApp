const express = require('express');
const pool = require('../db');
const RegEmployee = express.Router();


RegEmployee.post('/employeeregistration', async(req, res) => {
    try{
        const {name, fathername, cnic, mobile, email, designation, station, caddress, paddress, password} = req.body;
        let newRegister =await pool.query("insert into employees(name, fathername, cnic, mobile, email, designation, station, caddress, paddress, password) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [name, fathername, cnic, mobile, email, designation, station, caddress, paddress, password]);
        res.json(newRegister);
        // console.log(newRegister);
    }catch(err){
        console.log(err.message);
    }
});

RegEmployee.get('/employeedata', async(req, res) => {
    try{
        const data = await pool.query("select * from employees")
        res.json(data.rows);
    }catch(err) {
        console.error(err.message)
    }
});

RegEmployee.get('/employeelogin', async(req, res) => {
   try{
       const {email, password} = req.body;
       
       const data = await pool.query("select email,password from employees")
       if(data) {
        res.json(data.rows);
       }else{
           res.json('wrong values')
       }
       
       
   }catch(err){
       console.error(err.message);
   }
})

RegEmployee.delete('/deleteemployee/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("delete from employees where id=$1", [
            id
        ]);
    }catch(err) {
        console.log(err.message);
    }
})

RegEmployee.get('/employee/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const search = await pool.query("select * from employees where id=$1", [id]);
        res.json(search.rows[0]);
    }
    catch(err) {
        console.log(err.message);
    }
})

module.exports = RegEmployee;



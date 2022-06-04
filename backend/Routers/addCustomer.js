const express = require('express');
const pool = require('../db');
const customer = express.Router();

customer.post('/customer', async(req, res) => {
    try{
        const {name, type, cnic} = req.body;
        const customer = await pool.query('insert into customer (name, type, cnic) values($1, $2, $3)',
        [name, type, cnic]);
        res.json('inserted successfully ');
    }catch(err) {
        console.error(err.message);
    }
    
});

customer.get('/customerdata', async(req, res) => {
    try{
        const data = await pool.query("select * from customer")
        res.json(data.rows);
    }catch(err) {
        console.error(err.message)
    }
});

customer.get('/customer/:cnic', async(req, res) => {
    try{
        const {cnic} = req.params;
        const search = await pool.query("select * from customer where cnic=$1", [cnic]);
        res.json(search.rows[0]);
    }
    catch(err) {
        console.log(err.message);
    }
});

customer.delete('/deletecustomer/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("delete from customer where id=$1", [
            id
        ]);
        res.json("Deleted successfully")
    }catch(err) {
        console.log(err.message);
    }
})
module.exports = customer;
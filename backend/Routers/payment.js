const express = require('express');
const { Result } = require('express-validator');
const pool = require('../db');
const payment = express.Router();


payment.post('/payment', async(req, res) => {
    try{
        const {totalcharge, pay, due} = req.body;
        const payment = await pool.query("insert into payment (totalcharge, pay, due) values($1, $2, $3)",
        [totalcharge, pay, due]);
        res.json('data is inserted successfully');
    }catch(err){
        console.error(err.message);
    }
});

payment.get('/paymentdata', async(req, res) => {
    try{
        const payment = await pool.query("select * from payment");
        res.json(payment.rows);
    }catch(err){
        console.error(err.message);
    }
});

payment.put('/updatepayment/:id', (req, res) => {
    const {id} = req.params;
    const {totalcharge, pay, due} = req.body;
    const updatePayments = `update payment set totalcharge = '${totalcharge}', pay='${pay}', due='${due}' where '${id=1}'`;

    pool.query(updatePayments, (err, result) => {
     if(!err) {
         res.json('data is submitted is successfully :)')
     }
     else {
         res.json('error');
     }
    });                       
});
module.exports = payment;
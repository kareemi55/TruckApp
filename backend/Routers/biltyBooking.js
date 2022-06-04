const express =  require('express');
const pool = require('../db');
const bilty = express.Router();

bilty.post('/addbilty', async(req, res) => {
    try{
        const {sendername, sendermobile, staffname, customername, customercnic, customermobile, departurestation, arrivalstation, addrees} = req.body;
        const bilty = await pool.query('insert into bilty (sendername, sendermobile, staffname, customername, customercnic, customermobile, departurestation, arrivalstation, addrees) values($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [sendername, sendermobile, staffname, customername, customercnic, customermobile, departurestation, arrivalstation, addrees]);
        res.json('inserted successfully ');
    }catch(err) {
        console.error(err.message);
    }
    
});

bilty.get('/biltydata', async(req, res) => {
    try{
        const data = await pool.query("select * from bilty")
        res.json(data.rows);
    }catch(err) {
        console.error(err.message);
    }
});

bilty.put('/updatebillty/:billtyid', (req, res) => {
    
        const {billtyid} = req.params;
        const {sendername, sendermobile, staffname, customername, customercnic, customermobile, departurestation, arrivalstation, addrees} = req.body;
        const updatebilty = 
            `update bilty set sendername ='${sendername}', 
            sendermobile = '${sendermobile}', 
            staffname = '${staffname}', 
            customername = '${customername}', 
            customercnic = '${customercnic}', 
            customermobile = '${customermobile}', 
            departurestation = '${departurestation}', 
            arrivalstation = '${arrivalstation}', 
            addrees = '${addrees}' where '${biltyid = 1}'`;
        // res.json('data is updated successfully :)');
        pool.query(updatebilty, (err, result) => {
            if(!err) {
                res.send('data us updated')
            } else {
                console.log(err.message);
            }
        });

});

bilty.delete('/deletebillty/:billtyid', async(req, res) => {
    try{
        const {billtyid} = req.params;
        const deleteTodo = await pool.query("delete from bilty where billtyid=$1", [
            billtyid
        ]);
        res.json("Deleted successfully")
    }catch(err) {
        console.log(err.message);
    }
});
    
module.exports = bilty;


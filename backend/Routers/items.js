const express = require('express');
const pool = require('../db');

const items = express.Router();

items.post('/items', async(req, res) => {
    try{
        const {billtyid, item, itemquantity, stncharge, localcharge, dropercharge, totalcharge} = req.body;
        const items = await pool.query('insert into items (billtyid, item, itemquantity, stncharge, localcharge, dropercharge, totalcharge) values($1, $2, $3, $4, $5, $6, $7)',
        [billtyid, item, itemquantity, stncharge, localcharge, dropercharge, totalcharge]);
        res.json('inserted successfully ');
    }catch(err) {
        console.error(err.message);
    }
    
});

items.get('/itemsdata', async(req, res) => {
    try{
        const itemdata = await pool.query("select * from items")
        res.json(itemdata.rows);
    }catch(err) {
        console.error(err.message);
    }
});

items.put('/updateitems/:id', (req, res) => {
    
    let {id} = req.params;
    const {billtyid, item, itemquantity, stncharge, localcharge, dropercharge, totalcharge} = req.body;
    const updateitems = 
        `update items set billtyid ='${billtyid}', 
        item = '${item}', 
        itemquantity = '${itemquantity}', 
        stncharge = '${stncharge}', 
        localcharge = '${localcharge}', 
        dropercharge = '${dropercharge}', 
        totalcharge = '${totalcharge}' 
        where '${id = 1}'`;
    // res.json('data is updated successfully :)');
    pool.query(updateitems, (err, result) => {
        if(!err) {
            res.send('data us updated')
        } else {
            console.log(err.message);
        }
    });

});

items.delete('/deleteitems/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const deleteItems = await pool.query("delete from items where id=$1", [
            id
        ]);
        res.json("Deleted successfully")
    }catch(err) {
        console.log(err.message);
    }
});
module.exports = items;
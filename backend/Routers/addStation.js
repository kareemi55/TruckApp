const express = require('express');
const pool = require('../db');
const stationRouter = express.Router();


stationRouter.post('/AddStation', async(req, res) => {
    try{
        const {stn_name, stn_contact, stn_address} = req.body;
        let newStation = pool.query("insert into station(stn_name,stn_contact,stn_address) values($1,$2,$3)",
        [stn_name,stn_contact,stn_address]);
        res.json(newStation);
        console.log(newStation)
    }catch(err){
        console.error(err);
    }
});
module.exports = stationRouter;
const express = require('express');
const pool = require('../db');
const stationRouter = express.Router();


stationRouter.post('/AddStation', (req, res) => {
    const {stn_name, stn_contact, stn_address} = req.body;

    let station = `insert into station(stn_name, stn_contact, stn_address)
    values('${stn_name}', '${stn_contact}', '${stn_address}')`

    pool.query(station, (err, result)=>{
        if(!err){
            res.send('station data is inserted succesfully..')
    }
        else{ console.log(err.message) }
    })
    station.end;
});
module.exports = stationRouter;
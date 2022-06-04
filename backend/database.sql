CREATE DATABASE northstardb;


--\c northstardb
-- superadmin table ****
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT Null,
    station VARCHAR(28),
    password VARCHAR(255) NOT Null
);


-- designation table 
CREATE TABLE designation(
    design_id SERIAL PRIMARY KEY,
    design_title CHARACTER(28),
    design_responsibility CHARACTER(28)
);

-- station table 
CREATE TABLE station(
    stn_id SERIAL PRIMARY KEY,
    stn_name VARCHAR(28),
    stn_contact VARCHAR(60),
    stn_address VARCHAR(128)
);

CREATE TABLE station(
    stn_id SERIAL PRIMARY KEY,
    stn_name CHARACTER(28),
    stn_contact CHARACTER(20),
    stn_address CHARACTER(128)
);

CREATE TABLE superadmin (
 user_id SERIAL PRIMARY KEY,
 user_name CHARACTER(128),
 user_password CHARACTER(60)
); 


-- add customer...
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(28),
    type VARCHAR(28),
    cnic VARCHAR(13)
);

CREATE TABLE booking (
    b_id SERIAL PRIMARY KEY,
    b_item VARCHAR[],
    b_quantity VARCHAR[],
    b_price INTEGER[]
);

CREATE TABLE bilty (
    billtyid SERIAL PRIMARY KEY,
    sendername VARCHAR(28) NOT Null,
    sendermobile VARCHAR(13) NOT Null,
    staffname VARCHAR(28) NOT Null,
    customername VARCHAR(28) NOT Null,
    customercnic VARCHAR(13) NOT Null,
    customermobile VARCHAR(13) NOT Null,
    departurestation VARCHAR(28) NOT Null,
    arrivalstation VARCHAR(28) NOT Null,
    addrees VARCHAR(128) 
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    billtyid VARCHAR(28) NOT Null,
    item VARCHAR(28) NOT Null,
    itemquantity VARCHAR(28),
    stncharge VARCHAR(28),
    localcharge VARCHAR(28),
    dropercharge VARCHAR(28),
    totalcharge VARCHAR(28)
);

CREATE TABLE payment(
    id SERIAL PRIMARY KEY,
    totalcharge INTEGER NOT Null,
    pay INTEGER NOT Null,
    due INTEGER NOT Null
);

//employee registrtation
name, fathername, cnic, mobile, email, designation, station, caddress, paddress, password
CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(28),
    fathername VARCHAR(28),
    cnic VARCHAR(13),
    mobile VARCHAR(12),
    email VARCHAR(28),
    designation VARCHAR(128),
    station VARCHAR(28),
    caddress VARCHAR(128),
    paddress VARCHAR(128),
    password VARCHAR(28)
);
-- router.post('/register',(req, res) => {
--     const {user_name, user_password} = req.body;

--     let register = `insert into superadmin( user_name, user_password) 
--                        values( '${user_name}', '${user_password}')`

--                        pool.query(register, (err, result)=>{
--                         if(!err){
--                             res.send('Insertion was successful')
--                         }
--                         else{ console.log(err.message) }
--                     })
--                     register.end;
-- });

{
    "b_staffName":"kareem", 
    "b_senderCnic":"7150159496235", 
    "b_senderNumber":"472472423", 
    "b_receiverCnic":"3762736723673", 
    "b_receiverNumber":"4242424242",
    "b_departureStation":"gilgit",
     "b_arrivalStaton":"hunza", 
     "b_receiverAddress":"rahim abad", 
     "b_itemName":["box", "nakuz", "glass"],
      "b_quantity":[10, 15, 3],
      "b_price":[1000, 1000, 1000],
       "b_stncharge":100, 
       "b_loadingcharge":250, 
       "b_servicecharge":300, 
       "b_transportcharge":1000,
        "b_dropercharge":340, 
        "b_totalcharge":550
}
CREATE DATABASE northstardb;


--\c northstardb
--\CREATE TABLE superadmin(
    user_id SERIAL PRIMARY KEY,
    user_name CHARACTER(28),
    user_password CHARACTER(28)
)

-- designation table 
CREATE TABLE designation(
    design_id SERIAL PRIMARY KEY,
    design_title CHARACTER(28),
    design_responsibility CHARACTER(28)
);

-- station table 
CREATE TABLE station(
    stn_id SERIAL PRIMARY KEY,
    stn_name CHARACTER(28),
    stn_contact CHARACTER(28),
    stn_address CHARACTER(28)
);

CREATE TABLE public.superadmin (
 id UUID NOT NULL,
 firstName CHAR(64),
 lastName CHAR(64),
 email CHAR(128),
 password CHAR(60),
 CONSTRAINT users_pkey PRIMARY KEY(id)
) 
WITH (oids = false);

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
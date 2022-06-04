const express = require("express");
require("dotenv").config();

const { PORT, CLIENT_URL } = require('./constants')
const flash = require("connect-flash");
const passport = require("passport");
const request = require("request");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");

var app = express();
// var bodyParser = require("body-parser");
// // app.use(bodyParser.json());
// app.use(express.json());
// app.use(require("body-parser").urlencoded({ extended: true }));

// const bodyParser = require('body-parser');
// const express = require("express");
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json())
app.use(cookieParser())



const cors = require('cors');
// app.use(cors());
app.use(cors({ origin: CLIENT_URL, credentials: true }))
const pool = require('./db')


// app.use(cookieParser());

const expressSession = require("express-session");
app.use(expressSession({secret: "mySecretKey"}));
app.use(passport.initialize());
app.use(passport.session());


// super admin login.....

// const superAdminRouter = require('./Routers/superAdminRoute');
// app.use('/auth/api', superAdminRouter);
// super admin auth route
const authRoutes = require('./Routers/superAdminRoute');
app.use('/auth', authRoutes);

const DesignationRouter = require('./Routers/addDesignation');
app.use('/api', DesignationRouter);

const stationRouter = require('./Routers/addStation');
app.use('/api', stationRouter);

const customer = require('./Routers/addCustomer');
app.use('/api', customer);

const bilty = require('./Routers/biltyBooking');
app.use('/api', bilty);

const RegEmployee = require('./Routers/addEmployee');
app.use('/api', RegEmployee);

// items 
const items = require('./Routers/items');
app.use('/api', items);

// payment 
const payment = require('./Routers/payment');
app.use('/api', payment);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listning at port 5000`);
})
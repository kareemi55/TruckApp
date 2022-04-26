var express = require("express");
require("dotenv").config();
var flash = require("connect-flash");
var passport = require("passport");
var request = require("request");
var session = require("express-session");
var app = express();
var bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

const pool = require('./db')

app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
const expressSession = require("express-session");
app.use(expressSession({secret: "mySecretKey"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());
app.use(express.json());

const superAdminRouter = require('./Routers/superAdminRoute');
app.use('/auth/api', superAdminRouter);

const DesignationRouter = require('./Routers/addDesignation');
app.use('/api', DesignationRouter);

const stationRouter = require('./Routers/addStation');
app.use('/api', stationRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listning at port 5000`);
})
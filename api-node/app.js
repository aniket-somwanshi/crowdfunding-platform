const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require('body-parser')

const multer = require('multer');

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    next();
  });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = require("./routes");

app.use("/api", routes);

const db = require("./database");

app.listen('3000', () => {
    console.log('Server started on port 3000');
});


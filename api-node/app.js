const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require('body-parser')

const multer = require('multer');

const app = express();

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
const routes = require("./routes");

app.use("/api", routes);

const db = require("./database");

app.listen('3000', () => {
    console.log('Server started on port 3000');
});


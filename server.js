const path = require('path');

const express = require("express");

const app = express();

const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=> {
    res.render('Hello World')
});

app.listen(8080)
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const app = express()

var server_port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(server_port);

module.exports = app;
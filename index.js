const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.send("<h1>Hello From Siddhant Nair!</h1>");
});

app.listen(server_port, server_ip_address, function () {
    console.log("Listening on " + server_ip_address + ", port " + server_port)
});

module.exports = app;
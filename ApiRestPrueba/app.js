var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Cargar Rutas
var fruta_routes = require("./Routes/fruta");

//Optener la informacion que se pasa por url y parsearla a json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar los cors

//Rutas
app.use("/api", fruta_routes);

//Codigo para poder importarlo como modulo
module.exports = app;
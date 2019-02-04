var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Cargar Rutas

//Optener la informacion que se pasa por url y parsearla a json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar los cors

//Rutas
app.get("/pruebas", (request, response) => {
    response.status(200).send({
        menssage: "Ruta de prueba funcionando"
    });
});

//Codigo para poder importarlo como modulo
module.exports = app;
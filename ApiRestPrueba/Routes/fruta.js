var express = require("express");
var FrutaController = require("../Controllers/fruta");

var api = express.Router();
//Url por donde se recogen datos
api.get("/pruebas", FrutaController.pruebas);
api.get("/frutas", FrutaController.getFrutas);
api.get("/fruta/:id", FrutaController.getFruta);

//url por donde se insertan datos
api.post("/fruta", FrutaController.saveFruta);

module.exports = api;
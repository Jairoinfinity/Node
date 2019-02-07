//Modelo de fruta
var Fruta = require("../Models/fruta");

function pruebas(request, response) {
    response.status(200).send({
        menssage: "Ruta de prueba funcionando"
    });
}

//Funcion para crear frutas en la base de datos.
function saveFruta(request, response) {
    var fruta = new Fruta();

    var params = request.body;

    if (params.Nombre) {
        fruta.Nombre = params.Nombre;
        fruta.Color = params.Color;
        fruta.Temporada = params.Temporada;

        fruta.save((err, frutaStored) => {
            if (err) {
                response.status(500).send({
                    menssage: "Error en el servidor."
                });
            } else {
                if (frutaStored) {
                    response.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    response.status(200).send({
                        menssage: "No se ha guardado la fruta."
                    });
                }
            }
        });
    } else {
        response.status(500).send({
            menssage: "El nombre de la fruta es obligatorio."
        });
    }
}

//Funcion listar todas las frutas
function getFrutas(request, response) {
    Fruta.find({}).exec((err, frutas) => {
        if (err) {
            response.status(500).send({
                menssage: "Error en el servidor."
            });
        } else {
            if (frutas) {
                response.status(200).send({
                    frutas
                });
            } else {
                response.status(404).send({
                    menssage: "No hay frutas."
                });
            }

        }
    });
}

//Funcion optener datos por id
function getFruta(request, response) {
    var frutaId = request.params.id;
    Fruta.findById(frutaId).exec((err, fruta) => {
        if (err) {
            response.status(500).send({
                menssage: "Error en el servidor."
            });
        } else {
            if (fruta) {
                response.status(200).send({
                    fruta
                });
            } else {
                response.status(404).send({
                    menssage: "No se encuentra la fruta."
                });
            }

        }
    });
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta
}
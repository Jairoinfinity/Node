var mongoose = require("mongoose");
var schema = mongoose.Schema;
//Modelo que le damos a nuestra tabla o documento json
var frutaSchema = schema({
    Nombre: String,
    Color: String,
    Temporada: Boolean
});

module.exports = mongoose.model("Fruta", frutaSchema);
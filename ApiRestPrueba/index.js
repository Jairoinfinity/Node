var mongoose = require("mongoose");
var app = require("./app")

mongoose.Promise = global.Promise;

//Conexion a la base de datos de mongo
mongoose.connect("mongodb://localhost:27017/alumnos", { useNewUrlParse: true }).then(() => {
    console.log("Conexion de la base de datos realizada correctamente");

    //Puerto por el que escucha la apiRest
    app.listen(3800, () => {
        console.log("Servidor a la escucha en localhost:3800");
    });
}).catch(err => { console.log(err) });
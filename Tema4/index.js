//Importación de los mdulos que usamos
var express = require("express");
var fs = require("fs");
var app = express();

//Url dni
app.use("/dni", function(req, res){
    //Si le pasamos el parametro num entra y calcula la letra y lo muestra
    if(req.query.num){
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var calculo = parseInt(req.query.num) % 23;
        var dni = req.query.num + letras.charAt(calculo);
        res.send(dni);
    }else{
        //Si no pasamos ningun parametro mostramos la web de instrucciones
        fs.readFile("html/instrucciones.html", "utf-8" ,function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        });
    }
});

//Url escribir
app.use("/escribir",function(req, res){
    //Creamos la carpeta Copiar
    fs.mkdir("./Copiar",{ recursive: true }, function(err){
        if(err){
            throw err;
        }else{
            //Creamos el fichero HolaMundo y le metemos el nombre
            fs.writeFile("./Copiar/HolaMundo.txt","Jairo Bernal",function(err){
                if(err){
                    throw err;
                }
            });
        }
    });
    //Enviamos el mensage de ok al crearse los archivos.
    res.send("Archivo creado correctamente.");
});

//Servidor en escucha en el puerto 8083
app.listen(8083, function(){
    console.log("Estoy escuchando con Felix y Luis en localhost:8083");
});
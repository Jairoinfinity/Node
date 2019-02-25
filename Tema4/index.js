var express = require("express");
var fs = require("fs");

var app = express();

app.get("/dni", function(req, res){
    if(req.query.num){
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var calculo = parseInt(req.query.num) % 23;
        var dni = req.query.num + letras.charAt(calculo);
        res.send(dni);
    }else{
        fs.readFile("html/instrucciones.html", "utf-8" ,function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        });
    }
    
})

app.listen(8083, function(){
    console.log("Estoy escuchando con Felix y Luis en localhost:8083");
})
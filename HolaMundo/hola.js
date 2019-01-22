var http = require("http");

http.createServer(function(pregunta, respuesta){
    respuesta.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    respuesta.end("Hola mundo");
}).listen(8080,"localhost");
console.log("Servidor ejecutado en http://localhost:8080");
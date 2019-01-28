var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, response){
    var path = url.parse(request.url,true).pathname;
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(path == "/tablas"){
        fs.readFile("./todasLasTablas.html", function(err, dato){
            if(err){
                throw err;
            }else{
                
                response.end(dato);
            }
        });
    }else{
        
        response.end("No se encuentra "+path);
    }
}).listen("8081", "localhost");
console.log("http://localhost:8081");
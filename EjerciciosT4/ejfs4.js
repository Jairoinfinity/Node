var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var path = url.parse(response.url, true);
    if(path.pathname == "/calculadora" && path.query.num1 && path.query.num2 && path.query.op){
        switch(path.query.op){
            case "suma":
                

        }
    }
}).listen("8081","localhost");
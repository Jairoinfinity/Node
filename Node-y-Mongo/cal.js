var http = require("http");

http.createServer(function(request, response) {
    var param = process.argv.slice(2);
    var total = 0;
    for (var i = 0; i < param.length; i++) {
        total += parseInt(param[i]);
    }
    response.end("El total es: " + total);
    console.log("El total es: " + total);
}).listen(8080, "localhost");
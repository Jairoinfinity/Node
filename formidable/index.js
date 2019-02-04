var http = require("http");
var fs = require("fs");
var formidable = require("formidable");

http.createServer(function(request, response){
    if(request.url == "/fileupload"){
        var form = new formidable.IncomingForm();
        form.parse(request,function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = "C:/Ficheros/"+files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) 
            {
                if (err)
                {
                    throw err;
                }
                respuesta.write('Fichero subido y movido correctamente!');
                respuesta.end();
            });
        });
    }else{
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        var formulario = `
            <form action="fileupload" method="post" enctype="multipart/form-data">
            <input type="file" name="filetoupload"><br>
            <input type="submit">
            </form>
        `;
        respuesta.end(formulario);
    }
}).listen(8080,"localhost");
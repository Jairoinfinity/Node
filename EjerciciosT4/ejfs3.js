var fs = require("fs");

for(var i = 1 ; i <= 10; i++){
    var path = "./tablas/tabla del "+i+".txt";
    var tabla = "";
    for(var j = 0; j <= 10; j++){ 
        tabla += j+" * "+i+" = "+(j*1)+"\n";
    }
    fs.appendFile(path,tabla,function(err){
        if(err){
            throw err;
        }
    });
}
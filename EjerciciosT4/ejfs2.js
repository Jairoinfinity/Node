var fs = require("fs");

fs.mkdir("./tablas",{recursive:true},function(err){
    if(err){
        throw err;
    }else{
        console.log("Carpeta creada con exito.");
    }
});
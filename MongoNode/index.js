var mongo = require("mongodb");
var mangoClient = mongo.MongoClient;



getDocumentSort("clientes",{ nombre: 1 });






//************Funciones
//Conectar y crear la coleccion
function setDB(name){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.createCollection(name, (err, res)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Colección creada corractamente");
                db.close();
            }
        })
        
    }
})
}

//Insertar un dato (json) a la base de datos
function setDocument(name, json){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.collection(name).insertOne(json,(err, res)=>{
            if(err){
                throw err;
            }else{
                console.log(res.ops);
                db.close();
            }
        })
    }
})
}

//Inserte un array de json en la base de datos
function setDocumentMany(name, arrayJson){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.collection(name).insertMany(arrayJson,(err, res)=>{
            if(err){
                throw err;
            }else{
                console.log(res.ops);
                db.close();
            }
        })
    }
})
}

//Mostrar el nombre del primer usuario
function getNameOne(name){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.collection(name).findOne({},(err, res)=>{
            if(err){
                throw err;
            }else{
                console.log(res.nombre);
                db.close();
            }
        })
    }
})
}

//Ontener todos los documentos de una db
function getDocuments(name){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.collection(name).find({}).toArray((err, res)=>{
            if(err){
                throw err;
            }else{
                console.log(res);
                db.close();
            }
        })
    }
})
}

//Obtener todos los datos elegidos en un json de todos los documentos
function getDocumentsForKey(name, jsonKeys){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
    if(err){
        throw err;
    }else{
        console.log("Base de datos miDBMongo conectada correctamente");
        var dbo = db.db("miDBMongo");

        dbo.collection(name).find({}).project(jsonKeys).toArray((err, res)=>{
            if(err){
                throw err;
            }else{
                console.log(res);
                db.close();
            }
        })
    }
})
}

//Funcion de busqueda por consulta
function getDocumentFind(name,consulta){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
        if(err){
            throw err;
        }else{
            console.log("Base de datos miDBMongo conectada correctamente");
            var dbo = db.db("miDBMongo");

            dbo.collection(name).find(consulta).toArray((err, res)=>{
                if(err){
                    throw err;
                }else{
                    console.log(res);
                    db.close();
                }
            })
        }
    })
}

//Funcion de busqueda por consulta y ordenados
function getDocumentSort(name,consulta){
    mangoClient.connect("mongodb://localhost:27017/miDBMongo", { useNewUrlParser: true }, (err, db)=>{
        if(err){
            throw err;
        }else{
            console.log("Base de datos miDBMongo conectada correctamente");
            var dbo = db.db("miDBMongo");

            dbo.collection(name).find({}).sort(consulta).toArray((err, res)=>{
                if(err){
                    throw err;
                }else{
                    console.log(res);
                    db.close();
                }
            })
        }
    })
}
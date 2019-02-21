var mongo = require("mongodb");
var fs = require("fs");
var express = require("express");

var client = mongo.MongoClient;

var exp = express();

    exp.listen(8081, function(){
        console.log("Corriendo en localhost:8081");
    });


    exp.get("/alumnos",function(req, res){
        client.connect("mongodb://localhost:27017/alumnosEJ", {useNewUrlParser: true},(err, db)=>{
            if(err){
                console.log("Error al conectar a la base de datos alumnosEJ");
            }else{
                var alum = db.db("alumnosEJ");
                var plantilla = `
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Apellidos</th>
                                            <th>Nota</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            `;

                if(Object.keys(req.query).length !== 0){
                    console.log(req.query);
                    alum.collection("alumnos").findOne(req.query,(err, dat)=>{
                        if(err){
                            console.log("No se encuentra el alumno");
                        }else{
                            console.log(dat);
                            plantilla+=`
                                    <tr>
                                        <td>${dat.nombre}</td>
                                        <td>${dat.apellidos}</td>
                                        <td>${dat.nota}</td>
                                    </tr>
                                `;
                            plantilla+="</tbody></table>";
                            res.send(plantilla);
                            db.close();
                        }
                    });
                }else{
                    alum.collection("alumnos").find({}).toArray((err, dat)=>{
                        if(err){
                            console.log("No se puede optener los alumnos");
                        }else{
                            
    
                            dat.forEach(e=>{
                                plantilla+=`
                                    <tr>
                                        <td>${e.nombre}</td>
                                        <td>${e.apellidos}</td>
                                        <td>${e.nota}</td>
                                    </tr>
                                `;
                            });
    
                            plantilla+="</tbody></table>";
                            res.send(plantilla);
                            db.close();
                        }
                    });
                }
                
            }
        });
    });
    
    exp.get("/create",function(req, res){
        client.connect("mongodb://localhost:27017/alumnosEJ", {useNewUrlParser: true},(err, db)=>{
            if(err){
                console.log("Error al crear la db");
            }else{
                console.log("Conexión a la base de datos alumnosEJ realizada.");
                db.db("alumnosEJ").createCollection("alumnos", (err, res)=>{
                    if(err){
                        console.log("Error al crear la colleccion");
                    }else{
                        console.log("Colleccion Creada");
                        var json;
                        fs.readFile("./json/alumnos.json", (err, dat)=>{
                            if(err){
                                console.log("Error al leer el archivo alumnos.json");
                            }else{
                                json = JSON.parse(dat);
                                console.log("alumnos.json leeido correctamente");
                                console.log(json);
                                db.db("alumnosEJ").collection("alumnos").insertMany(json, (err, dat)=>{
                                    if(err){
                                        console.log("Error al insertar los datos en la colleccion");
                                    }else{
                                        console.log("Datos de alumnos.json insertados correctamente");
                                        console.log(dat.ops);
                                        db.close();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    });






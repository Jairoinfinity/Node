var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    var ca = url.parse(request.url, true)
    response.end(peticion(ca.pathname, ca.query));

}).listen(8081, "localhost");
console.log("Servidor corriendo en http://localhost:8080");

function peticion(path, q) {
    switch (path) {
        case "/tablas":
            var ta;
            if (q.num != undefined) {
                ta = ej2(q.num);
            } else if (q.min != undefined && q.max != undefined) {
                ta = ej3(q.min, q.max);
            } else {
                ta = ej1();
            }
            return ta;
            break;
        case "/calculadora":
            return ej4(q.num1, q.num2, q.op);

        case "/calendario":
            return ej5(q.año, q.mes);
        default:
            return ej1();
    }
}

function ej1() {
    var re = "";
    for (var i = 0; i <= 10; i++) {
        for (var j = 0; j <= 10; j++) {
            re += i + " * " + j + " = " + (i * j) + "<br>";
        }
        re += "<br>";
    }
    return re;
}

function ej2(nun) {
    var re = "";
    for (var i = 0; i <= 10; i++) {
        re += nun + " * " + 1 + " = " + (nun * i) + "<br>";
    }
    return re;
}

function ej3(min, max) {
    var re = "";
    for (var i = min; i <= max; i++) {
        for (var j = 0; j <= 10; j++) {
            re += i + " * " + j + " = " + (i * j) + "<br>";
        }
        re += "<br>";
    }
    return re;
}

function ej4(num1, num2, op) {
    var re;
    switch (op) {
        case "suma":
            re = "" + (parseInt(num1) + parseInt(num2));
            break;
        case "resta":
            re = "" + (parseInt(num1) - parseInt(num2));
            break;
        case "mul":
            re = "" + (parseInt(num1) * parseInt(num2));
            break;
        case "div":
            re = "" + (parseInt(num1) / parseInt(num2));
            break;
        default:
            re = "los parametros son: suma, resta, mul y div";
    }

    return re;
}

function ej5(anio, mes) {
    var dia = "1";
    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    var dt = new Date(mes + ' ' + dia + ', ' + anio);
    //var text = "Dia de la semana : " + dias[dt.getUTCDay()];
    var diaSemana = true;

    var calendario = "<table><tr><th>" + dias[0] + "</th><th>" + dias[1] + "</th><th>" + dias[2] + "</th><th>" + dias[3] + "</th><th>" + dias[4] + "</th><th>" + dias[5] + "</th><th>" + dias[6] + "</th></tr>";
    var diasdemes = diasDelMes(mes);
    for (var i = 2; i <= (diasdemes + 1); i++) {
        i--;
        calendario += "<tr>"
        for (var j = 0; j < 7; j++) {
            if (diaSemana) {
                if (dias[j] == dias[dt.getUTCDay()]) {
                    diaSemana = false;
                    calendario += "<td></td>";
                    //i++;
                } else {
                    calendario += "<td></td>";
                }
            } else {
                if (i != (diasdemes + 1)) {
                    calendario += "<td>" + i + "</td>";
                    i++;
                }
            }
        }
        
        calendario += "</tr>"
    }
    calendario += "</table>"


    return calendario;
}

function diasDelMes(mes) {
    switch (mes) {
        case "1":
            return 31;
            break;
        case "2":
            return 28;
            break;
        case "3":
            return 31;
            break;
        case "4":
            return 30;
            break;
        case "5":
            return 31;
            break;
        case "6":
            return 30;
            break;
        case "7":
            return 31;
            break;
        case "8":
            return 31;
            break;
        case "9":
            return 30;
            break;
        case "10":
            return 31;
            break;
        case "11":
            return 30;
            break;
        default:
            return 31;
            break;


    }
}
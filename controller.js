"use strict";
var rockets = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function crearRocket(codigo) {
    if (codigo === "32WESSDS") {
        var outputRocket1 = document.getElementById("rocket1");
        var thruster1 = new Thruster(0, 10);
        var thruster2 = new Thruster(0, 30);
        var thruster3 = new Thruster(0, 80);
        var thrusters = [thruster1, thruster2, thruster3];
        create(codigo, thrusters);
    }
    if (codigo === "LDSFJA32") {
        var thruster1 = new Thruster(0, 30);
        var thruster2 = new Thruster(0, 40);
        var thruster3 = new Thruster(0, 50);
        var thruster4 = new Thruster(0, 50);
        var thruster5 = new Thruster(0, 30);
        var thruster6 = new Thruster(0, 10);
        var thrusters = [
            thruster1,
            thruster2,
            thruster3,
            thruster4,
            thruster5,
            thruster6,
        ];
        create(codigo, thrusters);
    }
    function create(codigo, thrusters) {
        var i;
        var existe = false;
        for (i = 0; i < rockets.length; i++) {
            if (rockets[i].codigo === codigo) {
                existe = true;
                var outputRocket = document.getElementById("rocket" + (i + 1));
                outputRocket.style.color = "#d43648 text-dark bg-transparent";
                outputRocket.innerHTML = "ALERT!<br> El cohete Ya Existe!!!, no es necesario crearlo.";
                break;
            }
        }
        if (existe === false) {
            var rocket = new Rocket(codigo);
            var j;
            for (j = 0; j < thrusters.length; j++) {
                rocket.addThruster(thrusters[j]);
            }
            rockets.push(rocket);
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#38a3b7 text-dark bg-transparent";
            outputRocket.innerHTML = "El Cohete  " + rocket.codigo + " se ha Creado!!!.<br><br>";
            console.log(rocket.codigo);
        }
    }
}
// ---------------- FUNCTION ACELERAR COHETES ---------------- //
function acelerarRocket(codigo) {
    var i;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].codigo === codigo &&
            rockets[i].currentSpeed() < rockets[i].maxPower()) {
            rockets[i].acelerar();
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#3ea648";
            outputRocket.innerHTML = "El Cohete " + rockets[i].codigo + " est\u00E1 Acelerando ...<br><br> " + rockets[i].currentSpeed();
            break;
        }
        if (rockets[i].codigo === codigo &&
            rockets[i].currentSpeed() === rockets[i].maxPower()) {
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#d43648";
            outputRocket.innerHTML = "Uppsss!<br>El Cohete " + rockets[i].codigo + " Ha llegado a la M\u00E1xima Potencia";
            break;
        }
    }
}
// ---------------- FUNCTION FRENAR COHETE ---------------- //
function frenarRocket(codigo) {
    var i;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].codigo === codigo && rockets[i].currentSpeed() > 0) {
            rockets[i].frenar();
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#d43648";
            outputRocket.innerHTML = "El Cohete " + rockets[i].codigo + " est\u00E1 Frenando ...<br><br> " + rockets[i].currentSpeed();
            break;
        }
        if (rockets[i].codigo === codigo && rockets[i].currentSpeed() === 0) {
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#d43648";
            outputRocket.innerHTML = "Upsss!<br> El Cohete " + rockets[i].codigo + " Ha llegado a la M\u00EDnima Potencia.";
            break;
        }
    }
}
// ---------------- FUNCTION MOSTRAR COHETE ---------------- //
function mostrarRocket(codigo) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].codigo === codigo) {
            var outputRocket = document.getElementById("rocket" + (i + 1));
            outputRocket.style.color = "#fac027";
            outputRocket.innerHTML = "SE HA CREADO EL COHETE  " + rockets[i].codigo + " CON " + rockets[i].thrusters.length + " PROPULSORES.<br>\n                                        SU VELOCIDAD ACTUAL ES: " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ------------- FUNCTION MOSTRAR TODOS LOS COHETES ------------- //
function mostrarTodoRockets() {
    var mostrarTodoRockets = document.getElementById("allRockets");
    mostrarTodoRockets.innerHTML = "";
    mostrarTodoRockets.style.color = "#fac027";
    for (var i = 0; i < rockets.length; i++) {
        mostrarTodoRockets.innerHTML += "Cohete " + rockets[i].codigo + " con " + rockets[i].thrusters.length + " <br> Propulsores. La Velocidad actual es: " + rockets[i].currentSpeed() + ".<br><br>";
    }
}

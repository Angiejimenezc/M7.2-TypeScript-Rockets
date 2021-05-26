"use strict";
let cohete1;
let cohete2;
let codigo1 = '32WESSDS';
let codigo2 = 'LDSFJA32';
let propulsores1 = [10, 30, 80];
let propulsores2 = [30, 40, 50, 50, 30, 10];
let potencia_total = 0;
function crearCohete(n) {
    if (n == 1) {
        cohete1 = new Rocket(codigo1);
        crearPropulsores(cohete1, propulsores1);
        document.getElementById("velocidad1").innerText = `Cohete preparado, Comenzamos?`;
        document.getElementById("cohete1").style.visibility = "visible";
        animateCSS('.cohete_1', 'flip');
        document.getElementById("cohete1Crear").innerText = `${cohete1.codigo} con *${propulsores1.length}* propulsores`;
        // borra el posible error 
        document.getElementById("cohete1Error").innerText = '';
        console.log(cohete1);
    }
    else if (n == 2) {
        cohete2 = new Rocket(codigo2);
        crearPropulsores(cohete2, propulsores2);
        document.getElementById("velocidad2").innerText = 'Cohete preparado, Comenzamos?';
        document.getElementById("cohete2").style.visibility = "visible";
        animateCSS('.cohete_2', 'flip');
        document.getElementById("cohete2Crear").innerText = ` ${cohete2.codigo} con *${propulsores2.length}* propulsores`;
        document.getElementById("cohete2Error").innerText = '';
        console.log(cohete2);
    }
}
function acelerarCohete(n) {
    if (n == 1) {
        if (cohete1 == undefined) {
            document.getElementById("cohete1Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            acelerar(cohete1);
            calcularVelocidad(cohete1);
            document.getElementById("velocidad1").innerText = `Velocidad actual del Cohete es: ${potencia_total}`;
            animateCSS('.cohete_1', 'backOutUp');
            console.log(cohete1);
        }
    }
    else if (n == 2) {
        if (cohete2 == undefined) {
            document.getElementById("cohete2Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            acelerar(cohete2);
            calcularVelocidad(cohete2);
            document.getElementById("velocidad2").innerText = `Velocidad actual del Cohete es: ${potencia_total}`;
            animateCSS('.cohete_2', 'backOutUp');
        }
    }
}
function frenarCohete(n) {
    if (n == 1) {
        if (cohete1 == undefined) {
            document.getElementById("cohete1Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            frenar(cohete1);
            calcularVelocidad(cohete1);
            document.getElementById("velocidad1").innerText = `Velocidad actual del Cohete es: ${potencia_total}`;
            animateCSS('.cohete_1', 'bounceInDown');
        }
    }
    else if (n == 2) {
        if (cohete2 == undefined) {
            document.getElementById("cohete2Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            frenar(cohete2);
            calcularVelocidad(cohete2);
            document.getElementById("velocidad2").innerText = `Velocidad actual del Cohete es: ${potencia_total}`;
            animateCSS('.cohete_2', 'bounceInDown');
        }
    }
}
function mostrarCohete(n) {
    if (n == 1) {
        if (cohete1 == undefined) {
            document.getElementById("cohete1Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            // bucle para extraer los propulsores
            let propImpr = [];
            for (let i = 0; i < cohete1.propulsores.length; i++) {
                propImpr.push(cohete1.propulsores[i].potenciaMax);
            }
            document.getElementById("cohete1Mostrar").innerText = `Los propulsores son : ${propImpr}`;
            animateCSS('.cohete_1', 'pulse');
        }
    }
    if (n == 2) {
        if (cohete2 == undefined) {
            document.getElementById("cohete2Error").innerText = `Aún no has creado el Cohete`;
        }
        else {
            // bucle para extraer los propulsores
            let propImpr = [];
            for (let i = 0; i < cohete2.propulsores.length; i++) {
                propImpr.push(cohete2.propulsores[i].potenciaMax);
            }
            document.getElementById("cohete2Mostrar").innerText = `Los propulsores son : ${propImpr}`;
            animateCSS('.cohete_2', 'pulse');
        }
    }
}
function crearPropulsores(cohete, propulsores) {
    for (let i = 0; i < propulsores.length; i++) {
        cohete.addPropulsor(new Propulsor(propulsores[i]));
    }
}
function acelerar(cohete) {
    for (let i = 0; i < cohete.propulsores.length; i++) {
        // recorre array comprobando el +10 sobre la velocidad maxima del propulsor
        if (cohete.propulsores[i].potenciaMax > cohete.propulsores[i].potenciaActual) {
            cohete.propulsores[i].potenciaActual += 10;
        }
        else {
            cohete.propulsores[i].potenciaActual += 0;
        }
    }
}
function frenar(cohete) {
    // recorre array comprobando el -10 sobre el 0 del propulsor
    for (let i = 0; i < cohete.propulsores.length; i++) {
        if (cohete.propulsores[i].potenciaActual > 0) {
            cohete.propulsores[i].potenciaActual -= 10;
        }
        else {
            cohete.propulsores[i].potenciaActual += 0;
        }
    }
}
// suma el valor de la velocidad actual de cada uno de los propulsores
function calcularVelocidad(cohete) {
    potencia_total = 0;
    for (let i = 0; i < cohete.propulsores.length; i++) {
        potencia_total += cohete.propulsores[i].potenciaActual;
    }
    console.log(potencia_total);
}
// promesa para reiniciar las animaciones
const animateCSS = (element, animation, prefix = 'animate__') => 
// We create a Promise and return it
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
        resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd);
});

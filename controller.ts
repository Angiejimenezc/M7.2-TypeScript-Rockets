let rockets: Rocket[] = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function crearRocket(codigo: string) {
  if (codigo === "32WESSDS") {
    let outputRocket1 = document.getElementById(
      "rocket1"
    ) as HTMLParagraphElement;
    let thruster1 = new Thruster(0, 10);
    let thruster2 = new Thruster(0, 30);
    let thruster3 = new Thruster(0, 80);
    let thrusters: Thruster[] = [thruster1, thruster2, thruster3];
    create(codigo, thrusters);
  }
  if (codigo === "LDSFJA32") {
    let thruster1 = new Thruster(0, 30);
    let thruster2 = new Thruster(0, 40);
    let thruster3 = new Thruster(0, 50);
    let thruster4 = new Thruster(0, 50);
    let thruster5 = new Thruster(0, 30);
    let thruster6 = new Thruster(0, 10);
    let thrusters: Thruster[] = [
      thruster1,
      thruster2,
      thruster3,
      thruster4,
      thruster5,
      thruster6,
    ];
    create(codigo, thrusters);
  }
  function create(codigo: string, thrusters: Thruster[]) {
    var i: number;
    let existe: boolean = false;
    for (i = 0; i < rockets.length; i++) {
      if (rockets[i].codigo === codigo) {
        existe = true;
        let outputRocket = document.getElementById(
          "rocket" + (i + 1)
        ) as HTMLParagraphElement;
        outputRocket.style.color = "#d43648 text-dark bg-transparent";
        outputRocket.innerHTML = `ALERT!<br> El cohete Ya Existe!!!, no es necesario crearlo.`;
        break;
      }
    }
    if (existe === false) {
      let rocket = new Rocket(codigo);
      var j: number;
      for (j = 0; j < thrusters.length; j++) {
        rocket.addThruster(thrusters[j]);
      }
      rockets.push(rocket);
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#38a3b7 text-dark bg-transparent";
      outputRocket.innerHTML = `El Cohete  ${rocket.codigo} se ha Creado!!!.<br><br>`;

      console.log(rocket.codigo);
    }
  }
}
// ---------------- FUNCTION ACELERAR COHETES ---------------- //
function acelerarRocket(codigo: string) {
  var i: number;
  for (i = 0; i < rockets.length; i++) {
    if (
      rockets[i].codigo === codigo &&
      rockets[i].currentSpeed() < rockets[i].maxPower()
    ) {
      rockets[i].acelerar();
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#3ea648";
      outputRocket.innerHTML = `El Cohete ${
        rockets[i].codigo
      } está Acelerando ...<br><br> ${rockets[i].currentSpeed()}`;
      break;
    }
    if (
      rockets[i].codigo === codigo &&
      rockets[i].currentSpeed() === rockets[i].maxPower()
    ) {
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#d43648";
      outputRocket.innerHTML = `Uppsss!<br>El Cohete ${rockets[i].codigo} Ha llegado a la Máxima Potencia`;
      break;
    }
  }
}
// ---------------- FUNCTION FRENAR COHETE ---------------- //
function frenarRocket(codigo: string) {
  let i: number;
  for (i = 0; i < rockets.length; i++) {
    if (rockets[i].codigo === codigo && rockets[i].currentSpeed() > 0) {
      rockets[i].frenar();
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#d43648";
      outputRocket.innerHTML = `El Cohete ${
        rockets[i].codigo
      } está Frenando ...<br><br> ${rockets[i].currentSpeed()}`;
      break;
    }
    if (rockets[i].codigo === codigo && rockets[i].currentSpeed() === 0) {
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#d43648";
      outputRocket.innerHTML = `Upsss!<br> El Cohete ${rockets[i].codigo} Ha llegado a la Mínima Potencia.`;
      break;
    }
  }
}
// ---------------- FUNCTION MOSTRAR COHETE ---------------- //
function mostrarRocket(codigo: string) {
  for (let i = 0; i < rockets.length; i++) {
    if (rockets[i].codigo === codigo) {
      let outputRocket = document.getElementById(
        "rocket" + (i + 1)
      ) as HTMLParagraphElement;
      outputRocket.style.color = "#fac027";
      outputRocket.innerHTML = `SE HA CREADO EL COHETE  ${
        rockets[i].codigo
      } CON ${rockets[i].thrusters.length} PROPULSORES.<br>
                                        SU VELOCIDAD ACTUAL ES: ${rockets[
                                          i
                                        ].currentSpeed()}<br><br>`;
    }
  }
}
// ------------- FUNCTION MOSTRAR TODOS LOS COHETES ------------- //
function mostrarTodoRockets() {
  let mostrarTodoRockets = document.getElementById(
    "allRockets"
  ) as HTMLParagraphElement;
  mostrarTodoRockets.innerHTML = "";
  mostrarTodoRockets.style.color = "#fac027";
  for (var i = 0; i < rockets.length; i++) {
    mostrarTodoRockets.innerHTML += `Cohete ${rockets[i].codigo} con ${
      rockets[i].thrusters.length
    } <br> Propulsores. La Velocidad actual es: ${rockets[
      i
    ].currentSpeed()}.<br><br>`;
  }
}

"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codigo) {
        this.thrusters = new Array();
        this.codigo = codigo;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.thrustersPower = function () {
        return this.thrusters.map(function (elem) {
            return elem.maxPower;
        }).join(", ");
    };
    Rocket.prototype.currentSpeed = function () {
        var i, currentSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            currentSpeed += this.thrusters[i].currentPower;
        }
        return currentSpeed;
    };
    Rocket.prototype.maxPower = function () {
        var i, maxPower = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            maxPower += this.thrusters[i].maxPower;
        }
        return maxPower;
    };
    Rocket.prototype.acelerar = function () {
        var i, newSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower < this.thrusters[i].maxPower) {
                this.thrusters[i].currentPower += 10;
                newSpeed += this.thrusters[i].currentPower;
            }
        }
        return newSpeed;
    };
    Rocket.prototype.frenar = function () {
        var i, newSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower > 0) {
                this.thrusters[i].currentPower -= 10;
                newSpeed += this.thrusters[i].currentPower;
            }
        }
        return newSpeed;
    };
    return Rocket;
}());

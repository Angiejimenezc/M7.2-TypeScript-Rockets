"use strict";
class Rocket {
    constructor(rocketID, propellers, power) {
        this.propellersSpeed = [];
        this.speed = 0;
        this.rocketID = rocketID;
        this.propellers = propellers;
        this.propellersMaxpower = power;
    }
    getRocket() {
        return {
            "rocketID": this.rocketID,
            "propellers": this.propellers,
            "propellersMaxpower": this.propellersMaxpower
        };
    }
    rocketSpeed() {
        let totalSpeed = 0;
        for (let i = 0; i < this.propellers; i++) {
            if (this.speed <= this.propellersMaxpower[i]) {
                this.propellersSpeed[i] = this.speed;
            }
            else {
                this.propellersSpeed[i] = this.propellersMaxpower[i];
            }
            totalSpeed += this.propellersSpeed[i];
        }
        return totalSpeed;
    }
    speedUp() {
        this.speed += 10;
    }
    brake() {
        if (this.speed > 0) {
            this.speed -= 10;
        }
        else {
            this.speed = 0;
        }
    }
    getSpeed() {
        return this.speed;
    }
}

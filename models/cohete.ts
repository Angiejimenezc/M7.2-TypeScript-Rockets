class Rocket {
  private rocketID: string;
  private propellers: number;
  private propellersMaxpower: number[];
  private propellersSpeed: number[] = [];
  private speed: number = 0;

  constructor(rocketID: string, propellers: number, power: number[]) {
    this.rocketID = rocketID;
    this.propellers = propellers;
    this.propellersMaxpower = power;
  }

  getRocket(): object {
    return {
      rocketID: this.rocketID,
      propellers: this.propellers,
      propellersMaxpower: this.propellersMaxpower,
    };
  }

  rocketSpeed(): number {
    let totalSpeed: number = 0;
    for (let i = 0; i < this.propellers; i++) {
      if (this.speed <= this.propellersMaxpower[i]) {
        this.propellersSpeed[i] = this.speed;
      } else {
        this.propellersSpeed[i] = this.propellersMaxpower[i];
      }
      totalSpeed += this.propellersSpeed[i];
    }
    return totalSpeed;
  }

  speedUp(): void {
    this.speed += 10;
    
  }

  brake(): void {
    if (this.speed > 0) {
      this.speed -= 10;
    } else {
      this.speed = 0;
    }
  }

  getSpeed(): number {
    return this.speed;
  }
}




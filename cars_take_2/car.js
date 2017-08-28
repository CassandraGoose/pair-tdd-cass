class Car {
  constructor(mpg) {
    this.gallons = 0;
    this.mpg = mpg;
    this.miles = 0;
    this.adventures = [];
  }
  fill(value) {
    this.gallons += value;
  }
  drive(miles) {
    this.gallons = miles / this.mpg;
    this.miles += miles;
    this.adventures.push(`${miles} miles`);
  }
  odometer() {
    return this.miles;
  }
  trips() {
    return this.adventures;
  }
}

module.exports = Car;

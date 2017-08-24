class Car {
  constructor(mpg) {
    this.gallons = 0;
    this.milesDriven = 0;
    this.tripLengths = [];
    this.mpg = mpg;
  }

  fill(value) {
    this.gallons += value;
  }

  drive(miles) {
    const gasUsed = miles / this.mpg;
    this.gallons -= gasUsed;
    this.milesDriven += miles;
    this.tripLengths.push(`${miles} miles`);
  }

  odometer() {
    return this.milesDriven;
  }

  trips() {
    return this.tripLengths;
  }
}



module.exports = Car;

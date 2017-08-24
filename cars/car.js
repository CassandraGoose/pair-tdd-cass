function Car(mpg) {
  this.gallons = 0;
  this.milesDriven = 0;
  this.tripLengths = [];
  this.mpg = mpg;
  this.fill = fill;
  this.drive = drive;
  this.odometer = odometer;
  this.trips = trips;

  function fill(value) {
    this.gallons += value;
  }

  function drive(miles) {
    const gasUsed = miles / this.mpg;
    this.gallons -= gasUsed;
    this.milesDriven += miles;
    this.tripLengths.push(`${miles} miles`);
  }

  function odometer() {
    return this.milesDriven;
  }

  function trips() {
    return this.tripLengths;
  }
}



module.exports = Car;

function Car(mpg) {
  this.gallons = 0;
  this.milesDriven = 0;
  this.tripLengths = [];
  this.mpg = mpg;
}

Car.prototype.fill = function(value) {
  this.gallons += value;
}

Car.prototype.drive = function(miles) {
  const gasUsed = miles / this.mpg;
  this.gallons -= gasUsed;
  this.milesDriven += miles;
  this.tripLengths.push(`${miles} miles`);
}

Car.prototype.odometer = function() {
  return this.milesDriven;
}

Car.prototype.trips = function() {
  return this.tripLengths;
}

module.exports = Car;

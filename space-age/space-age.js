// seconds in an earth year 31557600

// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYear = 31557600;

    this.orbitalPeriods = {
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158
    }
  }

  onEarth() {
    return this.seconds / this.earthYear;
  }

  secondsInOtherPlanetYear(planet) {
    return this.earthYear * this.orbitalPeriods[planet];
  }

  onMercury() {
    return this.seconds / this.secondsInOtherPlanetYear('mercury');
  }

  onVenus() {
    return this.seconds / this.secondsInOtherPlanetYear('venus');
  }

  onMars() {
    return this.seconds / this.secondsInOtherPlanetYear('mars');
  }
 }

module.exports = SpaceAge;

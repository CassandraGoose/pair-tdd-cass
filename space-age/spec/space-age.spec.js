var SpaceAge = require('../space-age');

describe('Space Age', function () {
  it('age in seconds', function () {
    var age = new SpaceAge(1000000);
    expect(age.seconds).toEqual(1000000);
  });

  it('age in earth years', function () {
    var age = new SpaceAge(1000000000);
    expect(age.onEarth()).toBeCloseTo(31.69, 2);
  });

  it('age in mercury years', function () {
    var age = new SpaceAge(2134835688);
    expect(age.onEarth()).toBeCloseTo(67.65, 2);
    expect(age.onMercury()).toBeCloseTo(280.88, 2);
  });

  it('age in venus years', function () {
    var age = new SpaceAge(189839836);
    expect(age.onEarth()).toBeCloseTo(6.02, 2);
    expect(age.onVenus()).toBeCloseTo(9.78, 2);
  });

  it('age in mars years', function () {
    var age = new SpaceAge(2329871239);
    expect(age.onEarth()).toBeCloseTo(73.83, 2);
    expect(age.onMars()).toBeCloseTo(39.25, 2);
  });

  // xit('age in jupiter years', function () {
  //   var age = new SpaceAge(901876382);
  //   expect(age.onEarth()).toBeCloseTo(28.58, 2);
  //   expect(age.onJupiter()).toBeCloseTo(2.41, 2);
  // });
  //
  // xit('age in saturn years', function () {
  //   var age = new SpaceAge(3000000000);
  //   expect(age.onEarth()).toBeCloseTo(95.06, 2);
  //   expect(age.onSaturn()).toBeCloseTo(3.23, 2);
  // });
  //
  // xit('age in uranus years', function () {
  //   var age = new SpaceAge(3210123456);
  //   expect(age.onEarth()).toBeCloseTo(101.72, 2);
  //   expect(age.onUranus()).toBeCloseTo(1.21, 2);
  // });
  //
  // xit('age in neptune year', function () {
  //   var age = new SpaceAge(8210123456);
  //   expect(age.onEarth()).toBeCloseTo(260.16, 2);
  //   expect(age.onNeptune()).toBeCloseTo(1.58, 2);
  // });
});

class Thermostat {
  constructor() {
    this.temp = 20;
    this.minimum = 10;
  }

  currentTemp() {
    console.log(`The current temperature is ${this.temp}oC.`);
    return `The current temperature is ${this.temp}oC.`;
  };

  up(value = 1) {
    this.temp += value;
  };

  down(value = 1) {
    this.temp -= value;
  };

}

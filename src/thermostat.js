class Thermostat {
  constructor() {
    this.temp = 20;
  }

  currentTemp() {
    console.log(`The current temperature is ${this.temp}oC.`);
    return `The current temperature is ${this.temp}oC.`;
  };

  up(value = 1) {
    this.temp += value;
  };

}

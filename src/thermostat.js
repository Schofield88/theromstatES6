function Thermostat() {
  let temp = 20;
  const minimum = 10;
  let maxTemp = 25;

  function currentTemp() {
    console.log(`The current temperature is {this.temp}oC.`);
    return `The current temperature is ${temp}oC.`;
  }

  function currentMaxTemp() {
    return maxTemp;
  }

  function up(value=1) {
    temp += value;
  }

  function down(value=1) {
    temp -= value;
  }

  function reportMinimum() {
    return minimum;
  }

  return Object.freeze({
    currentTemp,
    up,
    down,
    reportMinimum,
    currentMaxTemp
  });
}

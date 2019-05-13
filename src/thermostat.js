function Thermostat() {
  let temp = 20;
  const minimum = 10;
  let maxTemp = 25;
  let powerSave = true;

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

  function saveOff() {
    powerSave = false;
    setMaxTemp();
  }

  function saveOn() {
    powerSave = true;
    setMaxTemp();
  }

  function setMaxTemp() {
    if (powerSave === false) {
      maxTemp = 32;
    } else if (powerSave === true) {
      maxTemp = 25;
    };
  };

  function isPowerSave() {
    return powerSave === true;
  }

  function reset() {
    temp = 20;
  }

  function energyUsage() {
    if (temp < 18) {
      return 'Low';
    } else if (temp >= 18 && temp < 25) {
      return 'Medium';
    } else {
      return 'High';
    }
  }

  return Object.freeze({
    currentTemp,
    up,
    down,
    reportMinimum,
    currentMaxTemp,
    saveOff,
    saveOn,
    isPowerSave,
    reset,
    energyUsage,
  });
}

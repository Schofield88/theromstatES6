describe('Thermostat', () => {

  let stat;

  beforeEach(() => {
    stat = Thermostat();
  });

  context('All things state', () => {

    it('starts with a temp of 20 degrees', () => {
      let result = 'The current temperature is 20oC.';
      expect(stat.currentTemp()).toEqual(result);
    });

    it('has a minimum temp of 10 degrees', () => {
      expect(stat.reportMinimum()).toEqual(10);
    });

    it('has a max temperature of 25 when power saving is on', () => {
      expect(stat.currentMaxTemp()).toEqual(25);
    });

    it('has a max temp of 32 when power saving is off', () => {
      stat.saveOff();
      expect(stat.currentMaxTemp()).toEqual(32);
    });

  });

  context('Methods', () => {

    it('increase the temp by 1 and 4 degrees', () => {
      stat.up();
      expect(stat.currentTemp()).toEqual('The current temperature is 21oC.');
      stat.up(4);
      expect(stat.currentTemp()).toEqual('The current temperature is 25oC.');
    });

    it('decreases the temp by 1 degree', () => {
      stat.down();
      expect(stat.currentTemp()).toEqual('The current temperature is 19oC.');
    });

    it('can switch powerSave on', () => {
      stat.saveOn();
      expect(stat.isPowerSave()).toBeTrue();
    });

    it('can switch powerSave off', () => {
      stat.saveOff();
      expect(stat.isPowerSave()).toBeFalse();
    });

    it('has a reset function', () => {
      stat.up(10);
      stat.reset();
      expect(stat.currentTemp()).toEqual('The current temperature is 20oC.');
    });

    it('will tell you what the current energy usage is - Low for 17', () => {
      stat.down(3);
      expect(stat.energyUsage()).toEqual('Low');
    });

    it('will tell you what the current energy usage is - Medium for 24', () => {
      stat.up(4);
      expect(stat.energyUsage()).toEqual('Medium');
    });

    it('will tell you what the current energy usage is - High for 30', () => {
      stat.up(10);
      expect(stat.energyUsage()).toEqual('High');
    });

  });

});

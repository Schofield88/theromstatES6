describe('Thermostat', () => {

  let stat;

  beforeEach(() => {
    stat = Thermostat();
  });

  context('Initial state', () => {

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

  });

});

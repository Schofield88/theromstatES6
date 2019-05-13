describe('Thermostat', () => {

  let stat;

  beforeEach(() => {
    stat = new Thermostat();
  });

  context('Initial state', () => {

    it('starts with a temp of 20 degrees', () => {
      let result = 'The current temperature is 20oC.';
      expect(stat.currentTemp()).toEqual(result);
    });

  });

  context('Methods', () => {

    it('increase the temp by 1 and 4 degrees', () => {
      stat.up();
      expect(stat.currentTemp()).toEqual('The current temperature is 21oC.');
      stat.up(4);
      expect(stat.currentTemp()).toEqual('The current temperature is 25oC.');
    });

  });

});

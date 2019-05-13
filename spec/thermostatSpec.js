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

});

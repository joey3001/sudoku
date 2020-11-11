import addition from '../src/main.js';

describe('addition', () => {

  test('Should add the two numbers together', () => {
    const z = addition(1, 2);
    expect(z).toEqual(3); 
  });
});

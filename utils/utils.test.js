const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA('number');
});

it('should async add two number', done => {
  utils.asyncAdd(4, 3, sum => {
    expect(sum)
      .toBe(7)
      .toBeA('number');
    done();
  });
});

it('should square a number', () => {
  let res = utils.square(10);

  expect(res)
    .toBe(100)
    .toBeA('number');
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);

  // expect({ name: 'Cody' }).toEqual({ name: 'Cody' });

  expect([2, 3, 4]).toExclude(5);
  expect({ name: 'Cody', age: 32, location: 'Earth' }).toInclude({ age: 32 });
});

it('should verify first and last names are set', () => {
  let res = utils.setName({ age: 32, location: 'Earth' }, 'Cody Taft');

  expect(res.firstName)
    .toBe('Cody')
    .toBeA('string');

  expect(res.lastName)
    .toBe('Taft')
    .toBeA('string');

  expect(res).toBeAn('object');
});

const { expect, test } = require('@jest/globals');
const normalizeTitle = require('../src/tasks/normalize-title');

const expected = 'Treasure Island - TI Las Vegas Hotel & Casino, a Radisson Hotel';

test('title normalization', () => {
  expect(normalizeTitle).toEqual(expected);
});

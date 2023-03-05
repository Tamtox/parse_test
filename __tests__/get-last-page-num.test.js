const { expect, test } = require('@jest/globals');
const getLastPageNum = require('../src/tasks/get-last-page-num');

test('get the integer number of last page', () => {
  expect(getLastPageNum).toEqual(42);
});

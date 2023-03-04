const { expect, test } = require('@jest/globals');
const _ = require('lodash');
const { buildDateRange } = require('../src/tasks/build-date-range');

const gapInDays = 3;
const dayInMilliSeconds = 8.64e7;

const formatDate = (date) => _.join(_.take(date.toISOString(), 10), '');

const expected = {
  today: formatDate(new Date()),
  previous: formatDate(new Date(new Date() - gapInDays * dayInMilliSeconds)),
};

test('build date range', () => {
  expect(buildDateRange(gapInDays)).toEqual(expected);
});

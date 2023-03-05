const { expect, test } = require('@jest/globals');
const filterBreadcrumbs = require('../src/tasks/filter-breadcrumbs');

const expected = [
  ['Adhesives', 'Putties'],
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Epoxy Putty'],
  ['Adhesives', 'Putties', 'Putty'],
];

test('filter and sort array of breadcrumbs', () => {
  expect(filterBreadcrumbs).toEqual(expected);
});

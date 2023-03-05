const { expect, test } = require('@jest/globals');
const parseTable = require('../src/tasks/parse-table');

const expected = [
  { key: 'Bid submission deadline in (days/hours)', value: '27/23' },
  { key: 'Name of procuring entity', value: 'Southern Regional Health Authority' },
  { key: 'Title', value: 'Private Security Services for Health Facilities' },
  { key: 'Competition unique ID', value: '1203/275' },
  { key: 'Evaluation Mechanism', value: 'LCS' },
  { key: 'Description', value: 'Private Security Services for Health Facilities' },
  { key: 'Procurement Type', value: 'Services' },
  { key: 'Services sub-type', value: 'Non-Consulting' },
  { key: 'Procurement Method', value: 'Open - NCB' },
  { key: 'Re-Tender flag', value: 'Re-Tender' },
  {
    key: 'PPC-NCC Categories',
    value: [
      'S0530-Safety and Security Services - Guard Services',
      'S0550-Safety and Security Services - other',
    ],
  },
];

test('parse the html table', () => {
  expect(parseTable).toEqual(expected);
});

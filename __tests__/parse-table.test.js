const { expect, test } = require('@jest/globals');
const cheerio = require('cheerio');
const fs = require('fs');
const { parseTable } = require('../src/tasks/parse-table');

const $ = cheerio.load(fs.readFileSync('./__fixtures__/table.html', 'utf-8'));

const expected = [
  { key: 'Bid submission deadline in (days/hours)', value: '27/23' },
  { key: 'Name of procuring entity', value: [] },
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
  expect(parseTable($)).toEqual(expected);
});

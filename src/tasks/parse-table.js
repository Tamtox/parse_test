const _ = require('lodash');

/**
 * Parse the html layout and build the array of objects with table headers as 'keys',
 * and table text parameters as 'values'
 *
 * @param Cheerio Node object
 * @return object - The array of object
 *
 * Expected result:
 * [
 *   { key: 'Bid submission deadline in (days/hours)', value: '27/23' },
 *   { key: 'Name of procuring entity', value: [] },
 *   { key: 'Title', value: 'Private Security Services for Health Facilities' },
 *   { key: 'Competition unique ID', value: '1203/275' },
 *   { key: 'Evaluation Mechanism', value: 'LCS' },
 *   { key: 'Description', value: 'Private Security Services for Health Facilities' },
 *   { key: 'Procurement Type', value: 'Services' },
 *   { key: 'Services sub-type', value: 'Non-Consulting' },
 *   { key: 'Procurement Method', value: 'Open - NCB' },
 *   { key: 'Re-Tender flag', value: 'Re-Tender' },
 *   {
 *     key: 'PPC-NCC Categories',
 *     value: [
        'S0530-Safety and Security Services - Guard Services',
        'S0550-Safety and Security Services - other'
      ],
    },
 * ]
 *
 * Most likely, these methods could be useful:
 * https://cheerio.js.org/docs/api/classes/Cheerio#map
 * https://cheerio.js.org/docs/api/classes/Cheerio#text
 * https://cheerio.js.org/docs/api/classes/Cheerio#contents
 */

const parseTable = ($) => {
  // your solution here
};

module.exports = { parseTable };

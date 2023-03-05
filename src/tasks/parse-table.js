// const _ = require('lodash');
const fs = require('fs');
const cheerio = require('cheerio');

const nodeTree = cheerio.load(fs.readFileSync('./__fixtures__/table.html', 'utf-8'));

/**
 * The 'parseTable' function takes a single parameter '$',
 * which is a special Cheerio object.
 * This object contains a tree of nodes from the html layout,
 * which you can find along the path './__fixtures__/table.html'.
 *
 * You can find the source of that html layout here:
 * https://www.gojep.gov.jm/epps/cft/prepareViewCfTWS.do?resourceId=3053856
 *
 * The function should parse the table and get all text values from it.
 * The expeted result is an array of object, included two properties:
 * 'key' (text from 'dt' tags), and 'value' (text from 'dd' tags), see it below.
 * You shall normalize the string values by removing unuseful symbols,
 * such as ':', '\n', ect.
 * Pay attention of the property 'PPC-NCC Categories', because it should contain
 * an array of two values.
 *
 * Expected result:
 * [
 *   { key: 'Bid submission deadline in (days/hours)', value: '27/23' },
 *   { key: 'Name of procuring entity', value: 'Southern Regional Health Authority' },
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
  // put your code here
};

module.exports = parseTable(nodeTree);

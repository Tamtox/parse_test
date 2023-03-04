const moment = require('moment');

/**
 * Build dynamically calculated dates,
 * the first of which indicates the current day,
 * and the second one is separated from it by a specified number of days.
 *
 * @param number - The quantity of days to go back from the current date
 * @return object - The object with two properties: 'today', 'previous'
 
 * !!! You shall use the methods of the 'momentjs' to manipulate the dates:
 * https://momentjs.com/docs/
 *
 * Example of result:
 * {
 *   today: '2023-03-04'    // it's the current date
 *   previous: '2023-03-01' // date in the past, if the gap is 3 days
 * }
 */

const buildDateRange = (gap) => {
  // your solution here, strictly using momentjs
};

module.exports = { buildDateRange };

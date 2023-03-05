const moment = require('moment');

/**
 * The function 'buildDateRange' takes a single parameter 'gapInDays',
 * showing the difference in days and should create two dates.
 * The first date is the current date of the function invoking.
 * The second date is the one that is in the past by the difference in days.
 * The function returns an object with two properties 'today' and 'previous'.
 * See the expected result below.
 *
 * Example of result:
 * {
 *   today: '2023-03-04'    // it's the current date
 *   previous: '2023-03-01' // date in the past
 * }
 *
 * IMPORTANT NOTICE!
 * Use only the methods of the 'momentjs' to biuld and manipulate the dates.
 * https://momentjs.com/docs/
 */

const gapInDays = 3;

const buildDateRange = (gap) => {
  // put your code here
};

module.exports = buildDateRange(gapInDays);

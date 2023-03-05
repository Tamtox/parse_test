// const _ = require('lodash');

/**
 * The function 'normalizeTitle' takes a single parameter 'title',
 * the string value, taken from booking.com and modified with several malicious symbols,
 * such as '\n', '\t', '\' and double spaces.
 *
 * The function should remove all malicious symbols,
 * and return the normalized string as shown below.
 *
 * Expected result: 'Treasure Island - TI Las Vegas Hotel & Casino, a Radisson Hotel'
 *
 * You can, but are not required to us~nr e 'lodash'
 */

const title = '  \t Treasure  Island\t\n - \n  TI Las Vegas Hotel \\ &  Casino,\n a\t Radisson \\  Hotel\t\n';

const normalizeTitle = (str) => {
  // put your code here
};

module.exports = normalizeTitle(title);

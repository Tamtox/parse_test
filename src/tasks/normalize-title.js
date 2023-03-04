const _ = require('lodash');

/**
 * Normalize the source string by removing malicious symbols
 *
 * @param  - The string with malicious symbols
 * @return - Normalized human readable string
 *
 * Expected result: 'Treasure Island - TI Las Vegas Hotel & Casino, a Radisson Hotel'
 *
 * You can, but not required to use 'lodash'
 */

const title = '  \t Treasure  Island\t\n - \n TI Las Vegas Hotel \\ &  Casino,\n a\t Radisson \\  Hotel\t\n';

const normalizeTitle = (str) => {
  // your solution here
};

module.exports = normalizeTitle(title);

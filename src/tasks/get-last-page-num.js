// const _ = require('lodash');

/**
 * The function 'getLastPageNum' takes a single parameter 'paginationText' -
 * the array of text values scraped from pagination block on amazon.de.
 *
 * The function should return the number of the last page in integer format.
 * Expected result: 42
 *
 * You can, but are not required to use 'lodash'
 */

const paginationText = ['Zurück', '1', '2', '3', '...', '42', 'Weiter'];

const getLastPageNum = (texts) => {
  // put your code here
};

module.exports = getLastPageNum(paginationText);

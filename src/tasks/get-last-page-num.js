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

// Returns 0 if not an array or no numbers in array
const getLastPageNum = (texts) => {
  let result = 0;
  if (!Array.isArray(texts)) return result;
  const textLen = texts.length;
  for (let i = textLen; i >= 0; i -= 1) {
    const pageNum = Number(texts[i]);
    if (pageNum) {
      result = pageNum;
      break;
    }
  }
  return result;
};

module.exports = getLastPageNum(paginationText);

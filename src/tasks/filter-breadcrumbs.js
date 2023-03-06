const _ = require('lodash');

/**
 * The function 'filterBreadcrumbs' takes a single parameter 'breadcrumbs',
 * including an array of arrays, scraped from misumi.com.
 * Each nested array includes several string values from website breadcrumbs chains.
 * Some of them are duplicates.
 * The function should return an array with filtered nested arrays,
 * which includes only a unique set of breadcrumbs.
 * Sort the nested arrays, as it shown below.
 *
 * Expected result:
 * [
 *   ['Adhesives', 'Putties'],
 *   ['Adhesives', 'Putties', 'Adhesive Putty'],
 *   ['Adhesives', 'Putties', 'Epoxy Putty'],
 *   ['Adhesives', 'Putties', 'Putty']
 * ]
 *
 * You can, but are not required to use 'lodash' methods
 */

const breadcrumbs = [
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Putty'],
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Epoxy Putty'],
  ['Adhesives', 'Putties', 'Epoxy Putty'],
  ['Adhesives', 'Putties', 'Putty'],
  ['Adhesives', 'Putties'],
];

const filterBreadcrumbs = (breadCrumbs) => {
  if (!Array.isArray(breadCrumbs)) return [];
  const arrStr = breadCrumbs.map((breadCrumb) => breadCrumb.join('__'));
  const filtered = _.uniq(arrStr);
  const sorted = filtered.sort();
  const result = sorted.map((breadCrumb) => breadCrumb.split('__'));
  return result;
};

module.exports = filterBreadcrumbs(breadcrumbs);

const _ = require('lodash');

/**
 * Filter nested arrays by their uniq content
 *
 * @breadcrumbs - Source Array to be handled
 * @return - The Array with some nested arrays,
 * incliding uniq set of content and sorted by those sets
 *
 * Expected result:
 * [
 *   ['Adhesives', 'Putties'],
 *   ['Adhesives', 'Putties', 'Adhesive Putty'],
 *   ['Adhesives', 'Putties', 'Epoxy Putty'],
 *   ['Adhesives', 'Putties', 'Putty']
 * ]
 *
 * You can, but not required to use 'lodash'
 */

const breadcrumbs = [
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Putty'],
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Epoxy Putty'],
  ['Adhesives', 'Putties', 'Adhesive Putty'],
  ['Adhesives', 'Putties', 'Putty'],
  ['Adhesives', 'Putties'],
];

const filterBreadcrumbs = () => {
  // your solution here
};

module.exports = { filterBreadcrumbs };

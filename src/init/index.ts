/**
 * @memberof SimpleSlugifyString
 * @function init
 * @description Return the slugify version of the given string
 * @param {String} text text to slug
 * @returns {String} Slug
 */
import { sets, Set } from './sets';

const whiteSpaces = /\s+/g;
const ampersand = /&/g;
const nonWordsAndNumbers = /[^a-zA-Z0-9_]/g;
const replaceMultipleUnderscore = /\__+/g;

const slugify = (text: string): string => {
  if (text === null || text === undefined) {
    return '';
  }
  let slugText = text;
  // Replace all characters from our set
  sets.forEach((set: Set) => {
    slugText = slugText.replace(new RegExp(set.from, 'gi'), set.to);
  });

  return slugText
    .toString()
    .toLowerCase()
    .replace(whiteSpaces, '_')
    .replace(ampersand, '-and-')
    .replace(nonWordsAndNumbers, '')
    .replace(replaceMultipleUnderscore, '_')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default slugify;

/**
 * Credit: Bergi@stackoverflow - https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
 */

export default function asyncTimeout(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

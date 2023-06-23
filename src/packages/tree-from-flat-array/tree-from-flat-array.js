/**
 * WIP
 */

/**
 * With thanks to RobG for this getPropByString function
 * Modified from original post
 * https://stackoverflow.com/questions/6906108/in-javascript-how-can-i-dynamically-get-a-nested-property-of-an-object
 *
 * @param {*} obj
 * @param {*} propString
 * @returns
 */

function getPropByString(obj, propString) {
  if (!propString) return obj;

  let prop,
    props = propString.split('.');

  for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i];

    let candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }

  return obj[props[i]];
}

module.exports = function treeFromFlatArray(
  items,
  idProp,
  parentIdProp,
  childrenProp = 'children'
) {
  let tree = [];
  let mappedArr = {};

  // Build a hash table and map items to objects
  items.forEach(function (item) {
    const id = getPropByString(item, idProp);
    const parentId = getPropByString(item, parentIdProp);

    if (!mappedArr.hasOwnProperty(id)) {
      // in case of duplicates
      mappedArr[id] = item; // the extracted id as key, and the item as value
      mappedArr[id].parentId = parentId;
      mappedArr[id][childrenProp] = []; // under each item, add a key "children" with an empty array as value
    }
  });

  // Loop over hash table
  for (let id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      let mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children. Note this will continue till we have only root level elements left
      if (mappedElem.parentId && mappedArr[mappedElem.parentId]) {
        const parentId = mappedElem.parentId;

        mappedArr[parentId][childrenProp].push(mappedElem);
      }

      // If the element is at the root level or does not have a parent, directly push to the tree

      // DW: we need to amend this function to handle children with roles their parents don't have
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
};

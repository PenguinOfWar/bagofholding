/**
 * Credit: rotareti@stackoverflow - https://stackoverflow.com/a/38340730
 * Modifications to resolve an object/array comparison mismatch by @penguinofwar
 * Modifications to resolve fromEntries issues in node 10: fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource>
 */

const fromEntries = iterable => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
};

const isObject = obj => {
  return Boolean(obj && typeof obj === 'object');
};

const isArray = array => {
  return Boolean(array instanceof Array);
};

const exportModule = (module.exports = function removeEmptyProps(object) {
  if (!Object.fromEntries || typeof Object.fromEntries !== 'function') {
    Object.fromEntries = fromEntries;
  }

  return Object.fromEntries(
    Object.entries(object)
      .filter(([_k, v]) => v !== null)
      .filter(([_k, v]) => v !== undefined)
      .map(([k, v]) => {
        if (isArray(v)) {
          return [k, v];
        } else if (isObject(v)) {
          return [k, removeEmptyProps(v)];
        }

        return [k, v];
      })
  );
});

exportModule.fromEntries = fromEntries;
exportModule.isObject = isObject;
exportModule.isArray = isArray;

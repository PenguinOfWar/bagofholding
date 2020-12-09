/**
 * Credit: rotareti@stackoverflow - https://stackoverflow.com/a/38340730
 * Modifications to resolve an object/array comparison mismatch by @penguinofwar
 * Modifications to resolve fromEntries issues in node 10: fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource>
 */

export const fromEntries = iterable => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
};

export const isObject = obj => {
  return obj && typeof obj === 'object';
};

export const isArray = object => {
  return object instanceof Array;
};

const removeEmptyProps = (object = {}) => {
  if (!Object.fromEntries || typeof Object.fromEntries !== 'function') {
    Object.fromEntries = fromEntries;
  }

  return Object.fromEntries(
    Object.entries(object)
      .filter(([_k, v]) => v !== null)
      .map(([k, v]) => {
        if (isArray(v)) {
          return [k, v];
        } else if (isObject(v)) {
          return [k, removeEmptyProps(v)];
        }

        return [k, v];
      })
  );
};

export default removeEmptyProps;

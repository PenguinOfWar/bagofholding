/**
 * Credit: rotareti@stackoverflow - https://stackoverflow.com/a/38340730
 * Modifications to resolve an object/array comparison mismatch by @penguinofwar
 */

export const isObject = obj => {
  return obj && typeof obj === 'object';
};

export const isArray = object => {
  return isObject(object) && object instanceof Array;
};

const removeEmptyProps = (object = {}) =>
  Object.fromEntries(
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

export default removeEmptyProps;

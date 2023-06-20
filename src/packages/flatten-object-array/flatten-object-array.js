/**
 * Flatten array of nested objects with children so it can be searched
 *
 * @param property
 * @param array
 * @returns
 */

export default function flattenObjectArray(property, array) {
  let children = [];

  if (!array || array.length === 0) {
    return children;
  }

  const flatten = array.map(m => {
    if (m[property] && m[property].length) {
      children = [...children, ...m[property]];
    }
    return m;
  });

  const result = flatten.concat(
    children.length ? flattenObjectArray(property, children) : children
  );

  return result;
}

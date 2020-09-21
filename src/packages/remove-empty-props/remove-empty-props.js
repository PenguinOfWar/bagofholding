/**
 * Credit: rotareti@stackoverflow - https://stackoverflow.com/a/38340730
 */

const removeEmptyProps = (object = {}) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([_k, v]) => v !== null)
      .map(([k, v]) =>
        typeof v === 'object' ? [k, removeEmptyProps(v)] : [k, v]
      )
  );

export default removeEmptyProps;

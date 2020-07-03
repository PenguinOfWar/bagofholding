export default (to, customConditional) => {
  let isExternal = false;

  if (
    /^(f|ht)tps?:\/\//i.test(to.toLowerCase()) ||
    /^mailto:([^?]*)/.test(to.toLowerCase()) ||
    (customConditional &&
      typeof (customConditional === 'function') &&
      customConditional(to))
  ) {
    isExternal = true;
  }
  return isExternal;
};

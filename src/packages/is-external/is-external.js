module.exports = function isExternal(to, customConditional) {
  let isExternal = false;

  if (
    /^(f|ht)tps?:\/\//i.test(to.toLowerCase()) ||
    /^mailto:([^?]*)/.test(to.toLowerCase()) ||
    /^ww(w|[0-9])(.)/.test(to.toLowerCase()) ||
    /.(\.|a-zA-Z)/.test(to.toLowerCase()) ||
    (customConditional &&
      typeof (customConditional === 'function') &&
      customConditional(to))
  ) {
    isExternal = true;
  }
  return isExternal;
};

module.exports = function isClient() {
  return Boolean(typeof window !== 'undefined' && window.document);
};

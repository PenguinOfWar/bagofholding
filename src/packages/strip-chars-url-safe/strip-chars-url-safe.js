export default function stripCharsUrlSafe(string = '') {
  return String(string)
    .toLowerCase()
    .replace(/[ ]/gi, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .replace(/-{2,}/g, '-')
    .replace(/(^-)|(-$)/g, '');
}

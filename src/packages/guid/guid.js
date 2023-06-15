export default function guid() {
  const r = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r()
  );
}

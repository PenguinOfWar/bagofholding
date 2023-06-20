import guid from '@/packages/guid/guid';

it('returns a two different guid strings', () => {
  const guid1 = guid();
  const guid2 = guid();

  expect(guid1).not.toBe(guid2);
});

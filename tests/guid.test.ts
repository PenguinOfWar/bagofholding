import guid from '@/packages/guid/guid';

it('returns two different guid strings', () => {
  const guid1 = guid();
  const guid2 = guid();

  expect(guid1).not.toBe(guid2);
});

it('created a guid in the expected format', () => {
  const regex =
    /^[a-zA-Z0-9]{1,16}-[a-zA-Z0-9]{1,16}_[a-zA-Z0-9]{1,16}-[a-zA-Z0-9]{1,16}_[a-zA-Z0-9]{1,16}$/gm;

  expect(guid()).toMatch(regex);
});

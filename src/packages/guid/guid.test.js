import guid from './guid';

it('created a guid in the expected format', () => {
  const regex = /^[a-zA-Z0-9]{1,16}-[a-zA-Z0-9]{1,16}_[a-zA-Z0-9]{1,16}-[a-zA-Z0-9]{1,16}_[a-zA-Z0-9]{1,16}$/gm;

  expect(guid()).toMatch(regex);
});

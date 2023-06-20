import isClient from '@/packages/is-client/is-client';

it('returns true when the environment is a browser and window is defined', () => {
  expect(isClient()).toBeTruthy();
  expect(isClient()).toMatchSnapshot();
});

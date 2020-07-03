import isExternal from './is-external';
import { check } from 'prettier';

it('returns true for an external link', () => {
  const checkLink = isExternal('http://google.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for an external HTTPS link', () => {
  const checkLink = isExternal('https://google.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for an ftp link', () => {
  const checkLink = isExternal('ftp://google.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for an ftps link', () => {
  const checkLink = isExternal('ftps://google.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for a mailto', () => {
  const checkLink = isExternal('mailto:darryl.walker@sony.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for a link containing /pdf', () => {
  const checkLink = isExternal('/en_GB/pdf/vpl-ch370', to => {
    return to.toLowerCase().includes('/pdf');
  });

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns false for a relative link', () => {
  const checkLink = isExternal('/en_GB/products/lamp-projectors/vpl-ch370');

  expect(checkLink).toBeFalsy();
  expect(checkLink).toMatchSnapshot();
});

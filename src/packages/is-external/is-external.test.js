import isExternal from './is-external';

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

it('returns true for an www. link', () => {
  const checkLink = isExternal('www.google.com');

  expect(checkLink).toBeTruthy();
  expect(checkLink).toMatchSnapshot();
});

it('returns true for an .com .net and .co.uk link and false without', () => {
  const tests = [
    'google.com',
    'google.co.uk',
    'plus.net',
    'gov.uk',
    'pro.sony',
    'japantimes.co.jp'
  ];

  tests.map(test => {
    const checkLink = isExternal(test);
    const checkLinkFalse = isExternal(test.replace(/\./g, ''));

    expect(checkLink).toBeTruthy();
    expect(checkLinkFalse).toBeFalsy();

    expect([checkLink, checkLinkFalse]).toMatchSnapshot();
    return test;
  });
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

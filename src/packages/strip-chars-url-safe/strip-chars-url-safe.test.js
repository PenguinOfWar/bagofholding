import stripCharsUrlSafe from './strip-chars-url-safe';

it('converts a string into a url safe slug', () => {
  const string = stripCharsUrlSafe('Welcome: to my blog!12!!');

  expect(string).toMatchSnapshot();
});

it('handles nasty strings gracefully', () => {
  const string = stripCharsUrlSafe(
    'Welcome: to my Iñtërnâtiônàlizætiøn blog about Internationalization'
  );

  expect(string).toBe(
    'welcome-to-my-itrntinliztin-blog-about-internationalization'
  );
  expect(string).toMatchSnapshot();
});

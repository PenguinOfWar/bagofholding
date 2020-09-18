import camelToKebab from './camel-to-kebab';

it('shows `camelKebabsAnybody` as `camel-kebabs-anybody`', () => {
  expect(camelToKebab('camelKebabsAnybody')).toBe('camel-kebabs-anybody');
});

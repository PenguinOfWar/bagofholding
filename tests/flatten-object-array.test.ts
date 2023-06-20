import flattenObjectArray from '@/packages/flatten-object-array/flatten-object-array';

const mockData = [
  {
    name: 'Theodore Roosevelt Junior',
    children: [
      {
        name: 'Kermit Roosevelt'
      },
      {
        name: 'Theodore Roosevelt III',
        children: [
          {
            name: 'Theodore Roosevelt IV'
          },
          {
            name: 'Grace Green Roosevelt'
          }
        ]
      }
    ]
  }
];

it('returns a flattened array by custom property', () => {
  const flattened = flattenObjectArray('children', mockData);

  expect(flattened.length).toBe(5);
});

it('returns an empty array if passed no array', () => {
  const flattened = flattenObjectArray('children');

  expect(flattened.length).toBe(0);
});

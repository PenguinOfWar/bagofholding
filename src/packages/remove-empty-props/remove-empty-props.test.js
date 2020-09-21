import removeEmptyProps from './remove-empty-props';

it('recursively removes `null` and `undefined` properties from payload object', () => {
  const object = {
    foo: null,
    bar: undefined,
    baz: '',
    fab: false,
    gib: '༼ つ ◕_◕ ༽つ',
    mud: {
      one: 1,
      two: '2',
      three: Number('3'),
      four: null,
      five: undefined,
      six: {},
      seven: []
    }
  };

  expect(Object.keys(removeEmptyProps(object)).length).toBe(4);
  expect(Object.keys(removeEmptyProps(object).mud).length).toBe(5);
  expect(Object.keys(removeEmptyProps(object)).length).toMatchSnapshot();
});

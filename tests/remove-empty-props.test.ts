import removeEmptyProps, {
  isArray,
  isObject
} from '../src/packages/remove-empty-props';

const object = {
  foo: null,
  bar: undefined,
  baz: '',
  fab: false,
  gib: '༼ つ ◕_◕ ༽つ',
  array: [0, 0, 0],
  object: {
    one: 1,
    two: '2',
    three: Number('3'),
    four: null,
    five: undefined,
    six: {},
    seven: []
  }
};

it('recursively removes `null` and `undefined` properties from payload object', () => {
  expect(Object.keys(removeEmptyProps(object)).length).toBe(6);
  expect(Object.keys(removeEmptyProps(object).object).length).toBe(6);
  expect(Object.keys(removeEmptyProps(object)).length).toMatchSnapshot();
});

it('leaves `arrays` untouched', () => {
  expect(isArray(removeEmptyProps(object).array)).toBeTruthy();
  expect(isArray(removeEmptyProps(object).object)).toBeFalsy();
  expect(isObject(removeEmptyProps(object).object)).toBeTruthy();
  expect(isObject(removeEmptyProps(object).array)).toBeTruthy();
  expect(Object.keys(removeEmptyProps(object)).length).toMatchSnapshot();
});

import asyncTimeout from '../src/packages/async-timeout';

it('waits 250 ms', async () => {
  const start = performance.now();

  await asyncTimeout(250);

  const end = Math.ceil(performance.now() - start);

  expect(end).toBeGreaterThanOrEqual(250);
});

it('waits 500 ms', async () => {
  const start = performance.now();

  await asyncTimeout(500);

  const end = Math.ceil(performance.now() - start);

  expect(end).toBeGreaterThanOrEqual(500);
});

it('waits 1000 ms', async () => {
  const start = performance.now();

  await asyncTimeout(1000);

  const end = Math.ceil(performance.now() - start);

  expect(end).toBeGreaterThanOrEqual(1000);
});

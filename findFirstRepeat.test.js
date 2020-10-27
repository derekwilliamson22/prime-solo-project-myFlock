const findFirstRepeat = require('./findFirstRepeat');

test('"hello" should return 3', () => {
  let result = findFirstRepeat('hello');

  expect(result).toBe(3);
});

test('"aaaah" should return 1', () => {
  let result = findFirstRepeat('aaaah');
  expect(result).toBe(1);
});


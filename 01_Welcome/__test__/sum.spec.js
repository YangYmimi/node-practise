/**
 * test command: node_modules/.bin/jest 01_Welcome/__test__/sum.spec.js
 */
test('测试_01_Welcome_sum', () => {
  const sumFunc = require('../sum');
  // 断言
  expect(sumFunc(1, 2)).toBe(3);
})
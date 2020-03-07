/**
 * test command: node_modules/.bin/jest 01_Welcome/__test__/index.spec.js
 */
test('测试_01_Welcome_index', () => {
  const helloText = require('../index');
  // 断言
  expect(helloText).toBe('Hello, Node.js');
})
const math = require("../index")

test('测试 add 函数, 1 + 1 应该等于2', () => {
  expect(math.add(1, 1)).toBe(2)
});

import { Math } from "../../src/math/math-class";

jest.mock('../../src/math/math-class');
const mockMath = <jest.Mock<Math>>Math as any;

mockMath.add = jest.fn().mockReturnValue(3);
mockMath.sub = jest.fn().mockReturnValue(1);

test("calls math.add", () => {
  const result = mockMath.add(1, 2);

  expect(mockMath.add).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(3);
});

test("calls math.sub", () => {
  const result = mockMath.sub(2, 1);

  expect(mockMath.sub).toHaveBeenCalledWith(2, 1);
  expect(result).toBe(1);
});

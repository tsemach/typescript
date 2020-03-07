
import * as app from "../../src/math/app";
import * as math from "../../src/math/math";

test("calls app.doAdd", () => {
  // check is math.add is realy called
  const addMock = jest.spyOn(math, "add");

  const result = app.doAdd(1, 2);

  expect(result).toBe(3);
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("calls app.doSub", () => {
  // check is math.sub is realy called
  const addMock = jest.spyOn(math, "sub");

  const result = app.doSub(2, 1);

  expect(result).toBe(1);
  expect(addMock).toHaveBeenCalledWith(2, 1);
});

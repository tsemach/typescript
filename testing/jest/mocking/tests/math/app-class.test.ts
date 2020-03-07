
import { mocked } from 'ts-jest/utils';

import * as app from "../../src/math/app-class";
import { Math } from "../../src/math/math-class";

test("calls app.doAdd", () => {
  // check is math.add is realy called  
  Math.prototype.add = jest.fn().mockReturnValue(3);
  const addMock = jest.spyOn(Math.prototype, "add");

  const result = app.doAdd(1, 2);

  console.log('RESULT', result)
  expect(result).toBe(3);  
  expect(addMock).toHaveBeenCalledWith(1, 2);
  jest.restoreAllMocks()
});

test("calls app.doSub", () => {
  // check is math.sub is realy called  
  const originSub = Math.prototype.sub;
  Math.prototype.sub = jest.fn().mockReturnValue(1) as any;
  const subMock = jest.spyOn(Math.prototype, "sub");  

  const result = app.doSub(2, 1);

  expect(result).toBe(1);
  expect(subMock).toHaveBeenCalledWith(2, 1);
  jest.restoreAllMocks()
  Math.prototype.sub = originSub;  
});

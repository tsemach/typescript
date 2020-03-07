import { Math } from './math-class';

const math = new Math();

export const doAdd = (a: number, b: number) => math.add(a, b);
export const doSub = (a: number, b: number) => math.sub(a, b);

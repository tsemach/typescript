import Validator from './validator';
console.log("BBB")

import ValidationA from './validation-a'; ValidationA.new('rxjs');
import ValidationB from './validation-b'; ValidationB.new('rxjs');
import ValidationC from './validation-c'; ValidationC.new('rxjs');

async function run() {
  const validator = new Validator('rxjs');
  const data = { delay: 1, count: 0, valid: true };

  const value = await validator.check(data).xis('valid-a').xis('valid-b').xis('valid-c').exec();

  console.log('exec:', value);
}

run();
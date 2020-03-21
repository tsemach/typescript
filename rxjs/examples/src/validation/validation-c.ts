import { Observable, concat, from , of, asyncScheduler } from 'rxjs';
import { concatMap, take, map, filter } from 'rxjs/operators';
import { Validation } from './validation';
import { ValidationRegistry } from './validation.registry';
import { ValidationValid } from './validation.valid';

export default class ValidationC extends Validation {
  count = -1;
  
  constructor(scope: string) {
    super(scope, 'valid-c');    
  }
  
  static new(scope: string): Validation {    
    const validation = new ValidationC(scope);
    
    return ValidationRegistry.instance.add(validation.indicator, validation);    
  }

  xvalid(data: any) {
    const event$ = Observable.create(async (observer: any) => {
      console.log('[validation-c] got data:', data);      
      data.count += 1;
      this.count = data.count;
      if (data.count === 2) {
        data.valid = false;
      }

      function delay(ms: number) {
        return new Promise(resolve => {
          setTimeout(() => resolve('done'), ms);
        });
      }      
      
      await delay(1000);
      console.log('[validation-c] sending data:', data);      
      observer.next({sta: `ddd - ${data.count}`});
      observer.complete();    
    });
      
    return event$;
  }

  valid(data: any): ValidationValid {
    throw new Error("Method not implemented.");
  }
}
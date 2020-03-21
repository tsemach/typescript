import * as _ from 'lodash';
import { Observable, concat, from , of, asyncScheduler } from 'rxjs';
import { concatMap, take, map, filter } from 'rxjs/operators';

import { ValidationIndicator } from './validation.indicator';
import { ValidationRegistry } from './validation.registry';
import { ValidationValid } from './validation.valid';
import { Validation } from './validation';

//const defaultValidationValid = { valid: true, reason: '', payload: {} };

export default class Validator {
  private data: any;
  private valid: ValidationValid = { from: null, valid: true, reason: '', payload: {} };
  private valids = new Array<Validation>();

  constructor(private scope: string) {    
  }  

  check(data: any) {
    this.data = data;
    this.valid = { from: null, valid: true, reason: '', payload: {} };
    while(this.valids.length > 0) {
      this.valids.pop();
    }
    console.log("CHECK IS ON")
    return this;
  } 

  is(name: string) {
    if ( ! this.valid.valid ) {
      return this;
    }    
    
    const indicator = new ValidationIndicator(this.scope, name)
    const valid = ValidationRegistry.instance.get(indicator).valid(this.data);
        
    this.valid.valid = valid.valid;
    this.valid.reason = valid.reason;
    Object.defineProperty(this.valid.payload, indicator.toString(), {
      value: valid.payload,
      writable: false,
      enumerable: true
    });        

    return this;
  } 

  xis(name: string) {
    if ( ! this.valid.valid ) {
      return this;
    }

    const indicator = new ValidationIndicator(this.scope, name)
    this.valids.push(ValidationRegistry.instance.get(indicator))

    return this;
  }

  async exec() {

    const value = await from(this.valids).pipe(
      // filter(v => { console.log('[filter-1] data is:', data, 'of name', v); return data.valid }),
      concatMap((v: Validation) => { 
        console.log('[concatMap]: is:', v);
        
        // return of({ from: v, valid: v.xvalid(this.data) })
        return v.xvalid(this.data);
      }),
      filter((valid: ValidationValid) => { 
        console.log('[filter-2] data is:', this.data, 'of name', valid); 
        console.log('[filter-2] this.constractor:', this.constructor.name)
        if ( ! this.valid.valid ) {
          return false;
        }

        this.valid.valid = valid.valid;
        this.valid.reason = valid.reason;
        Object.defineProperty(this.valid.payload, valid.from.indicator.toString(), {
          value: valid.payload,
          writable: false,
          enumerable: true
        });        

        return true;
      })
    ).toPromise()
    console.log('data is', this.data);
    console.log('value is', value);

    return this.valid;
  }

  async ais(name: string) {                                                                  
    if ( ! this.valid.valid ) {                                                              
      return this;                                                                           
    }                                                                                        
                                                                                             
    const indicator = new ValidationIndicator(this.scope, name)                              
    const valid = await (ValidationRegistry.instance.get(indicator)).avalid(this.data);      
                                                                                             
    this.valid.valid = valid.valid;                                                          
    this.valid.reason = valid.reason;                                                        
    Object.defineProperty(this.valid.payload, indicator.toString(), {                        
      value: valid.payload,                                                                  
      writable: false,                                                                       
      enumerable: true                                                                       
    });                                                                                      
                                                                                             
    return this;                                                                             
  }                                                                                          

  get value() {
    return this.valid;
  } 
}

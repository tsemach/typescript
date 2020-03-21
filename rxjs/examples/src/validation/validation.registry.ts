
import { Validation } from './validation';
import { ValidationIndicator } from './validation.indicator';

export class ValidationRegistry {
  private static _instance: ValidationRegistry = null;
  private validations = new Map<string, Validation>();

  private constructor() { 
  }

  public static get instance(): ValidationRegistry {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new this();

    return this._instance;
  }

  add(indicator: ValidationIndicator, vailidation: Validation) {        
    if (this.validations.has(indicator.toString())) {
      throw new Error('validation [' + indicator + '] is aleardy exist');
    }

    this.validations.set(indicator.toString(), vailidation);

    return vailidation;
  }

  has(indicator: ValidationIndicator): boolean {
    return this.validations.has(indicator.toString());
  }

  get(indicator: ValidationIndicator) {
    if ( ! this.has(indicator) ) {
      throw new Error(`validation ${indicator.toString()} is not exist`);
    }
    return this.validations.get(indicator.toString());
  }

  del(indicator: ValidationIndicator) {
    return this.validations.delete(indicator.toString());
  }

  size() {
    return this.validations.size;
  }

  keys() {    
    return this.validations.keys();    
  }
}

//new ValidattionRegistry('login').check(event).is('event').is('login:superuser').value;
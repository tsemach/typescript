
import { Observable } from 'rxjs';
// import { concatMap, take, map, filter } from 'rxjs/operators';

import { ValidationIndicator } from './validation.indicator';
import { ValidationValid }  from './validation.valid';

export abstract class Validation {
  protected _indicator: ValidationIndicator;

  constructor(scope: string, name: string) {
    this._indicator = new ValidationIndicator(scope, name);
  }

  get indicator() {
    return this._indicator
  }

  abstract valid(data: any): ValidationValid;
  abstract xvalid(data: any): Observable<any>;

  async avalid(_: any): Promise<ValidationValid> {
    throw Error('Validation is not implement validx');
  }

  //abstract validx(data: any): Observable;

  static new(scope: string): Validation {
    throw Error('new can\'t implement on validation base class');
  }
}

export class ValidationIndicator {
  
  constructor(private scope: string, private name: string) {    
  }

  get indicator() {
    return this.scope+':'+this.name;
  }

  toString() {
    return this.scope+':'+this.name;
  }
}
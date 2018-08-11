/**
 * <description>
 * </description>
 * 
 * <output>
 * class_1 {
 *  property: 'property',
 *  hello: 'override',
 *  newProperty: 'new property' }
 * </output>
 */  

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";        
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));

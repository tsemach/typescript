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

function Comp(config) {
    return function(target) {
        console.log('Comp: target = ' + target);
      
        target.prototype.sayHello = function sayHello(... args) {
            console.log('sayHello: config = ' + JSON.stringify(config));     
            console.log('sayHello: data = ' + JSON.stringify(args));     
        }                            
    }
}

@Comp({
    course: "Angular 2"
})
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        console.log("IN Origin constructor");
        this.hello = m;
    }
}

let g = new Greeter("world")
console.log("after ner GReeter " + JSON.stringify(g));

g.sayHello({method: 'create', data: {value: 'some data here'}});

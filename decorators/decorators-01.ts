/**
 * <description>
 * </description>
 * 
 * <output>
 * Tsemach Mizrachi
 * </output>
 */

function SayMyName(target) {
    return class extends target {          
        firstName = "Tsemach";
        lastName = "Mizrachi";

        sayMyName() {
            return `${this.firstName} ${this.lastName}`
            }
    }
}

@SayMyName
class Person {
    name: string;

    constructor() {
    }
}

let person = new Person();
console.log(person.sayMyName()); // Tsemach Mizrachi
console.log(person.firstName); // Tsemach Mizrachi


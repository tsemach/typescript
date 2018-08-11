/**
 * from: https://codecraft.tv/courses/angular/es6-typescript/decorators/
 * <description>
 * </description>
 * 
 * <output>
 * Student: {"course":"Angular 2"}
 * target: function Person(firstName, lastName) {
 *      this.firstName = firstName;
 *      this.lastName = lastName;
 * }
 * Angular 2
 * </output>
 */ 
 
function Student(config) { // 1
    console.log("Student: " +  JSON.stringify(config));
    return function (target) {
        console.log("target: " +  target);
        Object.defineProperty(          
            target.prototype,
            'course',
            {value: () => config.course} // 2
      )
    }
  }

 @Student({
    course: "Angular 2"
})
class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let asim = new Person("Tsemach", "Mizrachi");
console.log(asim.course()); // Angular 2

export function Component(config) {
  return function(target) {
    console.log('[Component:constructor] target = ' + target);
    console.log('[Component:constructor] config = ' + JSON.stringify(config));

    // this is an example of adding method to the class
    target.prototype.sayHello = function(... args) {
        console.log('[Component:sayHello] config = ' + JSON.stringify(config));     
        console.log('[Component:sayHello] args = ' + JSON.stringify(args));     
    }       
        

    // this is an example of adding method to the class 
    // using Object.defineProperty
    Object.defineProperty(
      target.prototype,
      config['tasks'],
      (data) => function(... args) {
        console.log('[Component:tasks] config = ' + JSON.stringify(config));     
        console.log('[Component:tasks] data = ' + JSON.stringify(args));     
    });
    let a = 1;
    if (a == 1)     {
      target.prototype.tasks({data: 'this is data'});
    }
    console.log("In component: after definePropert " + target);
  }
}

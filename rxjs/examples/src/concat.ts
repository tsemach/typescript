import { Observable, concat, from , of, asyncScheduler } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => () => {
      console.log('sending data:', data);

      resolve('done') 
    }, ms);
  });
}

class Validtion {

  valid(data: any) {
    const event$ = Observable.create(async (observer: any) => {
      console.log('[Validation:valid] got data:', data);      
      data.count += 1;

      function delay(ms: number) {
        return new Promise(resolve => {
          setTimeout(() => resolve('done'), ms);
        });
      }      
      
      await delay(1000);
      console.log('sending data:', data);      
      //observer.next({sta: 'ddd'});
      observer.complete();    
    });
      
    return event$;
  }
}
  
const valids = [new Validtion(), new Validtion(), new Validtion()];
  
let data = { delay: 1, count: 0 }

//const result$ = concat(valids[0].valid(data), valids[0].valid(data))
//const result$ = concat(valids[0].valid(data), valids[0].valid(data))

// from(valids).pipe(concatMap(v => v.valid(data))).subscribe(value => {
//   console.log('value is', value);
// })

async function exec() {
  await from(valids).pipe(concatMap(v => v.valid(data))).toPromise()
  console.log('value is', data);
}

exec();

// result$.subscribe((value) => {
//   console.log(value)
// })
// const valid0$ = valids[0].valid(data);
// valid0$.subscribe((_d: any) => {
//   console.log("[subscribe0] data-0:", _d);
//   data = _d;

//   const valid1$ = valids[1].valid(data);
//   valid1$.subscribe((_d: any) => {
//     console.log("[subscribe1] data-1:", _d);
//     data = _d;

//     const valid2$ = valids[2].valid(data);
//     valid2$.subscribe((_d: any) => {
//       console.log("[subscribe2] data-2:", _d);
//       data = _d;  
//     });  
//   });
// });
  

import { Observable, of, from, asyncScheduler} from 'rxjs';

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
      
      //promiseDelay(1000).then((value) => {console.log('PPPPPPP:', value)})
      await delay(1000);
      console.log('sending data:', data);      
      observer.next(data);
      observer.complete();    
    });
      
    return event$;
  }
}
  
const valids = [new Validtion(), new Validtion(), new Validtion()];
  
let data = { delay: 1, count: 0 }
const valid0$ = valids[0].valid(data);

valid0$.subscribe((_d: any) => {
  console.log("[subscribe0] data-0:", _d);
  data = _d;

  const valid1$ = valids[1].valid(data);
  valid1$.subscribe((_d: any) => {
    console.log("[subscribe1] data-1:", _d);
    data = _d;

    const valid2$ = valids[2].valid(data);
    valid2$.subscribe((_d: any) => {
      console.log("[subscribe2] data-2:", _d);
      data = _d;  
    });  
  });
});
  
  // valids.forEach(async valid => {
    
    //   console.log("[loop] beofre call to observer:", data);
    //   const valid$ = valid.valid(data);
    
    //   // data = await valid$.toPromise();
    //   // console.log("[loop] WITH PROMISE: data", data)
    
    //   valid$.subscribe((_d: any) => {
      //     console.log("[subscribe] data:", _d);
      //     data = _d
    //   })
    // });
    


// valid1$.subscribe((data: any) => {
//   console.log("[subscribe] data:", data);  
//   const valid2$ = v1.valid({ delay: 1, count: 0 });

// });
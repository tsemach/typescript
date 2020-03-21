import { Observable } from 'rxjs';

/**
 * Output is:
 *  Starting counting...
 *  sending i: 0
 *  0
 *  sending i: 1
 *  1
 *  sending i: 2
 *  2
 *  sending i: 3
 *  3
 *  5 <--!NOTE: chkecout this one subscriber can send back data to Observable
 *  sending i: 4
 *  4
 */

const event$ = Observable.create((observer: any) => {
  console.log('Starting counting...');
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('sending i:', i)
      observer.next(i);
    }, i * 1000);
  }
});

const subscription = event$.subscribe((value: number) => {
  console.log(value);
  if (value === 3) {
    subscription.next(5); // <-- subscribers can send back data to Observers
  }
  if (value === 4) {
    subscription.unsubscribe();
  }
});






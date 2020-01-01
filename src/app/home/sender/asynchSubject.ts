import { Subject, AsyncSubject, BehaviorSubject } from "rxjs";

const subject = new Subject();
const asynchSubject = new AsyncSubject();

subject.subscribe(x => console.log('before complete subject',x))
asynchSubject.subscribe(x => console.log('before complete asyncSubject',x))

subject.next('value 1')
subject.next('value 2')
subject.next('value 3')
subject.complete();
subject.next('value 4')

asynchSubject.next('value 1')
asynchSubject.complete();
asynchSubject.next('value 3');
asynchSubject.next('value 4');


subject.subscribe(x => console.log('after complete - subject',x))
asynchSubject.subscribe(x => console.log('after complete - asynchSubject',x))


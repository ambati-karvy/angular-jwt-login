import { of } from "rxjs";

const myObservable = of(1,2,3)


const myObserver = {
    next: x => console.log('observer got next value'+x),
    error: err => console.log('observer got error'+err),
    complete: () => console.log('observer got a complete notification')
};

myObservable.subscribe(myObserver);


myObservable.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
);



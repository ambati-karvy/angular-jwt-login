import { Observable } from "rxjs";

function sequesnceSuscribe(observer) {

    observer.next(1);
    observer.next(2);
    observer.next(3); 

    observer.complete();

    return {unsubscribe(){}}
}

const sequence = new Observable(sequesnceSuscribe);

sequence.subscribe({
    next(num) {console.log(num)},
    complete(){console.log('Finished Sequence')}
})


// function fromEvent(target, eventName) {
//     return new Observable((observer) => {
//       const handler = (e) => observer.next(e);
  
//       // Add the event handler to the target
//       target.addEventListener(eventName, handler);
  
//       return () => {
//         // Detach the event handler from the target
//         target.removeEventListener(eventName, handler);
//       };
//     });
//   }

// const ESC_KEY = 27;
// const nameInput = document.getElementById('name') as HTMLInputElement;

// const subscription = fromEvent(nameInput, 'keydown')
//   .subscribe((e: KeyboardEvent) => {
//     if (e.keyCode === ESC_KEY) {
//       nameInput.value = '';
//     }
//   });
// forkJoin: 当所有输入 Observables 完成时，它会收集每个 Observable 的最后一个值，并将它们作为数组发出。

import { of, forkJoin, timer, Observable } from "rxjs";

const source1$ = of(1, 2, 3);
const source2$ = of(4, 5, 6);

const source3$ = timer(300).pipe((observable) => {
  const o = new Observable((observer) => {
    observable.subscribe({
      next: (value) => {
        observer.next("source3$" + value);

        setTimeout(() => {
          observer.next("source3$" + value + " after 300ms");

          observer.complete();
        }, 300);
      },
    });
  });

  return o;
});

const source$ = forkJoin([source1$, source2$, source3$]);

source$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

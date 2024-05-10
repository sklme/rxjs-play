import { Subject, connectable, take, timer } from "rxjs";

const connectableSource$ = connectable(timer(100, 100).pipe(take(20)), {
  connector: () => new Subject(),
});

connectableSource$.subscribe((value) => console.log(`Subscriber 1: ${value}`));

connectableSource$.connect();

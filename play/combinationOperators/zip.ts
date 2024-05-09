// zip: 当所有输入 Observables 都发出一个值时，它会按顺序将每个 Observable 的值作为数组发出。

import { interval, map, of, take, zip } from "rxjs";
import { zipWith, zipAll } from "rxjs/operators";

const source1$ = of(1, 2, 3);
const source2$ = of(4, 5, 6);
const source3$ = interval(100)
  .pipe(take(2))
  .pipe(
    map((value) => {
      return "source3$" + value;
    })
  );

const source$ = zip(source1$, source2$, source3$);

source$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete zip"),
});

source1$.pipe(zipWith(source2$, source3$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete zipWith"),
});

of(source1$, source2$, source3$)
  .pipe(zipAll<number | string>())
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete zipAll"),
  });

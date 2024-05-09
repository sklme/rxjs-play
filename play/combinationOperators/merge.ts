// merge: 并行地将多个 Observables 的值合并到一个 Observable 中。

import { interval, merge } from "rxjs";

import { map, mergeWith, take } from "rxjs/operators";

const source1$ = interval(100).pipe(take(5));
const source2$ = interval(200)
  .pipe(take(5))
  .pipe(
    map((value) => {
      return value * 10;
    })
  );

const source$ = merge(source1$, source2$);

source$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

source1$.pipe(mergeWith(source2$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

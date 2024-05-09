// concat: 按照给定的顺序，一个接一个地连接多个 Observables 的输出。

import { of, concat } from "rxjs";
import { concatWith } from "rxjs/operators";

const source1$ = of(1, 2, 3);
const source2$ = of(4, 5, 6);

const source$ = concat(source1$, source2$);

source$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

source1$.pipe(concatWith(source2$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

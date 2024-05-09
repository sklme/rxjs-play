// takeWhile: takeWhile操作符发出源Observable的值，直到提供的条件不再为true。

import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5).pipe(takeWhile((value) => value < 4));

source$.subscribe({
  next: (value) => console.log(`小于4的值：${value}`),
  complete: () => console.log("complete"),
});

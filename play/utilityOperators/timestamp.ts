// timestamp 操作符用于记录 Observable 发出每个值的时间戳。它会将时间戳和原始值作为一个对象发出。

import { of, timer } from "rxjs";
import { delayWhen, timestamp } from "rxjs/operators";

const source$ = of("a", "b", "c")
  .pipe(delayWhen((value, index) => timer(1000 * index)))
  .pipe(timestamp());

source$.subscribe({
  next: (ti) => console.log(`timestamp: ${ti.timestamp}, Value: ${ti.value}`),
  complete: () => console.log("complete"),
});

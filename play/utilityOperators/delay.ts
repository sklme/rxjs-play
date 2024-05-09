// delay: delay操作符用来将源Observable的所有发出值延迟一个特定的时间段。这个时间段是固定的，对于源Observable中的每个值，delay都会延迟相同的时间。

import { of } from "rxjs";
import { delay } from "rxjs/operators";

const source$ = of(1, 2, 3).pipe(delay(1000));

const time = Date.now();
source$.subscribe({
  next: (value) => {
    console.log(value);
    console.log(Date.now() - time);
  },
  complete: () => console.log("complete"),
});

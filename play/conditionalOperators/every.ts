// every: every操作符检查源Observable发出的所有值是否都满足给定的条件，如果都满足则发出true，否则发出false。

import { of } from "rxjs";
import { every } from "rxjs/operators";

const allEven$ = of(2, 4, 6).pipe(every((value) => value % 2 === 0));

allEven$.subscribe({
  next: (value) => console.log(`是否所有值都是偶数：${value}`),
  complete: () => console.log("complete"),
});

// find: find操作符发出源Observable中第一个满足条件的值。

import { of } from "rxjs";
import { find } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5).pipe(find((value) => value % 2 === 0));

source$.subscribe({
  next: (value) => console.log(`第一个偶数是：${value}`),
  complete: () => console.log("complete"),
});

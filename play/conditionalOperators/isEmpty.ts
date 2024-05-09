// isEmpty: isEmpty操作符检查源Observable是否为空（即没有发出任何值就完成了），如果为空则发出true，否则发出false。

import { EMPTY } from "rxjs";

import { isEmpty } from "rxjs/operators";

const source$ = EMPTY.pipe(isEmpty());

source$.subscribe({
  next: (value) => console.log(`源Observable是否为空：${value}`),
  complete: () => console.log("complete"),
});

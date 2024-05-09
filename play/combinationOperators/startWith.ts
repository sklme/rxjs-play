// startWith: 在 Observable 发出项之前，先发出给定的初始值。

import { of } from "rxjs";

import { startWith } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(startWith(0)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});
// Logs: 0, 1, 2, 3, 4, 5, complete

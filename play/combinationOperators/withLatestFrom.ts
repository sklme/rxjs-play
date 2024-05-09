// withLatestFrom: 当源 Observable 发出值时，它会将源 Observable 的值与其他输入 Observables 的最新值组合起来，
// !但前提是其他输入 Observables 至少已经发出了一个值。

import { interval } from "rxjs";
import { take, withLatestFrom } from "rxjs/operators";

const source$ = interval(300);
const secondSource$ = interval(100);

source$.pipe(withLatestFrom(secondSource$), take(5)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

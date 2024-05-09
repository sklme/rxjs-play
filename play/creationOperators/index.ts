/**
 * @file 创建操作符
 */
import { from, interval, of, range, take, timer } from "rxjs";

// of 创建一个 Observable，它会发出你提供的参数，然后完成。
(() => {
  console.log("start of");
  const source$ = of(1, 2, 3, 4, 5);
  source$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// from 创建一个 Observable，它会发出你提供的数组，然后完成。
(() => {
  console.log("start from");
  const source$ = from([1, 2, 3, 4, 5]);
  source$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// interval 创建一个 Observable，它会按照你提供的时间间隔发出递增的数字。
(() => {
  console.log("start interval");
  const source$ = interval().pipe(take(5));
  source$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// range 创建一个 Observable，它会发出一个范围内的数字。
(() => {
  console.log("start range");
  const source$ = range(1, 10);
  source$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// empty 创建一个 Observable，它会立即完成。
// never 创建一个 Observable，它永远不会发出值或完成。

// timer 创建一个 Observable，它会在你提供的时间后发出一个值。
(() => {
  console.log("start timer");
  const source$ = timer(100);
  source$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

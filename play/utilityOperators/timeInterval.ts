/**
 * timeInterval是一个操作符，它用于记录Observable发出值之间的时间间隔。当你对一个Observable应用timeInterval操作符时，它会返回一个新的Observable，这个新的Observable不再发出原始的值，而是发出一个包含两个属性的对象：

  value: 原始Observable发出的值。
  interval: 从上一个值被发出到当前值被发出之间的时间间隔（以毫秒为单位）。
 */

import { interval } from "rxjs";
import { timeInterval, take } from "rxjs/operators";

const source$ = interval(200).pipe(take(5)).pipe(timeInterval());

source$.subscribe({
  next: (ti) => console.log(`Interval: ${ti.interval}ms, Value: ${ti.value}`),
  complete: () => console.log("complete"),
});

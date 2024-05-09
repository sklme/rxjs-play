/**
 * @file
 *
 * combineLatest: 当任何一个输入 Observable 发出一个值时，它会结合每个输入 Observable 的最新值。
 */

import { interval, map, take } from "rxjs";
import { combineLatestWith } from "rxjs/operators";

const source$ = interval(100).pipe(
  take(5),
  map((value) => String.fromCharCode(value + 65))
);

const source2$ = interval(200).pipe(take(5));

source$.pipe(combineLatestWith(source2$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

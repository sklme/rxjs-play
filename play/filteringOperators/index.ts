/**
 * @file 过滤操作符
 */

import {
  Observable,
  filter,
  first,
  interval,
  last,
  of,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  timer,
} from "rxjs";
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  single,
} from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// filter 只发出通过提供函数的测试的值。
(() => {
  console.log("start filter");
  source$.pipe(filter((value) => value % 2 === 0)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// first 只发出通过提供函数的测试的第一个值。
(() => {
  console.log("start first");
  source$.pipe(first()).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// last 只发出通过提供函数的测试的最后一个值。
(() => {
  console.log("start last");
  source$
    .pipe(last())
    .pipe(first())
    .subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("complete"),
    });
})();

// take 只发出前 n 个值。
(() => {
  console.log("start take");
  source$.pipe(take(5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// takeLast 只发出最后 n 个值。
(() => {
  console.log("start takeLast");
  source$.pipe(takeLast(5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// takeWhile 只发出符合提供函数的测试的值，遇到不符合的值就结束。
(() => {
  console.log("start takeWhile");
  source$.pipe(takeWhile((value) => value < 5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// takeUntil: 取流中的数据，直到另一个Observable发出值。
(() => {
  const source$ = interval(100);
  const other$ = timer(500);

  // 5s之后停止取值
  source$.pipe(takeUntil(other$)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// skip 跳过前 n 个值。
(() => {
  console.log("start skip");
  source$.pipe(skip(5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// skipLast 跳过最后 n 个值。
(() => {
  console.log("start skipLast");
  source$.pipe(skipLast(5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// skipWhile 跳过流中满足条件的数据，只发出不满足条件的数据。
(() => {
  console.log("start skipWhile");
  source$.pipe(skipWhile((value) => value < 5)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// skipUntil 丢弃发出的值，直到提供的 Observable 发出一个值。
(() => {
  const source$ = interval(100).pipe(take(10));
  const other$ = timer(500);

  // 5s之后开始取值
  source$.pipe(skipUntil(other$)).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// distinct 过滤流中的重复数据。
(() => {
  console.log("start distinct");

  const source$ = of("12", "12", "34", "34", "56", "56");

  source$.pipe(distinct()).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
})();

// distinctUntilChanged 过滤流中连续重复的数据。
(() => {
  console.log("start distinctUntilChanged");

  of(1, 2, 2, 3, 1, 1, 4, 4, 5)
    .pipe(distinctUntilChanged())
    .subscribe((x) => console.log(x)); // 输出: 1, 2, 3, 1, 4, 5

  console.log("complete");
})();

// debounceTime: 在指定的时间内没有新的数据发出时，才发出最后一个数据。
// throttleTime: 在指定的时间内只发出第一个数据，然后忽略接下来的数据。

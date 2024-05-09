// sequenceEqual: sequenceEqual操作符比较两个Observable发出的值序列是否相等。如果两个序列的长度、顺序和值都相等，则发出true，否则发出false。

import { of, range, timer } from "rxjs";

import { delayWhen, sequenceEqual } from "rxjs/operators";

const source1$ = of(1, 2, 3);
const source2$ = of(1, 2, 3);

const isEqual$ = source1$.pipe(sequenceEqual(source2$));

isEqual$.subscribe({
  next: (value) => console.log(`两个Observable是否相等：${value}`),
  complete: () => console.log("complete"),
});

// !就算是发出的时间不一样，只要值相同，也会返回true
const source3$ = range(1, 3).pipe(
  delayWhen((value, index) => {
    return timer(index * 1000);
  })
);

const isEqual2$ = source1$.pipe(sequenceEqual(source3$));

isEqual2$.subscribe({
  next: (value) => console.log(`两个Observable是否相等：${value}`),
  complete: () => console.log("complete"),
});

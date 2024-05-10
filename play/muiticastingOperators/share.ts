// share: share操作符将一个单播Observable转换为多播Observable，它在内部使用了Subject来使多个订阅者共享同一个Observable执行。
// 当第一个订阅者订阅时，它会自动启动源Observable的执行，并且当最后一个订阅者取消订阅时，它会自动停止执行。

import { interval } from "rxjs";
import { share, take } from "rxjs/operators";

const source$ = interval(100).pipe(take(20), share());

source$.subscribe((value) => console.log(`Subscriber 1: ${value}`));
setTimeout(() => {
  source$.subscribe((value) => console.log(`Subscriber 2: ${value}`));
}, 1500);

// source$
//   .pipe(
//     share({
//       resetOnError: false,
//       resetOnComplete: false,
//       resetOnRefCountZero: false,
//     })
//   )
//   .subscribe((value) => console.log(`Subscriber 3: ${value}`));

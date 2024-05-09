/**
 * retryWhen是一个错误处理操作符，它允许你在源Observable发生错误时，根据另一个Observable的通知来决定是否重新订阅源Observable。这意味着你可以实现复杂的重试逻辑，比如延迟重试、有条件的重试或者有限次数的重试。

当源Observable发生错误时，retryWhen会将错误传递给一个接收错误的Observable并返回一个新的Observable的函数。这个函数的返回值（新的Observable）被称为通知Observable。如果通知Observable发出值，retryWhen会重新订阅源Observable。如果通知Observable完成或发生错误，retryWhen会将这个完成或错误传递给输出Observable。
 */

import { interval, of, throwError, timer } from "rxjs";
import { mergeMap, retryWhen } from "rxjs/operators";

const source$ = interval(100).pipe(
  mergeMap((value) => {
    if (value === 5) {
      return throwError(() => new Error("Something went wrong"));
    }
    return of(value);
  }),
  retryWhen((errors) => {
    return errors.pipe(
      mergeMap((error, index) => {
        if (index === 2) {
          // 如果已经重试了两次，就不再重试，而是抛出错误
          return throwError(() => error as Error);
        }

        console.log(
          `Attempt ${index + 1}: retrying in ${index + 1} second(s)...`
        );
        return timer((index + 1) * 1000);
      })
    );
  })
);

source$.subscribe({
  next: (val) => console.log(val),
  // error: (err) => console.error(err),
  complete: () => console.log("Complete"),
});

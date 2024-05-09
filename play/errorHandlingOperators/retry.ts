// retry: 当 Observable 发出错误时，重新订阅它指定次数。

import { interval, of, throwError, timer } from "rxjs";
import { concatMap, retry } from "rxjs/operators";

const source$ = interval(100).pipe(
  concatMap((value) => {
    if (value > 3) {
      return throwError(() => {
        return new Error("严重的错误");
      });
    }
    return of(value);
  })
);

// 发生错误之后，重新订阅2次，算上第一次的话，就是一共三次
source$.pipe(retry(2)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
  error: (error) => console.log(error),
});

source$
  .pipe(
    retry({
      count: 2,
      delay: (error, retryCount) => {
        console.log(
          `Attempt ${retryCount}: retrying in ${retryCount} second(s)...`
        );
        // return throwError(() => error as Error);   // 直接返回结果就会结束订阅

        return timer(retryCount * 1000);
      },
    })
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
    error: (error) => console.log(error),
  });

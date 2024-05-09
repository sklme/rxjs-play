// timeout 操作符用于在指定的时间内强制 Observable 发出值或完成。如果在指定时间内没有发生这些事件，它会导致 Observable 发出一个错误。

import { of, throwError, timer } from "rxjs";
import { catchError, timeout } from "rxjs/operators";

const source$ = timer(1000);

source$
  .pipe(
    timeout(500),
    catchError(() => {
      return throwError(() => new Error("超时了"));
    })
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
    error: (error: Error) => console.log(error.message),
  });

// 也可以不抛出错误，而是返回一个新的 Observable。

source$
  .pipe(
    timeout({
      each: 500,
      with: () => of("超时了"),
    })
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });

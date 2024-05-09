// finalize 操作符用于执行一些清理工作，无论 Observable 成功完成还是发生错误。它接收一个回调函数，在 Observable 被取消订阅时调用。
import { of, throwError } from "rxjs";
import { concatMap, finalize } from "rxjs/operators";

const source$ = of(1, 2, 3);

const sourceWithErr$ = source$.pipe(
  concatMap((value) => {
    if (value < 2) {
      return of(value);
    }

    return throwError(() => new Error("严重的错误"));
  })
);

source$.pipe(finalize(() => console.log("执行完了"))).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

sourceWithErr$.pipe(finalize(() => console.log("执行完了"))).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
  error: (error: Error) => console.log(error.message),
});

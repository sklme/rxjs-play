// catchError: 捕获 Observable 中的错误，并返回一个新的 Observable 或抛出错误。
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

const source$ = throwError(() => {
  return new Error("严重的错误");
});

source$
  .pipe(
    catchError((error) => {
      console.log(error);
      return of("回退信息");
    })
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
